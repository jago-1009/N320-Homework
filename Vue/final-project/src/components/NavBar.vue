<template>
  <div class="navbar">
    <div class="my-conferences" ><h1>My Conferences</h1></div>
    <div class="buttons">
      <button v-on:click="toggleBack">Sessions</button>
      <button v-on:click="toggleHome">My Sessions</button>
    </div>
    <h2>{{ mySessions.length }} Sessions</h2>
  </div>
</template>
<script>
export default {
  data() {},
  methods: {
    toggleHome() {
      this.$emit('toggle-home')
    },
    toggleBack() {
      this.$emit('toggle-back')
    }
  },
  props: ['mySessions', 'isSessionHome']
}
</script>
<style>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  margin: 0 auto;
  min-width: 1200px;
  background-color: lightblue;
  border-radius: 30px;
}
button {
  background-color: salmon;
  width: 150px;
  margin-right: 20px;
  height: 50px;
  border-radius: 30px;
  border: none;
  font-family: 'Courier New', Courier, monospace;
  cursor: pointer;
}
</style>
