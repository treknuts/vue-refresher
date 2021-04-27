var app = new Vue({
  el: "#app",
  data: {
    message: "Hello, Vue!",
  },
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "You loaded this page on " + new Date().toLocaleString(),
  },
});

var app3 = new Vue({
  el: "#app-3",
  data: {
    seen: true,
  },
  methods: {
    switcheroo: function () {
      this.seen = !this.seen;
    },
  },
});

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      { id: 1, text: "Learn JavaScript" },
      { id: 2, text: "Learn Vue" },
      { id: 3, text: "Build something awesome" },
    ],
  },
});

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Hello Vue!",
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
});

var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Hello Vue",
  },
});

Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>",
});

var app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      { id: 1, text: "Vegetables" },
      { id: 2, text: "Cheese" },
      { id: 3, text: "Whatever else humans are supposed to eat." },
    ],
    text: "",
  },
  methods: {
    addItem: function () {
      this.groceryList.push({
        id: this.groceryList.length + 1,
        text: this.text,
      });
      console.log(this.groceryList);
    },
  },
});
