<template>
  <h1>I love {{ who }}</h1>
  <p>{{ greeting }} {{ myVue }}!</p>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ['greeting', 'who', 'myVue']
}
</script>
