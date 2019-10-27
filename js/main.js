Vue.filter("localNum", function(value) {
  return value.toLocaleString();
});

// ページ読み込み時、フォーカスをつける。→　HTMLに<input v-focus>をつけることで対応。
Vue.directive("focus", {
  inserted: function(el) {
    el.focus();
  }
});

var app = new Vue({
  el: "#app",
  data: {
    newContent: "",
    content2: [],
    newMoney: "",
    money2: [],
    sum: "",
    newContent2: "",
    content3: [],
    newMoney2: "",
    money3: [],
    sum2: "",
    total: "",
    result2: "",
    name: "",
    name2: ""
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.name2) {
      this.name2 = localStorage.name2;
    }
    //1人目
    if (localStorage.getItem("content2")) {
      try {
        this.content2 = JSON.parse(localStorage.getItem("content2"));
      } catch (e) {
        localStorage.removeItem("content2");
      }
    }
    if (localStorage.getItem("money2")) {
      try {
        this.money2 = JSON.parse(localStorage.getItem("money2"));
      } catch (e) {
        localStorage.removeItem("money2");
      }
    }
    if (localStorage.sum) {
      this.sum = localStorage.sum;
    }
    //2人目
    if (localStorage.getItem("content3")) {
      try {
        this.content3 = JSON.parse(localStorage.getItem("content3"));
      } catch (e) {
        localStorage.removeItem("content3");
      }
    }
    if (localStorage.getItem("money3")) {
      try {
        this.money3 = JSON.parse(localStorage.getItem("money3"));
      } catch (e) {
        localStorage.removeItem("money3");
      }
    }
    if (localStorage.sum2) {
      this.sum2 = localStorage.sum2;
    }
    //合計
    if (localStorage.total) {
      this.total = localStorage.total;
    }
  },
  watch: {
    name(newName) {
      localStorage.name = newName;
    },
    name2(newName2) {
      localStorage.name2 = newName2;
    },
    sum(newSum) {
      localStorage.sum = newSum;
    },
    sum2(newSum2) {
      localStorage.sum2 = newSum2;
    },
    total(newTotal) {
      localStorage.total = newTotal;
    }
  },
  methods: {
    //1人目
    addContent: function() {
      if (this.newContent === "") return;
      var content = {
        item: this.newContent
      };
      this.content2.push(content);
      this.newContent = "";
      this.saveContent2();
    },
    addMoney: function() {
      if (this.newMoney === "") return;
      var money = {
        item2: this.newMoney
      };
      this.money2.push(money);
      if (this.money2 === "") {
        this.sum = this.newMoney;
      } else {
        this.sum = parseInt(this.newMoney + this.sum);
      }
      this.newMoney = "";
      this.saveMoney2();
    },
    deleteItem: function(index) {
      // this.sum = parseInt(this.sum - this.money);
      this.money2.splice(index, 1);
      this.content2.splice(index, 1);
      this.saveContent2();
      this.saveMoney2();
    },
    saveContent2() {
      const parsed = JSON.stringify(this.content2);
      localStorage.setItem("content2", parsed);
    },
    saveMoney2() {
      const parsed = JSON.stringify(this.money2);
      localStorage.setItem("money2", parsed);
    },
    saveSum() {
      const parsed = JSON.stringify(this.sum);
      localStorage.setItem("sum", parsed);
    },
    //2人目
    addContent2: function() {
      if (this.newContent2 === "") return;
      var content2 = {
        item2: this.newContent2
      };
      this.content3.push(content2);
      this.newContent2 = "";
      this.saveContent3();
    },
    addMoney2: function() {
      if (this.newMoney2 === "") return;
      var money2 = {
        item3: this.newMoney2
      };
      this.money3.push(money2);
      if (this.money3 === "") {
        this.sum2 = this.newMoney2;
      } else {
        this.sum2 = parseInt(this.newMoney2 + this.sum2);
      }
      this.newMoney2 = "";
      this.saveMoney3();
    },
    deleteItem2: function(index) {
      // this.sum = parseInt(this.sum - this.money);
      this.money3.splice(index, 1);
      this.content3.splice(index, 1);
      this.saveContent3();
      this.saveMoney3();
    },
    saveContent3() {
      const parsed = JSON.stringify(this.content3);
      localStorage.setItem("content3", parsed);
    },
    saveMoney3() {
      const parsed = JSON.stringify(this.money3);
      localStorage.setItem("money3", parsed);
    },
    saveSum2() {
      const parsed = JSON.stringify(this.sum2);
      localStorage.setItem("sum2", parsed);
    },
    totalMoney: function() {
      this.total = parseInt(this.sum + this.sum2);
    },
    result: function() {
      var splitTotal = this.total / 2;
      var nameBig = this.sum - splitTotal;
      var name2Big = this.sum2 - splitTotal;
      if (this.sum > this.sum2) {
        this.result2 =
          this.name2 + "が" + this.name + "に" + nameBig + "円払う";
      } else if (this.sum === this.sum2) {
        this.result2 = "精算はありません";
      } else {
        this.result2 =
          this.name + "が" + this.name2 + "に" + name2Big + "円払う";
      }
    }
  }
});
