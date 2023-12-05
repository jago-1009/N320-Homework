<script>
export default {
  data() {
    return {
      teamName: '',
      roleFilter: '',
      teams: [],
      listedMembers: []
    }
  },
  methods: {
    logData(data) {
      console.log('MEMBERS', data)
      this.listedMembers.push(data)
      console.log('TEAMS', this.teams)
      this.$emit('member-data', {
        teams: this.teams,
        listedMembers: this.listedMembers
      })
    },
    setTeamDetails(data) {
      this.teamName = data.teamName
      if (this.teams.includes(data.teamName) == true) {
        console.log('ALREADY IN THERE')
      } else {
        this.teams.push(data.teamName)
      }
      this.roleFilter = data.roleSelected
      console.log('TEAM', this.teamName, 'ON', this.roleFilter)
      console.log('OUR TEAMS:', this.teams)
      this.$emit('filter-role', {
        filterRole: data.roleSelected
      })
    }
  }
}
</script>

<template>
  <TextForm @form-submit="setTeamDetails" @change-text="textChange"></TextForm>
  <DataList :team-name="teamName" :role-selected="roleFilter" @members="logData"></DataList>
</template>

<style>
template {
  display: block;
}
</style>
