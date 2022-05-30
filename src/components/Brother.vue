<template>
  <h1>{{ count }}</h1>
  <h2>{{ $store.state.message.message }}</h2>
  <button
    @click="$store.dispatch('message/updateMessage','Good!')">
    Update Message!
  </button>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count.count
    }
  }
  // 2. provide-inject를 이용
  // inject: ['count']
}
</script>
