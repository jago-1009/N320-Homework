let appVue = Vue.createApp({
data() {
    return {
    input:'',
    inputText:''
    }
},
computed: {
},
watch : {
     input(newVal, oldVal) {
        if (oldVal != "") {
        this.inputText= `Your Value changed from ${oldVal} to ${newVal}`
        }
    }
}


})

appVue.mount("#appV")