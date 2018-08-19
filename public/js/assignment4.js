new Vue({
    el: '#exercise',
    data: {
        highlightStatus: true
    },
    computed: {
        effectClass: function () {
            console.log('effectClass');
            return {
                highlight: this.highlightStatus,
                shrink: !this.highlightStatus
            }
        }
    },
    watch: {
        highlightStatus: function (value) {
            console.log('highstatus');
            var vm = this;
            setTimeout(function () {
                vm.highlightStatus = !vm.highlightStatus;
            }, 2000);
        }
    },
    methods: {
        startEffect: function () {
            console.log('startEffect');
            this.highlightStatus = !this.highlightStatus;
        }
    }
});