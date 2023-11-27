<template>
  <h1>Props and Slots</h1>
  <div>
<slot-one>
  <h1>This is from App.Vue</h1>
</slot-one>
  </div>
</template>
<script>
export default {
  data() {
    return {
      greeting: 'Hello',
      who: 'Vue',
      count: 1,
      myVue: 'Vue.js'
    }
  }
}
</script>
<style></style>
