new Vue({
    el: '#exercise',
    data: {
        status: true,
        started: false,
        noClassArray: ['fatBorder','vipClass']
    },
    computed: {
        effectClass: function () {
            return {highlight: this.status, shrink: !this.status}
        }
    },
    watch: {
        started: function () {
            var vm = this;
            setTimeout(function () {
                vm.status = !vm.status;
                vm.started = !vm.started;
            }, 500);
        }
    },
    methods: {
        startEffect: function () {
            // this.status = !this.status;
            this.started = true;
        }
    }
});