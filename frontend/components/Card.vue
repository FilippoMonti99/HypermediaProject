<!--
    Card to display information in the list page.
    This component could be achieved with the SmallCard component by using a <slot> to insert the div with the image. The solution used here allows for better control of the layout.
    Since the information shown can be categorized into title and subtitle, it was preferred to use only one component for both people and project.

    PROPS:
    - title: main information to display
    - subtitle: second information to display
    - link: link to the page description
-->
<template>
    <div class="card">
        <div class="image-container">
            <img class="img" :src="img_link" alt=""/>
        </div>
        <span class="title">{{ title }}</span>
        <span class="subtitle">{{ subtitle }}</span>
        <NuxtLink :to = "link" class="linkstyle6"> see more information</NuxtLink>
        <div class="buttons">
        <button class="primary">
            Message
        </button>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(['title', 'subtitle', 'link','img_link'])   
</script>

<style>
    .image-container
    {
        display: flex;
        justify-content: center;
        padding: 2px;
        width: 100px;
        height: 100px;
    }

     
    .card{
        display: flex;
        flex-flow: column;
        padding: 10px;
        border: #231e39;
        width: fit-content;
        height: fit-content;
        align-items:center;
        background-color: #231e39;
        border-radius: 5px;
        box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
        color: #b3b8cd;
        padding-top: 30px;
        position: static;
        max-width: 100%;
    }
    
    .card .img {
     border: 1px solid #03bfcb;
    border-radius: 50%;
    padding: 7px;
    }

    * {
    box-sizing: border-box;
    }


    .title {
    margin: 10px 0;
    color: white;
    font-size: 3em;
    }

    .subtitle {
    margin: 5px 0;
    text-transform: uppercase;
    color: white;
    }


    button.primary {
    background-color: #03bfcb;
    border: 1px solid #03bfcb;
    border-radius: 3px;
    color: #231e39;
    
    padding: 10px 25px;
    margin:10%;
    width: 100px;
    }

    .linkstyle6{
        color: #03bfcb;
        text-decoration :none ;
        font-size: larger;
    }

    .linkstyle:hover{
        color:white;
    }

</style>