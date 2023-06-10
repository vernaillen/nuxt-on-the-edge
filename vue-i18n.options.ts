import nl from './locales/nl-BE.json'

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        nl
    }
}))