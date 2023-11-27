
<script >
export default {
  data() {
    return {
      teamName: '',
      roleFilter: ''
    }
  },
  methods: {
    setTeamDetails(data) {
       this.teamName = data.teamName
      this.roleFilter = data.roleSelected
      console.log("TEAM", this.teamName, "ON", this.roleFilter)
      this.$emit('filter-role', {
        filterRole: data.roleSelected
      })
    }
  }
}

</script>

<template>


  <TextForm @form-submit="setTeamDetails" @change-text="textChange"></TextForm>
  <DataList   :team-name="teamName" :role-selected="roleFilter"></DataList>


</template>

<style>
template {
  display: block;
}
</style>
