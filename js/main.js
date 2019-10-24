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
  },
  watch: {
    name(newName) {
      localStorage.name = newName;
    },
    name2(newName2) {
      localStorage.name2 = newName2;
    }
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
      if (this.money2 === "") {
        this.sum = this.newMoney;
      } else {
        this.sum = parseInt(this.newMoney + this.sum);
      }
      this.newMoney = "";
    },
    deleteItem: function(index) {
      this.sum = parseInt(this.sum - this.money2);
      this.money2.splice(index, 1);
      this.content2.splice(index, 1);
    },
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
      if (this.money3 === "") {
        this.sum2 = this.newMoney2;
      } else {
        this.sum2 = parseInt(this.newMoney2 + this.sum2);
      }
      this.newMoney2 = "";
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
