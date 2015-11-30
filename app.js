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
    displayGoalNumber: function() {
      this.resetGoalsContainer();

      var select_achieved = document.getElementById("select_achieved");
      var option = document.createElement("option");
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
    resetGoalsContainer: function() {
      // remove goal_container
      var app_container = document.getElementById("app");
      var goal_container = document.getElementById("goal_container");
      app_container.removeChild(goal_container);
      // add goal_container
      var goal_container = document.createElement("div");
      goal_container.setAttribute("id", "goal_container");
      app_container.appendChild(goal_container);
      // reset options in select
      document.getElementById("select_achieved").options.length = 0;
    },
    displayAchieved: function() {
      this.resetGoalsContainer();
      var select_achieved = document.getElementById("select_achieved");
      var option = document.createElement("option");
      option.text = "0";
      option.value = 0;
      select_achieved.appendChild(option);
      for(i=0; i<this.achieved; i++) {
        // create boxes
        var span_box = document.createElement("span");
        span_box.setAttribute("class", "box");
        var percent = i / this.achieved;
        span_box.style.backgroundColor=this.hsl_col_perc(percent);
        goal_container.appendChild(span_box);
      }
      for(i=0; i<this.selected; i++) {
        // add new options to select
        var option = document.createElement("option");
        option.text = i + 1;
        option.value = i + 1;
        select_achieved.appendChild(option);
      }
      // change achieved
      this.achieved = this.selected;
    },
  }
})