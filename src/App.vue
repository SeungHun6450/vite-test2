<template>
  <HelloWorld />
  <Brother />
</template>


<script>
// import { computed } from 'vue'
import HelloWorld from '~/components/HelloWorld.vue'
import Brother from '~/components/Brother.vue'

export default {
  components: {
    HelloWorld,
    Brother
  },


  /* 2. provide-inject를 이용
  provide() {
    // provide로 제공된 데이터는 반응형 데이터가 아니다
    // 이를 반응형으로 만들려면 위에서 import를 한 것 처럼 computed함수를 사용해야한다.
    return{
      count: computed(() => this.count),
      increase: this.increase
    }
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increase() {
      this.count += 1
    }
  }
  */
}
</script>

<style>

</style>
