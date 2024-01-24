<template>
  <div id="loading">
    <h1 id="loading-text">Töltés...</h1>
  </div>
</template>

<script>
export default {
  name: "Loading"
};
</script>

<style>
#loading {
  position: absolute;
  z-index: 1000;
  background-color: white;
  height: 100vh;
  width: 100vw;
  text-align: center;
  line-height: 100vh;
}

#loading-text {
  color: black;
  user-select: none;
}
</style>