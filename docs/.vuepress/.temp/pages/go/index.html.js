import comp from "/Users/lvhui/Documents/GitHub/Cheatsheets/docs/.vuepress/.temp/pages/go/index.html.vue"
const data = JSON.parse("{\"path\":\"/go/\",\"title\":\"Go Language Cheatsheet\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1735184099000,\"contributors\":[{\"name\":\"keith\",\"username\":\"keith\",\"email\":\"1033610335@qq.com\",\"commits\":1,\"url\":\"https://github.com/keith\"}]},\"filePathRelative\":\"go/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
