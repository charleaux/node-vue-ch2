new Vue({
    el: '#exercise',
    data: {
        status: true,
        started: false,
        noClassArray: ['small','vipClass'],
        inputClass: 'small',
        num4Class: 'small',
        num4Apply: true,
        num5Style: 'red',
        progressBarPct: 0
    },
    computed: {
        effectClass: function () {
            return {highlight: this.status, shrink: !this.status}
        },
        textClass: function() {
            return JSON.parse(`{"${this.num4Class}": ${this.num4Apply}}`);
        },
        textStyle: function () {
            return {backgroundColor: this.num5Style};
        }
    },
    watch: {
        started: function () {
            var vm = this;
            setTimeout(function () {
                vm.status = !vm.status;
                vm.started = !vm.started;
            }, 500);
        },
        progressBarPct: function () {
            var vm = this;
            setTimeout(function () {
                if (vm.progressBarPct < 100) {
                    vm.progressBarPct += 1;
                }
            }, 50);
        }
    },
    methods: {
        startEffect: function () {
            this.started = true;
        },
        startProgress: function () {
            this.progressBarPct += 1;
        }
    }
});