Vue.filter("localNum", function(value) {
  return value.toLocaleString();
});

var app = new Vue({
  el: "#app",
  data: {
    newContent: "",
    content2: [],
    newMoney: "",
    money2: [],
    sum: ""
  },
  methods: {
    addContent: function() {
      if (this.newContent === "") return;
      var content = {
        item: this.newContent
      };
      this.content2.push(content);
      this.newContent = "";
    },
    addMoney: function() {
      if (this.newMoney === "") return;
      var money = {
        item2: this.newMoney
      };
      this.money2.push(money);
      this.newMoney = "";
      var total = this.money2.reduce(function(a, b) {
        return a + b;
      });
      this.sum = total;
    }
  }
});

let iterable = [10, 20, 30];
let total = iterable.reduce(function(a, b) {
  return a + b;
});
console.log(total);

var app2 = new Vue({
  el: "#app2",
  data: {
    newContent2: "",
    content3: [],
    newMoney2: "",
    money3: [],
    sum: ""
  },
  methods: {
    addContent2: function() {
      if (this.newContent2 === "") return;
      var content2 = {
        item2: this.newContent2
      };
      this.content3.push(content2);
      this.newContent2 = "";
    },
    addMoney2: function() {
      if (this.newMoney2 === "") return;
      var money2 = {
        item3: this.newMoney2
      };
      this.money3.push(money2);
      this.newMoney2 = "";
    },
    sumMoney: function() {
      this.sum;
    }
  }
});
