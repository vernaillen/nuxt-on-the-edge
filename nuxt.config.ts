// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/i18n'
    ],
    debug: true,
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
        debug: true,
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
        vueI18n: './vue-i18n.options.ts'
    }
})
