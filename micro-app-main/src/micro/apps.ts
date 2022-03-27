import shared from "@/shared/actions";

const apps = [
  {
    name: "ReactMicroApp",
    entry: "//192.168.151.67:7771",
    container: "#frame",
    activeRule: "/react",
    // 通过 props 将 shared 传递给子应用
    props: { shared },
  },
  {
    name: "VueMicroApp",
    entry: "//192.168.151.67:7771",
    container: "#frame",
    activeRule: "/vue",
    // 通过 props 将 shared 传递给子应用
    props: { shared },
  },
  // Angular 应用暂时未接入
  // {
  //   name: "AngularMicroApp",
  //   entry: "//localhost:10300",
  //   container: "#frame",
  //   activeRule: "/angular"
  // }
];

export default apps;
