
const vm = Vue.createApp({
    methods: {
        getTodayDate() {
            let today = new Date();
            let tMonth = today.getMonth() + 1
            let tDay = today.getDate() + 7;
            let tYear = today.getFullYear();
            if (tDay > 31) {
                tMonth += 1;
                tDay -= 31
            } else {
            }
            today = today.toLocaleDateString();

            return `${tMonth}/${tDay}/${tYear}`
        },
       


    },
    data() {
        return {
            name: 'Jacob Garwood',
            course: 'N320',
            assign_name: 'Homework 6: First Vue Assignment',
            difficulty_level: 3,
            assignment_due: this.getTodayDate(),
            completed: true,
          

        }
    },


})

vm.mount('#title')


const listV = Vue.createApp({
    data() {
        return {
            data:'',
            myList: ["HTML", "CSS", "Javascript", "Vue", "PHP", "Sass", "React"],
            counter:0,
            oldData:''
        }
    },
    methods: {
 printList() {

            let h1 = document.createElement('h1')
            let ul = document.createElement('ul')
            let li = document.createElement('li')
            let hr = document.createElement('hr')

            h1.innerText = "My Favorite Languages"
            li.innerHTML = this.dataShow
            this.myList.forEach(lang => {
                li = document.createElement('li')
                li.innerText = lang;
                ul.appendChild(li)
            })


            document.body.append(h1)
            document.body.append(ul)
            document.body.append(hr)
        },
        countList() {
            
            if (this.counter>(this.myList.length-2)) {
                this.counter=0;
                
            }
            else {
                this.counter++;
            }
        },
        pushData() {
            this.myList.push(this.data)
            this.oldData = this.data
        },
        renderOld() {
            if (this.oldData!= "") {
                return `${this.oldData} has been added to your list!`
            }
        }   
        
    }
})
listV.mount("#list")