<template>
  <div v-for="(session, idx) in mySessions" :key="session[idx]" class="session-card">
    <h1>{{ session.title }}</h1>
    <div class="session-time">
      <p>{{ session.sDay }}</p>

      <p>{{ timeFilter(session.sTime) }}</p>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.fetchRouteParams()
  },
  data() {
    return {
      mySessions: null
    }
  },
  methods: {
    fetchRouteParams() {
      if (this.$route.query.mySessions) {
        this.mySessions = JSON.parse(this.$route.query.mySessions)
        console.log('TEAMS TEAMS', this.mySessions)
      } else {
        console.log('NO SESSIONS')
      }
    },
    timeFilter(t) {
      if (t > 12) {
        return t - 12 + ':00' + ' PM'
      } else {
        return t + ':00' + ' AM'
      }
    }
  }
}
</script>
<style>
.session-card {
  background-color: lightblue;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
}
.session-time {
  display: flex;
  align-items: center;
}
.session-time p {
  margin-right: 20px;
}
</style>
