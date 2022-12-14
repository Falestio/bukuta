import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['@/assets/css/mvp.css'],
    modules: ['@nuxtjs/tailwindcss'],
    imports: {
        dirs: ['composables/**']
    }
})
