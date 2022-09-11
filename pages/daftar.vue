<script setup>
const { $account } = useNuxtApp()
const router = useRouter()

let username = ref(null)
let email = ref(null)
let password = ref(null)

const handleRegister = () => {
    const promise = $account.create('unique()', email.value, password.value, username.value)

    promise.then(
        (res) => {
            console.log('CREATED',res)
            $account.createEmailSession(email.value, password.value)
                .then((res) => {
                    console.log('LOGGING IN',res)
                    router.push({ path:'/dashboard' })
                })
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
                <h1 class="text-4xl mb-4">Mulai dengan akun gratis.</h1>
                <input type="text" placeholder="Nama tampilan" class="input input-bordered w-full max-w-xs" v-model="username"/>
                <input type="text" placeholder="Email" class="input input-bordered w-full max-w-xs" v-model="email"/>
                <input type="text" placeholder="Password" class="input input-bordered w-full max-w-xs" v-model="password"/>
                <button class="btn btn-primary" @click="handleRegister()">Daftar</button>
                {{email}}|{{password}}|{{username}}
            </div>
        </div>
    </div>
</template>