<!-- Auth: Jay Annadurai            -->
<!-- Proj: N320: Vue - Teams        -->
<!-- Date: 28 November 2023         -->
<!-- Desc: Slotted Member Container -->

<template>
  <div class="MemberContainer">

    <div class="MemberName"><span class="Dynamic"> {{ member.name }} </span></div>
    <div class="MemberRole">Role: <span class="Dynamic">{{ member.role }}</span></div>

    <!-- Accordion Style Expansion to Reveal Member Details -->
    <div>
      <slot-button @click="toggleDetails" v-show="!accordionActive">Display Details</slot-button>

        <div class="MemberDetailsContainer" v-if="accordionActive" @click="toggleDetails">

          <!-- Render All the Details of the Member -->
          <div v-for="(detailValue, detailKey) in memberDetails" :key="detailKey" class="MemberDetail">
            <div>{{ detailKey }}:</div>
            <div> <span class="Dynamic">{{ detailValue }}</span> </div>
          </div>

        </div>

    </div>

    <!-- Only show the Add Member Button if the Member doesn't already have a Team AND there is a User Defined Team-->
    <div>

      <slot-button
          v-if="member.team === '' && definedTeamName !== ''"
          @click="addMemberToTeam(member, definedTeamName)"
      >
        Add to Team '{{ definedTeamName }}'!
      </slot-button>

      <slot-button
          v-if="member.team !== ''"
          @click="removeMemberFromTeam(member)"
      >
        Remove from Team '{{ member.team }}'!
      </slot-button>

    </div>

  </div> <!-- End of MemberContainer -->
</template>

<script>

//Import the Classes to Process the Members/Team/Teams Data
import Member from '@/classes/Member.js';
import Team from '@/classes/Team.js';
import Teams from '@/classes/Teams.js';


export default {

  data() {
    return {
      accordionActive: false,
    }
  },

  //Properties used for the Member Object to Display and the Team Name to Display on Buttons
  props: ['member', 'definedTeamName'],

  //Emitters to Roster -> View -> App.vue
  emits: ['addMemberToTeam', 'removeMemberFromTeam'],

  methods: {
    toggleDetails() {
      this.accordionActive = !this.accordionActive;
    },

    //Emitters to Roster -> View -> App.vue
    //Adds a Member to a Team
    addMemberToTeam(member, definedTeamName) {
      //Fires Emit to Parent Component with Member Object to Add to a User Defined Team
      this.$emit('addMemberToTeam', member, definedTeamName);
    },
    removeMemberFromTeam(member) {
      //Fires Emit to Parent Component with Member Object to Remove
      this.$emit('removeMemberFromTeam', member);
    }
  },

  computed: {

    //Replace Unassigned or Null Values of the Member's Team Property
    memberTeam() {
      if(this.member.team !== '') {
        return this.member.team;
      } else { return 'Unassigned'}
    },

    //Convert all the Details into a Key:Value Object
    memberDetails() {
      return {
        "Team": this.memberTeam,
        "ID": this.member.id,
        "E-Mail": this.member.email,
        "Phone": this.member.phone
      };
    }
  }
}
</script>

<style scoped>

.MemberContainer {
  display: flex;
  flex-direction: column;
  padding: 5px;
  height: fit-content;
  border: 1px solid black;
  border-radius: 10px;
  background: linear-gradient(0deg, rgba(60, 0, 0, 0.8), rgba(80, 0, 0, 0.8) 25%, rgba(120, 0, 0, 0.8));
  color: #888888;
}

.MemberContainer, .MemberDetailsContainer {
  transition: border-color 200ms, border-radius 300ms, height 200ms;
}

.MemberContainer:hover, .MemberDetailsContainer:hover {
  border-radius: 20px;
  border-color: white;
}

.MemberContainer > div,
.MemberDetailsContainer > div {
  padding: 4px;
}

.MemberDetailsContainer {
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 10px;
  margin: 8px 4px;
  border: 1px solid transparent;
  cursor: pointer;
}

.MemberDetail {
  font-size: 0.9em;
  display: flex;
  justify-content: space-between;
}

span.Dynamic {
  color: white;
}

.MemberName {
  font-size: 1.2em;
}

.MemberName,
.MemberContainer button {
  color: white;
  font-style: italic;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-shadow: 3px 2px 2px rgba(0, 0, 0, 0.7);
  text-align: center;
}

.MemberContainer button {
  font-size: 0.8em;
  margin-top: 2px;
}


</style>