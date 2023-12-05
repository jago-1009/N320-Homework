<script>
export default {
  data() {
    return {
      teamName: '',
      roleSelected: ''
    }
  },
  methods: {
    submitForm() {
      this.$emit('form-submit', {
        teamName: this.teamName,
        roleSelected: this.roleSelected
      })
    }
  }
}
</script>
<template>
  <h3>Team Name:</h3>
  <input type="text" placeholder="Team Name" v-model="teamName" v-on:input="changeText" />

  <br />
  <h3>Filter People:</h3>
  <div class="radio-holder">
    <label for="Developer">Developer </label>
    <input
      type="radio"
      id="Developer"
      name="person_type"
      value="Developer"
      v-model="roleSelected"
    />
    <br />
    <label for="Designer">Designer </label>
    <input type="radio" id="Designer" name="person_type" value="Designer" v-model="roleSelected" />
    <br />
    <label for="UI/UX">UI/UX </label>
    <input type="radio" id="UI/UX" name="person_type" value="UI/UX" v-model="roleSelected" />
    <br />
    <button type="submit" v-on:click="submitForm">Submit</button>
  </div>
</template>

<style></style>
