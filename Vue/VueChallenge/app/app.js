
const app = Vue.createApp({

    data() {
        return {
            data1: 'Jacob Garwood',
            vueLink: 'https://vuejs.org',
            counter:10
        }
    },
    methods:{
        getTodayDate() {
            let today = new Date();
             today = today.toLocaleDateString();
            return today
        },
        addMore(num) {
            this.counter+=num
        }
    }
    




});
 

app.mount('#challenge')