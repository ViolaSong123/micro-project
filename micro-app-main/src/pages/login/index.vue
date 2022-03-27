<template>
  <section class="login-container">
    <a-button size="large" type="primary" @click="login">Login</a-button>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
/* eslint-disable */
import VueRouter from "vue-router";

import actions from "@/shared/actions";
import { ApiLoginQuickly } from "@/apis";

@Component
export default class Login extends Vue {
  $router!: VueRouter;

  // 注册一个观察者
  mounted() {
    actions.onGlobalStateChange((state, prevState) => {
      console.log('主应用观察者改变前的值', prevState)
      console.log('主应用观察者改变后的值', state)
    })
  }
  async login() {
    // ApiLoginQuickly 是一个远程登录函数，用于获取 token，详见 Demo
    const result = await ApiLoginQuickly();
    const { token } = result.data.loginQuickly;

    // 登录成功后将token 设置globalstate 值
    actions.setGlobalState({token})
    this.$router.push("/");
  }
}
</script>

<style lang="less" scoped>
@import "~@/assets/styles/flex.less";

.login-container {
  padding: 30px;
}
</style>
