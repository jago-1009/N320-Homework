<script>
export default {
  data() {
    return {
      teams: null,
      listedMembers: null
    }
  },
  mounted() {
    this.fetchRouteParams()
  },
  methods: {
    fetchRouteParams() {
      if (this.$route.query.teams) {
        this.teams = JSON.parse(this.$route.query.teams)
        console.log('TEAMS TEAMS', this.teams)
      }

      if (this.$route.query.listedMembers) {
        this.listedMembers = JSON.parse(this.$route.query.listedMembers)
        console.log('TEAMS MEMBERS', this.listedMembers)
      }
    },
    logData() {
      console.log('TEAMVIEW TEAMS', teams)
    }
  }
}
</script>

<template>
  <div class="teams">
    <h1>Your Teams</h1>
    <div>TEAMS:</div>
    <div v-for="teams in this.teams" :key="teams[team]">
      <div v-for="team in teams" :key="teams[team]" class="teambox">
        <h1 class="team-header">{{ team }}</h1>
        <div v-for="member in listedMembers" :key="listedMembers[member]" class="memberbox">
          <div v-if="member.members.team == team">
            <ul>
              {{
                member.members.name
              }}
              <br />
              <li>{{ member.members.phone }}</li>
              <br />
              <li>{{ member.members.email }}</li>
              <br />
              <li>{{ member.members.role }}</li>
            </ul>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.team-header {
  margin-left: 30px;
}
.teambox {
  width: 100%;
  background-color: gainsboro;
  margin-bottom: 40px;
  border-radius: 30px;
}
</style>
