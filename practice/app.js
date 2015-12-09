/*=================================================================
                          task component
=================================================================*/
var task = Vue.extend({
  template: "#task-template",

  props: ["task"],

  data: function() {
    return { 
      goalSelect: 0, 
      achievedSelect: 0,
      goalOptions: [
        { text: '0', value: 0 }, { text: '1', value: 1 }, { text: '2', value: 2 }, { text: '3', value: 3 }, { text: '4', value: 4 }, { text: '5', value: 5 }, { text: '6', value: 6 }, { text: '7', value: 7 }, { text: '8', value: 8 }, { text: '9', value: 9 }, { text: '10', value: 10 },
      ], 
    }
  },

  methods: {
    // delete all progress boxes
    goalReset: function() {
      if(document.getElementById(this.task.id) !== null) {
        var del = document.getElementById(this.task.id);
        while(del.firstChild) {
          del.removeChild(del.firstChild);
        }
      }
    },
    /* 
    when goal is selected from dropdown selection:
      - delete all progress boxes
      - add options to achieved dropdown selection
      - create empty progress boxes
    */
    goalNumberSelect: function() {
        this.task.goal = this.goalSelect;
        this.goalReset();

        var id_number = document.getElementById(this.task.id);

        var option = document.createElement("option");
        option.text = "0";
        option.value = 0;

        if(document.getElementById("select_achieved") !== null) {
          var select_achieved = document.getElementById("select_achieved");
          select_achieved.setAttribute("id", "select_achieved" + this.task.id);
          select_achieved.appendChild(option);
        }
        if(document.getElementById("select_achieved" + this.task.id) !== null) {
          var select_achieved = document.getElementById("select_achieved" + this.task.id);
          select_achieved.options.length = 0;
          select_achieved.appendChild(option);
        }

        for(i=0; i<this.goalSelect; i++) {
          var span_box = document.createElement("span");
          span_box.setAttribute("class", "box");
          var percent = i / this.goalSelect;
          span_box.style.borderColor=this.hsl_col_perc(percent);
          id_number.appendChild(span_box);
          var elements = document.getElementsByClassName('box');
          var option = document.createElement("option");
          option.text = i + 1;
          option.value = i + 1;
          select_achieved.appendChild(option);
        }
    },
    /* 
    when achieved is selected from dropdown selection:
      - run goalNumberSelect(), resetting the page before taking action
      - create full progress boxes
    */
    achievedNumberSelect: function() {
        this.task.achieved = this.achievedSelect;

        this.goalNumberSelect();

        var elements = document.getElementById(this.task.id).querySelectorAll(".box");
        for(i=0; i<this.achievedSelect; i++) {
          var percent = i / this.goalSelect;
          elements[i].style.backgroundColor=this.hsl_col_perc(percent);
        }
    },
    // calculate the hsl color for the progress boxes
    hsl_col_perc: function(value) {
      var hue = 120 * value;
      return 'hsl('+hue+',100%,50%)';
    },

  },

});
Vue.component("task", task);



/*=================================================================
                            Vue
=================================================================*/
new Vue({
  el: "#app",
  data: {
    tasks: [],
    taskName: "",
    taskGoal: 0,
    taskAchieved: 0,
    taskId: 0,
  },
  methods: {
    /* 
      - add a task object to the tasks array
      - reset the task input
      - increment the id number
    */
    addTask: function() {
        this.tasks.push({ name: this.taskName,
                          goal: this.taskGoal,
                          achieved: this.taskAchieved,
                          id: this.taskId,
        });
        this.taskName = "";
        this.taskId += 1;
    },
  },
});