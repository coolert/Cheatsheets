import comp from "/Users/lvhui/Documents/GitHub/Cheatsheets/docs/.vuepress/.temp/pages/c/index.html.vue"
const data = JSON.parse("{\"path\":\"/c/\",\"title\":\"C Language Cheatsheet\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Basic Syntax\",\"slug\":\"basic-syntax\",\"link\":\"#basic-syntax\",\"children\":[{\"level\":3,\"title\":\"Hello World\",\"slug\":\"hello-world\",\"link\":\"#hello-world\",\"children\":[]}]}],\"git\":{\"updatedTime\":1735197116000,\"contributors\":[{\"name\":\"keith\",\"username\":\"keith\",\"email\":\"1033610335@qq.com\",\"commits\":2,\"url\":\"https://github.com/keith\"}]},\"filePathRelative\":\"c/README.md\"}")
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
