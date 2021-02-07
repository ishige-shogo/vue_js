var vm1 = new Vue({
    el: '#app1',
    data: {
        message: "インスタンス1"
    }
})

var vm2 = new Vue({
    el: '#app2',
    data: {
        message: "インスタンス2"
    },
    methods: {
        changeMessage1: function(){
            vm1.message = "インスタンス2によって変わりました。"
        }
    }
})