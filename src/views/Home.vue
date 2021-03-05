<template>
  <div class="home">
    <FormTable />
    <HelloWorld msg="Welcome to Your Vue.js App">
      <template #footer="scopeName">
        <div>footer1</div>
        <div
          v-for="(item, index) in scopeName.data"
          :key="index"
        >
          {{ item }}
        </div>
      </template>
      <div>aaaaaaaaa</div>
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import FormTable from '@/components/formTable.vue'
export default {
    name: 'Home',
    components: {
        HelloWorld,
        FormTable
    },
    data() {
        return {
            test: '1111'
        }
    }
}
</script>
