import type { I18nOptions } from 'vue-i18n'

export default {
    legacy: false,
    locale: 'en',
    fallbackLocale: 'nl',
    modifiers: {
        snakeCase: (str: string) => str.split(' ').join('-')
    }
} as I18nOptions