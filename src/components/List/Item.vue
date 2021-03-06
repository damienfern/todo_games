<template>
  <p>{{name}}</p>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>