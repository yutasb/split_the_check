const Top = {
  template: `
    <div class='title'>
      <h1>ワリカンをもっとラクに！</h1>
    </div>
  
    `
};

const User = {
  template: `
    
 <div class="body">
 <div class="name">
   <span class="transparent"> 名前</span
   ><input v-model="name" type="text" />
 </div>
 <div class="one">
   <div class="inbox">
     <span class="transparent">内容</span
     ><input v-model="newContent" type="text" />
     <button v-on:click="addContent">送信</button>
     <span class="transparent">金額</span
     ><input type="number" v-model.number="newMoney" class="money1" />円
     <button v-on:click="addMoney">送信</button>
   </div>
   <div class="bigsum">
     <span class="smallsum">合計</span
     ><input v-model.number="sum" type="number" class="sum" />円
   </div>

   <ul>
     <div class="content">
       <li v-for="content in content2">
         <span>{{ content.item }}</span>
       </li>
     </div>
     <div class="money">
       <li v-for="(money,index) in money2">
         <span>{{ money.item2 | localNum }}</span>
         <button v-on:click="deleteItem(index)">Delete</button>
       </li>
     </div>
   </ul>
 </div>

 <div class="app2">
   <div class="name2">
     <span class="transparent">名前</span
     ><input v-focus v-model="name2" type="text" />
   </div>
   <div class="two">
     <div class="inbox">
       <span class="transparent">内容</span
       ><input v-model="newContent2" type="text" />
       <button v-on:click="addContent2">送信</button>
       <span class="transparent">金額</span
       ><input v-model.number="newMoney2" type="number" />円
       <button v-on:click="addMoney2">送信</button>
     </div>
     <div class="bigsum">
       <span class="smallsum">合計</span
       ><input v-model.number="sum2" type="number" class="sum2" />円
     </div>

     <div class="content2Money">
       <ul>
         <div class="content2">
           <li v-for="content2 in content3">
             <span>{{ content2.item2 }}</span>
           </li>
         </div>
         <div class="money2">
           <li v-for="money2 in money3">
             <span>{{ money2.item3 | localNum }}</span>
           </li>
         </div>
       </ul>
     </div>
   </div>


   <div class="final">
     <div class="total">
       <button v-on:click="totalMoney">2人合計</button>
       <input v-model.number="total" type="number" />円
     </div>

     <div class="result">
       <button v-on:click="result">精算</button>
       <input v-model="result2" type="text" class="totalinput" />
     </div>
   </div>
 </div>
</div>

 `
};

const router = new VueRouter({
  routes: [{ path: "/top", component: Top }, { path: "/user", component: User }]
});

const app = new Vue({
  router
}).$mount("#app");
