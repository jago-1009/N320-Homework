<!-- Auth: Jay Annadurai            -->
<!-- Proj: N320: Vue - Teams        -->
<!-- Date: 28 November 2023         -->
<!-- Desc: User Input Form for Team -->

<template>

<!-- Input Form to Define a Team and Filter by Member Roles-->
<div class="FormContainer">

    <!-- On Form Submission, Perform the Emit User Input Method Instead-->
    <form @submit.prevent="">

        <!-- Form Title -->
        <div id="FormTitle"> Jay's Team Roster </div>

        <!-- Inner Form Container -->
        <div id="InnerFormContainer">
            <!-- Input Containers -->
            <div id="InputsContainer"> 

                <!-- Text Input for the Team's Name that the Members can be Assigned To -->
                <div id="TeamInputContainer">
                    <label for="definedTeamNameInput">
                        <input type="text" id="definedTeamNameInput" v-model="definedTeamName" placeholder="Define a Team Name..."/>
                    </label>
                </div>

                <!-- Filter the List of Members by their Team Role -->
                <div id="MemberFilterContainer">
                    <select id="MemberFilter" v-model="selectedRole" name="role">
                        <option disabled value="">Filter Members by Role...</option>
                        <option value="All"> All Roles </option>
                        <option v-for="role in uniqueRoles" :key="role" :value="role">{{ role }}</option>
                    </select>
                </div>

            </div>

<!--            &lt;!&ndash; Form Submit Button to Activate &ndash;&gt;-->
<!--            <div id="FormSubmit">-->
<!--                <slot-button id="FormSubmit" type="submit">Go!</slot-button>-->
<!--            </div>-->

        </div>

    </form>

</div> <!-- End of Form Container -->

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

  watch: {
    // Watcher for selectedRole
    selectedRole(newRole) {
      //console.log("Selected Role Changed:", newRole);
      this.$emit('update:selectedRole', newRole);
    },

    // Watcher for definedTeamName
    definedTeamName(newTeamName) {
      //console.log("Defined Team Name Changed:", newTeamName);
      this.$emit('update:definedTeamName', newTeamName);
    }
  },

    props: ['members','teams'],

    emits: [
        //'userInput',
        'update:definedTeamName',
        'update:selectedRole'
    ],

    computed: {
      //All the Unique Roles from the Members Array for the Options Dropdown
      uniqueRoles() {
        return this.members.reduce((uniqueRolesArray, member) => {
          // If the role is not already in the uniqueRolesArray Accumulator, add it
          if (!uniqueRolesArray.includes(member.role)) { uniqueRolesArray.push(member.role); }
          return uniqueRolesArray;
        }, []).sort(); // Start with an empty array and then return the sorted Array
      },
    },

}

</script>

<style scoped>

#FormTitle {
  font-size: 1.4em;
  font-style: italic;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: white;
  text-shadow: 3px 2px 2px rgba(0,0,0,0.9), 2px 2px 1px rgba(0,0,0,0.9);
}

.FormContainer {
  background: linear-gradient(0deg, rgba(80,80,80,0.9) 0%, rgba(100,100,100,0.8) 25%, rgba(250,250,250,0.5) 100%);
  padding: 10px 30px;
  width: fit-content;
  margin: 0 auto;
  border: 2px solid black;
  border-radius: 20px;
  transition: border-color 200ms, border-radius 300ms, height 200ms;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.FormContainer:hover {
  border-color: white;
}

.FormContainer form {
  display: inherit;
  flex-flow: inherit;
}

.FormContainer * {
  border: 0 solid white;
  text-align: center;
}

#InnerFormContainer {
  display: flex;
}

#InputsContainer {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

form div input, form div select {
  border: 0 solid white !important;
  border-radius: 8px;
  color: white;
  background-color: #000000;
  text-align: center;
  font-size: 1.1em;
  padding: 4px;
  margin: 5px;
}

button#FormSubmit {
  border: 0 solid white;
  border-radius: 20px;
  transition: border-color 200ms, border-width 100ms;
  padding: 5px 10px;
  height: 100%;
  font-size: 1.2em;
  font-style: italic;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: white;
  background-color: #000000;
}

button#FormSubmit:hover {
  border-width: 1px;
}


</style>