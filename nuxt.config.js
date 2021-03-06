export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "funiturestore",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Text:wght@100;400&family=Noto+Serif:ital,wght@0,400;0,700;1,400&display=swap"
      },
      {
        rel: "stylesheet",
        href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["ant-design-vue/dist/antd.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["@/plugins/antd-ui"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios"
  ],
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  router:{
    base:'/ZerakiDeploy/Furniture/'
  }
};
