<!-- Auth: Jay Annadurai            -->
<!-- Proj: N320: Vue - Teams        -->
<!-- Date: 28 November 2023         -->
<!-- Desc: Home View / List View    -->

<script setup>
import InputForm from '../components/InputForm.vue'
import Roster from '../components/Roster.vue'
</script>

<template>
<main>
  <!-- Form to Input Team Name and Member Type -->
  <InputForm
      :members="members"
      :teams="teams"
      @update:selectedRole="setSelectedRole"
      @update:definedTeamName="setDefinedTeamName"
  />

  <!-- Roster that Displays Entire or Subset of Members -->
  <Roster
    :members="members"
    :definedTeamName="definedTeamName"
    :selectedRole="selectedRole"
    @addMemberToTeam="addMemberToTeam"
    @removeMemberFromTeam="removeMemberFromTeam"
  />
</main>
</template>

<script>
//Import the Classes to Process the Members/Team/Teams Data
import Member from '@/classes/Member.js';
import Team from '@/classes/Team.js';
import Teams from '@/classes/Teams.js';


export default {

  data() {
    return {
      //Role to Filter By
      selectedRole: '',
      //User Defined Team Name
      definedTeamName: ''
    }
  },

  props: ['members','teams'],

  methods: {

    //Method to Add Member to a Team
    addMemberToTeam(member, definedTeamName) {
      this.$emit('addMemberToTeam', member, definedTeamName);
    },

    //Method to Remove Member from a Team
    removeMemberFromTeam(member) {
      this.$emit('removeMemberFromTeam',member);
    },

    //Watcher Updater
    setSelectedRole(newRole) {
      this.selectedRole = newRole;
    },
    setDefinedTeamName(newTeamName) {
      this.definedTeamName = newTeamName;
    },

  }
}
</script>