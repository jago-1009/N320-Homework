<!-- Auth: Jay Annadurai            -->
<!-- Proj: N320: Vue - Teams        -->
<!-- Date: 28 November 2023         -->
<!-- Desc: Display Set of Members   -->

<template>

<!-- Waiting Message for Members -->
<div class="MembersContainer WaitingMessage" v-if="filteredMembers.length === 0">
    Waiting for User to Input a Role...
</div>


<!-- Display Set of Members -->
<div class="MembersContainer GridContainer" v-if="filteredMembers.length > 0">
    
    <!-- Iterate Through Member Objects with the Key being the Member ID-->
    <member-info
        v-for="member in filteredMembers" :key="member.id"
        :member="member"
        :selectedRole="selectedRole"
        :definedTeamName="definedTeamName"
        @addMemberToTeam="addMemberToTeam"
        @removeMemberFromTeam="removeMemberFromTeam"
    ></member-info>

</div>

<!-- Waiting Message for Team Creation -->
<div class="MembersContainer WaitingMessage" v-if="!definedTeamName">
    Waiting for User to Define a Team...
</div>


</template>

<script>

//Import the Classes to Process the Members/Team/Teams Data
import Member from '@/classes/Member.js';
import Team from '@/classes/Team.js';
import Teams from '@/classes/Teams.js';

export default {

    data() {
        return { }
    },

    props: ['members', 'definedTeamName', 'selectedRole'],

    emits: ['addMemberToTeam', 'removeMemberFromTeam'],

    computed: {
      //Automatically Filter the Members Array based on the Selected Role Filter
      filteredMembers() {
        //If the Selected Filter Role is Falsy or 'None', Return an Empty Array
        if (!this.selectedRole || this.selectedRole === 'None') {
          return [];
        }

        //If the Selected Filter Role is 'All', Return All the Members
        if (this.selectedRole === 'All') {
          return this.members;
        }

        //Otherwise, Filter by the Selected Role
        return this.members.filter(member => member.role === this.selectedRole);
      }
    },

    methods: {
        addMemberToTeam(member, userDefinedTeam) {
            this.$emit('addMemberToTeam', member, userDefinedTeam);
        },

        removeMemberFromTeam(member) {
            this.$emit('removeMemberFromTeam', member);
        },
    }
}
</script>



<style scoped>
.WaitingMessage {
    width: fit-content !important;
    padding: 10px 20px !important;
}
.MembersContainer {

    border-radius: 20px;
    border-style: 1;
    border-width: 2px;
    border-color: black;

    background-color: rgba(10,10,10,0.8);

    width: 80vw;
    height: max-content;

    margin: 10px auto;
    padding: 5px;
    display: grid;

    color: white;
    font-size: 1.2em;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-align: center;
}

.GridContainer {
    display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Adjust 250px to your preferred min column width */
    grid-gap: 10px;
}
</style>