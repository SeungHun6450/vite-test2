<template>
  <h1>{{ count }}</h1>
  <button @click="increase">
    INCREASE
  </button>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count.count
    }
  },
  methods: {
    increase() {
      this.$store.dispatch('count/increase')
    }
  }
  // 2. provide-inject를 이용
  // inject: ['count', 'increase']
}
</script>
