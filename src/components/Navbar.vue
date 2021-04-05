<template>
  <nav class="navbar">
      <h1>GM</h1>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar{
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(to top, var(--blue-dark), var(--purple));
    height: 100vh;
    max-width: 90px;
    color: var(--white);
    opacity: 0.8;
    transition: all 0.3s ease ;
    z-index: 99;
}
.navbar:hover{
    opacity: 1;
    box-shadow: 4px 5px 10px rgba(0,0,0,0.5);;
}
.navbar h1{
    font-size: 36px;
    font-family: 'Righteous', cursive;
    padding: 1rem 1rem;
    background-color: var(--purple);
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    cursor: pointer;
}
.navbar__items{
    display: flex;
    flex-direction: column;
    color: var(--white);
}
.navbar__item{
    color: var(--white);
    padding: 1rem;
    width: 100%;
}
.navbar__item img{
    width: 30px;
}

</style>