<template>
  <button type="button" @click="toggleState">
    base button
  </button>
</template>

<script setup lang="ts">
const state = ref<boolean>(false);

const toggleState = (): void => {
  console.log('state toggle: ', state.value);

  state.value = !state.value;
}
</script>

<style scoped>
button{
  width: 200px;
  height: 50px;

  background-color: #554949;
  border: none;
  border-radius: 10px;
}
</style>