<template>
  <section>
    <h2>welcome to my vue project</h2>
    <h3>欢迎您{{ username }}</h3>
  </section>
</template>
<script>
// import actions from "@/shared/actions";
// import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      username: "",
    };
  },
  mounted() {
    // 注册观察者
    // actions.onGlobalStateChange((state) => {
    //   console.log("主应用", state);
    //   // const {info} = state;
    //   // this.username = info.username
    // }, true);
    // axios
    //   .get(
    //     "https://apis.map.qq.com/ws/place/v1/suggestion/?region=''&keyword=浙二&key=2AHBZ-BPPKP-4UQD4-LYKE2-OHJZE-3BFTU"
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  },
};
</script>
