module.exports = {
    title: 'Cheatsheets',
    description: 'A collection of programming language cheatsheets',
    themeConfig: {
        sidebar: [
            '/',
            '/c/',
            '/go/',
            // 添加更多语言
        ]
    },
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}