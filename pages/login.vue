<script setup>
const { $account } = useNuxtApp()
const router = useRouter()

let email = ref(null)
let password = ref(null)

const handleLogin = () => {
    const promise = $account.createEmailSession(email.value, password.value)

    promise.then(
        (res) => {
            router.push({path:'/dashboard'})
        }, 
        (err) => {
            alert(err)
        }
    )
}
</script>

<template>
    <div class="flex justify-center h-screen lg:pt-24">
        <div class="card w-96">
            <div class="card-body">
                <h1 class="text-4xl mb-4">Login ke akun Anda</h1>
                <input type="text" placeholder="Email" class="input input-bordered w-full max-w-xs" v-model="email"/>
                <input type="text" placeholder="Password" class="input input-bordered w-full max-w-xs" v-model="password"/>
                <button class="btn btn-primary" @click="handleLogin()">Login</button>
            </div>
        </div>
    </div>
</template>