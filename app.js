new Vue({
  el: '#app',
  data: {
    goalNumber: 0,
  },
  methods: {
    displayGoal: function(e) {
      e.preventDefault();
      var box = "<span class='box'></span>";
      var goal_container = document.getElementById("goal_container");
      for(i=0; i<this.goalNumber; i++) {
        goal_container.innerHTML += box;
      }
    }
  }
})