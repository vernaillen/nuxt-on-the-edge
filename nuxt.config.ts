import { i18n } from './config/i18n'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxthq/ui',
        '@nuxtjs/i18n'
    ],

    content: {
        documentDriven: true,
        markdown: {
            anchorLinks: false,
            remarkPlugins: [
                'remark-breaks'
            ],
            rehypePlugins: {
                'rehype-external-links': {
                target: '_blank'
                }
            }
        }
    },

    i18n: {
        detectBrowserLanguage: {
            useCookie: true,
            redirectOn: 'root'
        },
        locales: [
            { code: 'nl', iso: 'en-BE', file: 'nl-BE.json' },
            { code: 'en', iso: 'en-US', file: 'en-US.json' }
        ],
        langDir: 'locales/',
        defaultLocale: 'nl',
        lazy: true,
        strategy: 'prefix_and_default',

        vueI18n: './config/i18n.config.ts'
    }
})
