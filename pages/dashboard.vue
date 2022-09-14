<script setup>
    const { $account } = useNuxtApp()
    const user = useUser()

    onMounted(() => {
        const promise = $account.get()
        promise.then(
            (res) => {
                console.log(res)
                user.value = res
            }
        )
    })
</script>

<template>
    <div>
        <pre>
            {{user}}
        </pre>
    </div>
</template>