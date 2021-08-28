module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/resetStyles.scss"`,
      },
      scss: {
        additionalData: `@import "@/assets/resetStyles.scss";`,
      },
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/quantum_test_vue/" : "/",
};
