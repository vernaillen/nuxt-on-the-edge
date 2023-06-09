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

    debug: false,
    i18n: {
        experimental: {
            jsTsFormatResource: true
        },
        precompile: {
            strictMessage: false,
            escapeHtml: true
        },
        langDir: 'locales',
        lazy: true,
        baseUrl: 'http://localhost:3000',
        locales: [
            {
                code: 'en',
                iso: 'en-US',
                file: 'en-US.json',
                // domain: 'localhost',
                name: 'English'
            },
            {
                code: 'nl',
                iso: 'nl-BE',
                file: 'nl-BE.json',
                domain: 'mydomain.be',
                name: 'Vlaams'
            }
        ],
        // trailingSlash: true,
        debug: false,
        defaultLocale: 'en',
        // strategy: 'no_prefix',
        // strategy: 'prefix',
        // strategy: 'prefix_and_default',
        strategy: 'prefix_except_default',
        // rootRedirect: '/ja/about-ja',
        dynamicRouteParams: true,
        // customRoutes: 'config',
        // differentDomains: true,
        // skipSettingLocaleOnNavigate: true,
        // detectBrowserLanguage: false,
        detectBrowserLanguage: {
            useCookie: true
            // alwaysRedirect: true
            // cookieKey: 'i18n_redirected',
            // // cookieKey: 'my_custom_cookie_name',
            // redirectOn: 'root'
        },
        vueI18n: './vue-i18n.options.ts'
    }
})
