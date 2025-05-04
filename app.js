const app = Vue.createApp({
    data() {
        return {
            Name: 'Filippo',
            Age: 22,
            Number1: 10,
            Number2: 38,
            Image: 'https://64.media.tumblr.com/a6b938e577307388e5cbb9fd7e936016/tumblr_otgmlvkI3M1w3rqyeo5_400.png',

        };
    },
    methods: {
        favoriteNumber() {
            const radomNumber = Math.random();
            if (radomNumber < 0.5) {
                return this.Number1;
            } else {
                return this.Number2;
            }
        }
    }
});

app.mount('#assignment');  