<template>
    <div class="cardella">
        <span class="title">{{ title }}</span>
        <NuxtLink :to = "link" > <button class="small-butt"> Go to the page</button></NuxtLink>
    </div>
</template>

<script>
    export default {
        props: [
            'title',
            'link'
        ]
    }
</script>

<style>
    .image-container
    {
        display: flex;
        justify-content: center;
        padding: 1px;
        width: 100%;
        height: 250px;
    }

    .cardella
    {
        display: flex;
        flex-flow: column;
        padding: 20px;
        width: fit-content;
        height: fit-content;
        border:3px solid #03bfcb;
        background-color: #231e39;
        border-radius: 5px;
        box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);

    }

    .title
    {
        font-size: 1.5em;
        font-weight: bold;
    }

    .small-butt{
        background-color: #03bfcb;
        border: 1px solid #03bfcb;
        border-radius: 3px;
        color: white;
        padding: 10px 25px;
        width:fit-content;
    }

    .small-butt:hover{
        color:#231e39;
    }

  

    
</style>