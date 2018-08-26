<template>
    <h1>{{ $route.params.name }}</h1>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  mounted() {
   // this.init();
  },
  computed: mapState('subreddits', ['subreddits']),
  methods: mapActions('subreddits', ['init']),
};
</script>

<style scoped>

</style>
