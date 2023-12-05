<script>
export default {
  data() {
    return {
      teams: [],
      listedMembers: []
    }
  },
  methods: {
    logData(data) {
      console.log('APP.VUE DATA', data.teams)
      if (this.teams.includes(data.teams)) {
        console.log('ALREADY IN THERE', data.teams)
      } else {
        this.teams.push(data.teams)
        console.log('PUSHED', this.teams)
      }
      this.listedMembers = data.listedMembers
    }
  }
}
</script>
<template>
  <div>
    <div class="navbar">
      <router-link to="/home" key="home">Members</router-link>
      <router-link
        :to="{
          name: 'teams',
          query: {
            teams: JSON.stringify(this.teams),
            listedMembers: JSON.stringify(this.listedMembers)
          }
        }"
        key="teams"
        >Teams</router-link
      >
    </div>
    <router-view @member-data="logData"></router-view>
  </div>
</template>

<style>
.navbar {
  width: 100%;
  height: 30px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.navbar a {
  text-decoration: none;
  color: white;
}
</style>
