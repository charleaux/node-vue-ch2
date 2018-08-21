var data = {
    title: 'The VueJS Instance',
    showParagraph: false
};

// Vue.component('hello', {
//     template: '<h1>Hello!</h1>'
// });

var vm1 = new Vue({
    el: '#app1',
    data: data,
    methods: {
        show: function () {
            this.showParagraph = true;
            this.updateTitle('The VueJS Instance (Updated)')
        },
        updateTitle: function (title) {
            this.title = title;
        }
    },
    computed: {
        lowercaseTitle: function() {
            return this.title.toLowerCase();
        }
    }
});

setTimeout(function () {
    vm1.title = 'Changed by timer!';
    // vm1.show();
},3000);

var vm2 = new Vue({
    el: '#app2',
    data: {
        title: 'The second VueJS Instance',
        showParagraph: false
    },
    methods: {
        onChange: function () {
            vm1.title = 'Changed!';
        }
    }
});

var vm3 = new Vue({
    template: '<h1>Hello!</h1>'
})

// vm3.$mount('#app3');
vm3.$mount();
document.getElementById('app3').appendChild(vm3.$el);