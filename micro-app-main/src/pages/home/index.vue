<template>
  <section class="home-container">
    <h3>HOME</h3>
    <button @click="handleClick">点击一下</button>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import actions from "@/shared/actions";

@Component
export default class Home extends Vue {
  // 注册一个观察者
  mounted() {
    actions.onGlobalStateChange((state, prevState) => {
      console.log('主应用观察者改变前的值', prevState)
      console.log('主应用观察者改变后的值', state)
    })
  }
  handleClick() {
    const info = {
      username: '张三丰',
      role: 'admin',
      data: new Date().getTime()
    }
    actions.setGlobalState({info})
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 30px;
}
</style>
