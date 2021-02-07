new Vue({
    el: '#app',
    data: {
        fruits: ["apple", "banana", "orange"]
    }
})

new Vue({
    el: '#app2',
    data: {
        fruits: ["apple", "banana", "orange"],
        object: {
            firstName: "太郎",
            lastName: "田中",
            age: 21
        }
    }
})

new Vue({
    el: '#app3',
    data: {
        fruits: ["apple", "banana", "orange"],
    },
    methods: {
        remove: function(){
            this.fruits.shift()
        }
    }
})