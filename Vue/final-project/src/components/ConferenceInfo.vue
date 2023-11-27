<template>
  <br />
  <div class="conference-info-holder">
    <div class="conference-info-left">
      <h1>{{ title }}</h1>
      <h2>Presented by: {{ presenter }}</h2>
      <h3>Description: {{ desc }}</h3>
    </div>
    <div class="conference-info-right">
      <button v-if="added===true" class="add-to-btn">Added</button>
      <button v-else class="add-to-btn" v-on:click="addToList" >Add to List</button>
      <h1>{{ sDay }} At {{ sTime }}</h1>
    </div>
  </div>
</template>
<script>
export default {
  data() {},
  methods: {
    addToList() {
        this.$emit("add-to-list")
    }

  },
  props: [
    'title',
    'presenter',
    'desc',
    'message',
    'sTime',
    'sDay',
    'added',
    'sessions',
    'filterNum'
  ]
}
</script>
<style>
.conference-info-holder {
  background-color: lightblue;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.conference-info-left {
  display: block;
  margin-left: 30px;
}
.add-to-btn {
  margin-top: 20px;
}
</style>
