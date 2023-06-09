// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxthq/ui'
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
    }
})
