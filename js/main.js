Vue.filter("localNum", function(value) {
  return value.toLocaleString();
});

// ページ読み込み時、フォーカスをつける。→　HTMLに<input v-focus>をつけることで対応。
Vue.directive("focus", {
  inserted: function(el) {
    el.focus();
  }
});

//変数に格納しておくことで、session/localの切り替え容易になる
var storage = localStorage;

var app = new Vue({
  el: "#app",
  data: {
    newContent: "",
    content2: [],
    newMoney: "",
    money2: [],
    newContent2: "",
    content3: [],
    newMoney2: "",
    money3: [],
    total: "",
    result2: "",
    name: "",
    name2: ""
  },
  mounted() {
    if (storage.name) {
      this.name = storage.name;
    }
    if (storage.name2) {
      this.name2 = storage.name2;
    }
    //1人目
    if (storage.getItem("content2")) {
      try {
        this.content2 = JSON.parse(storage.getItem("content2"));
      } catch (e) {
        storage.removeItem("content2");
      }
    }
    if (storage.getItem("money2")) {
      try {
        this.money2 = JSON.parse(storage.getItem("money2"));
      } catch (e) {
        storage.removeItem("money2");
      }
    }
    if (storage.sum) {
      this.sum = storage.sum;
    }
    //2人目
    if (storage.getItem("content3")) {
      try {
        this.content3 = JSON.parse(storage.getItem("content3"));
      } catch (e) {
        storage.removeItem("content3");
      }
    }
    if (storage.getItem("money3")) {
      try {
        this.money3 = JSON.parse(storage.getItem("money3"));
      } catch (e) {
        storage.removeItem("money3");
      }
    }
    if (storage.sum2) {
      this.sum2 = storage.sum2;
    }
    //合計
    if (storage.total) {
      this.total = storage.total;
    }
  },
  watch: {
    name(newName) {
      storage.name = newName;
    },
    name2(newName2) {
      storage.name2 = newName2;
    },
    sum(newSum) {
      storage.sum = newSum;
    },
    sum2(newSum2) {
      storage.sum2 = newSum2;
    },
    total(newTotal) {
      storage.total = newTotal;
    }
  },
  methods: {
    toHome: function() {
      location.href = "home.html";
    },
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
      storage.setItem("content2", parsed);
    },
    saveMoney2() {
      const parsed = JSON.stringify(this.money2);
      storage.setItem("money2", parsed);
    },
    saveSum() {
      const parsed = JSON.stringify(this.sum);
      storage.setItem("sum", parsed);
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
      storage.setItem("content3", parsed);
    },
    saveMoney3() {
      const parsed = JSON.stringify(this.money3);
      storage.setItem("money3", parsed);
    },
    saveSum2() {
      const parsed = JSON.stringify(this.sum2);
      storage.setItem("sum2", parsed);
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
  },
  computed: {
    sum: function() {
      total = 0;
      for (x of this.money2) {
        total += x.item2;
      }
      return total;
    },
    sum2: function() {
      total = 0;
      for (x of this.money3) {
        total += x.item3;
      }
      return total;
    }
  }
});
