export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/lvhui/Documents/GitHub/Cheatsheets/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Cheatsheets"} }],
  ["/c/", { loader: () => import(/* webpackChunkName: "c_index.html" */"/Users/lvhui/Documents/GitHub/Cheatsheets/docs/.vuepress/.temp/pages/c/index.html.js"), meta: {"title":"C Language Cheatsheet"} }],
  ["/go/", { loader: () => import(/* webpackChunkName: "go_index.html" */"/Users/lvhui/Documents/GitHub/Cheatsheets/docs/.vuepress/.temp/pages/go/index.html.js"), meta: {"title":"Go Language Cheatsheet"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/lvhui/Documents/GitHub/Cheatsheets/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
