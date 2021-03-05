<template>
  <div class="hello">
    <div v-if="true">
      测试
    </div>
    <!-- 当false时候不显示，只有为true的时候才会显示 -->
    <component :is="data" />
    <!-- 切换的时候使用 is来实现 -->
    <button @click="change">
      切换组件
    </button>
    <div>
      {{ test.testWatch }}
    </div>
    <button @click="add">
      新增
    </button>
    <h1>{{ msg }}</h1>
    <slot
      name="footer"
      :scopeName="data"
    />
    <slot />
  </div>
</template>

<script>
import componentA from '@/components/componentA'
import componentB from '@/components/componentB'
export default {
    name: 'HelloWorld',
    components: {
        componentA,
        componentB
    },
    props: {
        msg: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            data: 'componentA',
            nums1: 1,
            nums2: 2,
            test: {
                testWatch: 0
            }
        }
    },

    computed: {
        addNum: function () {
            return this.nums1 + this.nums2
        }
    },

    watch: {
        'test.testWatch'(newVal, oldVal) {
            console.log('newVal', newVal)
            console.log('oldVal', oldVal)
        }
    },

    mounted() {
        // 组件render函数
        // console.log(componentB.render)
        // let obj = {
        //   path: '/',
        //   query: {}
        // }
        // let {href} = this.$router.resolve(obj)
        // window.open('www.baidu.com', '_self')
    },
    methods: {
        add() {
            this.nums1++
            this.nums2++
            this.test.testWatch++
        },
        change() {
            // 进行组件之间的切换
            this.data === 'componentA' ? (this.data = 'componentB') : (this.data = 'componentA')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
