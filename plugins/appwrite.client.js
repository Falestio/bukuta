import { Client, Account } from "appwrite";

export default defineNuxtPlugin((nuxtApp) => {
    const client = new Client()
    
    client
        .setEndpoint('http://localhost/v1')
        .setProject('631bfb7d7e67e1d7da54')
    
    const account = new Account(client)

    nuxtApp.provide('appwriteClient', client)
    nuxtApp.provide('account', account)
})