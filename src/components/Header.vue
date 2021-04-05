<template>
  <header class="header">
      <div class="header__fade">
      </div>
      <img  class="header__image__container" src="@/assets/images/header.jpg" alt="">
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
    height: 50vh;
    max-height: 50vh;
    overflow: hidden;
    position: relative;
    
}
.header__image__container{
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 11;
}

.header__fade{
    background: linear-gradient(to top, var(--black), var(--invisible));
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    z-index: 15;
}
</style>