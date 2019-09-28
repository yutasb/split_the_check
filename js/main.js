Vue.filter("localNum", function(value) {
  return value.toLocaleString();
});

var app = new Vue({
  el: "#app",
  data: {
    newContent: "",
    content2: [],
    newMoney: "",
    money2: []
  },
  methods: {
    addContent: function() {
      if (this.newContent === "") return;
      var content = {
        item: this.newContent,
        isDOne: false
      };
      this.content2.push(content);
      this.newContent = "";
    },
    addMoney: function() {
      if (this.newMoney === "") return;
      var money = {
        item2: this.newMoney,
        isDone: false
      };
      this.money2.push(money);
      this.newMoney = "";
    }
  }
});
