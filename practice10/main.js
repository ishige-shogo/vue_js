var data = {
    message: "Hello", 
    name: "shige"
}

Vue.component('hello', {
    template: "<p>こんにちは</p>"
});

var vm = new Vue({
    el: '#app',
    data: data,
    computed: {
        myData: function(){
            return this.$data;
        }
    }
})

new Vue({
    el: app2,
    data: {
        name: "shige"
    },
    template: "<h1>こんにちは、{{name}}</h1>"
})

new Vue({
    el: app3,
    data: {
        name: "shige"
    },
    render: function(createElement){
        return createElement("h1", 'こんにちは、' + this.name );
    }
})
