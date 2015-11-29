new Vue({
  el: '#app',
  data: {
    achieved: 0,
    selected: 0,
    goalNumbers: [
      { text: '0', value: 0 }, { text: '1', value: 1 }, { text: '2', value: 2 }, { text: '3', value: 3 }, { text: '4', value: 4 }, { text: '5', value: 5 }, { text: '6', value: 6 }, { text: '7', value: 7 }, { text: '8', value: 8 }, { text: '9', value: 9 }, { text: '10', value: 10 },
    ]
  },
  methods: {
    displayGoalNumber: function(e) {
      e.preventDefault();
      this.deleteReplaceGoalsContainer();

      var option = document.createElement("option");
      option.setAttribute("class", "option_achieved");
      option.text = "0";
      option.value = 0;
      select_achieved.appendChild(option);
      for(i=0; i<this.selected; i++) {
        // create boxes
        var span_box = document.createElement("span");
        span_box.setAttribute("class", "box");
        var percent = i / this.selected;
        span_box.style.borderColor=this.hsl_col_perc(percent);
        goal_container.appendChild(span_box);

        // add new options to select
        var option = document.createElement("option");
        option.setAttribute("class", "option_achieved");
        option.text = i + 1;
        option.value = i + 1;
        select_achieved.appendChild(option);
      }
      // change achieved
      this.achieved = this.selected;
    },
    hsl_col_perc: function(value) {
      var hue = 120 * value;
      return 'hsl('+hue+',100%,50%)';
    },
    deleteReplaceGoalsContainer: function() {
      var app_container = document.getElementById("app");

      var goal_container = document.getElementById("goal_container");
      app_container.removeChild(goal_container);
      var goal_container = document.createElement("div");
      app_container.appendChild(goal_container);
      goal_container.setAttribute("id", "goal_container");
      // remove select
      var select_achieved_container = document.getElementById("select_achieved_container");
      var select_achieved = document.getElementById("select_achieved");
      var option_achieved = document.getElementsByClassName("option_achieved");
      select_achieved_container.removeChild(select_achieved);
      // add select
      var select_achieved = document.createElement("select");
      select_achieved.setAttribute("v-model", "achieved");
      select_achieved.setAttribute("id", "select_achieved");
      select_achieved_container.appendChild(select_achieved);

    },
    displayAchieved: function(e) {
      e.preventDefault();
      this.deleteReplaceGoalsContainer()
      for(i=0; i<this.achieved; i++) {
        var span_box = document.createElement("span");
        span_box.setAttribute("class", "box");
        var percent = i / this.achieved;
        console.log(percent);
        span_box.style.backgroundColor=this.hsl_col_perc(percent);
        goal_container.appendChild(span_box);
      }
    }
  }
})