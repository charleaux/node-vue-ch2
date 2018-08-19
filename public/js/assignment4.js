new Vue({
    el: '#exercise',
    data: {
        status: true,
        started: false,
        noClassArray: ['small','vipClass'],
        inputClass: 'small',
        // inputClass: ['fatBorder', 'medium'],
        num4Class: 'small',
        num4Apply: true,
        num5Style: 'red'
    },
    computed: {
        effectClass: function () {
            return {highlight: this.status, shrink: !this.status}
        },
        textClass: function() {
            return JSON.parse(`{"${this.num4Class}": ${this.num4Apply}}`);
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