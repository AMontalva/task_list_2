new Vue({
  el: '#app',
  data: {
    goalNumber: 0,
    goalNumberAchieved: 0,
  },
  methods: {
    displayGoalNumber: function(e) {
      e.preventDefault();
      this.deleteReplaceGoalsContainer()
      for(i=0; i<this.goalNumber; i++) {
        var span_box = document.createElement("span");
        span_box.setAttribute("class", "box");
        var percent = i / this.goalNumber;
        console.log(percent);
        span_box.style.borderColor=this.hsl_col_perc(percent);
        goal_container.appendChild(span_box);
      }
    },
    hsl_col_perc: function(value) {
      hue = 120 * value;
      return 'hsl('+hue+',100%,50%)';
      // var hue=((value)*120).toString(10);
      // return ["hsl(",hue,",100%,50%)"].join("");
    },
    displayGoalNumberAchieved: function(e) {
      e.preventDefault();
      this.deleteReplaceGoalsContainer()
      for(i=0; i<this.goalNumberAchieved; i++) {
        var span_box = document.createElement("span");
        span_box.setAttribute("class", "box");
        var percent = i / this.goalNumberAchieved;
        console.log(percent);
        span_box.style.backgroundColor=this.hsl_col_perc(percent);
        goal_container.appendChild(span_box);
      }
    },
    deleteReplaceGoalsContainer: function() {
      var app_container = document.getElementById("app");
      var goal_container = document.getElementById("goal_container");
      app_container.removeChild(goal_container);
      var goal_container = document.createElement("div");
      app_container.appendChild(goal_container);
      goal_container.setAttribute("id", "goal_container");
    }
  }
})