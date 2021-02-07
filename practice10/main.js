var data = {
    message: "Hello", 
    name: "shige"
}
var vm = new Vue({
    el: '#app',
    data: data,
    computed: {
        myData: function(){
            return this.$data;
        }
    }
})
