<template>
	<pre>{{ msg }}</pre>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const msg = ref('loading ...')

onMounted(() => {
	setInterval(async () => {
		msg.value = await fetch(`${location.origin}/api`).then(r => r.json())
	}, 500)
})
</script>
