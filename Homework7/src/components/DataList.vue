p
<script>
export default {
  props: ['teamName', 'roleSelected'],
  data() {
    return {
      showInfo: {},
      showStyle: 'none',
      members: [
        {
          id: 1,
          name: 'Chandler Bing',
          phone: '123 123 1234',
          email: 'cBing@gmail.com',
          role: 'Developer',
          team: ''
        },
        {
          id: 2,
          name: 'Joey Tribbiani',
          phone: '321 321 4321',
          email: 'jtribby@gmail.com',
          role: 'UI/UX',
          team: ''
        },
        {
          id: 3,
          name: 'Ross Geller',
          phone: '222 333 4444',
          email: 'rgeller@gmail.com',
          role: 'Developer',
          team: ''
        },
        {
          id: 4,
          name: 'Monica Bing',
          phone: '123 123 1235',
          email: 'mbing@gmail.com',
          role: 'Designer',
          team: ''
        },
        {
          id: 5,
          name: 'Rachel Green',
          phone: '876 345 1678',
          email: 'rgreen@gmail.com',
          role: 'UI/UX',
          team: ''
        },
        {
          id: 6,
          name: 'Phoebe Buffay',
          phone: '678 908 5686',
          email: 'pbuff@gmail.com',
          role: 'UI/UX',
          team: ''
        },
        {
          id: 7,
          name: 'Stacy Boling',
          phone: '345 679 4212',
          email: 'sBoling@gmail.com',
          role: 'Designer',
          team: ''
        },
        {
          id: 8,
          name: 'Jake Trimult',
          phone: '443 665 7888',
          email: 'jtrim@gmail.com',
          role: 'Developer',
          team: ''
        },
        {
          id: 9,
          name: 'Rose Greathouse',
          phone: '345 567 9087',
          email: 'rgreat@gmail.com',
          role: 'UI/UX',
          team: ''
        },
        {
          id: 10,
          name: 'Mindy Kellum',
          phone: '555 666 7777',
          email: 'mKellum@gmail.com',
          role: 'UI/UX',
          team: ''
        },
        {
          id: 11,
          name: 'Sarah Miller',
          phone: '987 654 1234',
          email: 'smiller@gmail.com',
          role: 'Developer',
          team: ''
        },
        {
          id: 12,
          name: 'Caroline Bender',
          phone: '111 222 3456',
          email: 'cBend@gmail.com',
          role: 'Designer',
          team: ''
        }
      ],
      filteredMembers: [],
      myMembers: [],
      adding:{}
    }
  },
  methods: {
    addToArr(data,idx) {
      this.myMembers.push(data)
      data.team=this.teamName
      this.adding[idx] = !this.adding[idx]

    },
    moreInfo(idx) {
        this.showInfo[idx] = !this.showInfo[idx]

      
    },
    filterRole(data) {
      console.log('DATA', data)
      this.filteredMembers = this.members.filter((member) => member.role == activeInfo)
    },
    filterMembers() {
      console.log('FILTER', this.roleFilter)
    }
  },
  computed: {
   
  },
  watch: {
    roleSelected: function (data) {
      this.filteredMembers = this.members.filter(member => member.role === data)
      
    }
  }
}
</script>
<template>
  <h3>The people in {{ this.teamName }}</h3>
  <h4>Filter by: {{ roleSelected }}</h4>
  <p v-for="members in myMembers" :key="members.id">{{ members.name }}</p>
  <hr />
  <div class="card-holder">
    <div v-for="member in filteredMembers" :key="member.id" class="name-card">
      <h2>{{ member.name }}</h2>
      <p>{{ member.role }}</p>

      <button class="button" @click="moreInfo(member.id)" >
        <div v-if="!showInfo[member.id]">Show More Info</div>
        <div v-else>Hide Info</div>
        
      
      </button>
   
      <button  @click="addToArr(member, member.id)" v-show="!adding[member.id]" >add to {{ this.teamName }}</button>
      <div class="moreInfo" v-show="showInfo[member.id]">

        <p>{{ member.phone }}</p>
        <p>{{ member.email }}</p>
      </div>
    </div>
  </div>
  
</template>

<style>
.name-card {
  width: 1280px;
  background-color: gainsboro;
  flex-wrap: wrap;
  height: 200px;
  display: block;
  align-items: flex-start;
  flex-direction: column;
}
</style>
