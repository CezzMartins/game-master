<template>
        <div class="card">
            <img :src="image" alt="">
            <div class="card__info">
                <h3>{{ name.length > 20 ? name.slice(0, 19) +'...'   : name }}</h3>
                <p>{{ released }}</p>
            </div>
        </div>
</template>

<script>
export default {
    props: ['name', 'image', 'released'],
    setup(){   
        return{
           
        }
    }
}
</script>

<style scoped>

.card{
    max-width: 250px;
    min-width:  250px;
    max-height: 400px;
    min-height: 400px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--purple);
    color: var(--white);
    border-radius: 1rem;
    transition: all 0.3s ease;
    opacity: 0.8;
    transform: scale(0.9);
    cursor: pointer;
}
.card:hover{
    opacity: 1;
    transform: scale(1);
    border: 1px solid var(--white);
    box-shadow: 0px 0px 10px var(--blue);
}
.card:active{
    opacity: 1;
    transform: scale(0.9);
    border: 1px solid var(--blue);
    box-shadow: 0px 0px 40px var(--white);
}
img{
   height: 85%;
   object-fit: cover;
}
.card__info{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid red; */
    height: 100%;
    justify-content: center;
}


</style>