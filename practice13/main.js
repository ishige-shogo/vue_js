var component = {
    data: function(){
        return {
            number: 12
        }
    },
    template: '<p>いいね({{number}})<button @click="addNumber">+1</button></p>',
    methods: {
        addNumber: function(){
            this.number += 1;
        }
    }
}

new Vue({
    el: '#app',
    components: {
        'my-component': component
    }
})

new Vue({
    el: '#app2',
})

