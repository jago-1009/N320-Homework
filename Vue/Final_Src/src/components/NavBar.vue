<template>
  <div class="navbar">
    <div class="my-conferences"><slot></slot></div>
    <div class="buttons">
      <router-link class="button" to="/" key="sessions">Sessions</router-link>
      <router-link
        class="button"
        :to="{
          name: 'mySessions',
          query: {
            mySessions: JSON.stringify(this.mySessions)
          }
        }"
        >My Sessions</router-link
      >
    </div>
    <h2>{{ mySessions.length }} Sessions</h2>
  </div>
  <router-view @add-to-list="addToList" @remove-from-list="removeFromList"></router-view>
</template>
<script>
export default {
  data() {
    return {
      mySessions: []
    }
  },
  methods: {
    toggleHome() {
      this.$emit('toggle-home')
    },
    toggleBack() {
      this.$emit('toggle-back')
    },
    addToList(data) {
      console.log(data)
      this.mySessions.push(data)
    },
    removeFromList(data) {
      this.mySessions.splice(data.id - 3, 1)
    }
  }
}
</script>
<style>
body {
  background-color: salmon;
}
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
.button {
  background-color: salmon;
  width: 150px;
  margin-right: 20px;
  height: 100px;
  border-radius: 30px;
  border: none;
  font-family: 'Courier New', Courier, monospace;
  cursor: pointer;
  text-decoration: none;
  color: navy;
}
</style>
