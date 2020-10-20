<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import func from '../../vue-temp/vue-editor-bridge'
export default {
  name: 'Aaa',
  created() {
    this.test()
  },
  methods: {
    test() {
      let a = 'aaaaaaaabb'
      // 测试案例
      console.log('aaaaaaa')
      console.log(a)
      // 测试案例
    }
  }
}
</script>
