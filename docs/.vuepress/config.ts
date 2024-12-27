import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'

export default defineUserConfig({
    lang: 'en-US',
    title: 'Cheatsheets',
    description: 'A collection of programming language cheatsheets',

    theme: defaultTheme({
        sidebar: [
            '/',
            '/systemd/',
            '/bypy/',
        ],
        colorMode: 'auto', //auto 为自动 dark 为黑暗模式
        colorModeSwitch: true,
    }),

    bundler: viteBundler(),

    plugins: [
        backToTopPlugin(),
        mediumZoomPlugin(),
    ],
})