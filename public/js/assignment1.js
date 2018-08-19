new Vue({
    el: '#exercise',
    data: {
        name: 'Charles Torry',
        age: 36,
        image: 'https://cdn-images-1.medium.com/max/1600/1*ysspHBTffLmP8PEYEy1awA.png'
    },
    methods: {
        random: function () {
            return Math.random() * 100;
        }
    }
});