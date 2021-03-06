<template>
  <p>{{ game.name }}</p>
</template>

<script>
export default {
    props: {
        game: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>