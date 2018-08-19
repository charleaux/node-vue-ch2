new Vue({
    el: '#exercise',
    data: {
        value: 0,
        timeout: 5000
    },
    computed: {
        result: function () {
            return this.value < 37 ? 'not there yet' : 'done';
        }
    },
    watch: {
        value: function (val) {
            var vm = this;
            if (this.result === 'done') {
                setTimeout(function () {
                    vm.value = 0;
                }, this.timeout);
            }
        }
    },
    methods: {
        changeTimeout: function (event) {
            this.timeout = event.target.value;
        }
    }
});