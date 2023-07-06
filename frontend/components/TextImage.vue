<!--
    Group of text and image side by side. When the screen becomes smaller, the text is moved below the image.

    PROPS:
    - isReverse: boolean value that determines whether the image comes before or after the text.
    - description: text displayed near the image.
-->
<template>
    <!--
        This is an example of class/style binding. It allows to change dynamically the style of an element based on the boolean value.
        There is also another way to achieve this by using the array notation. More here: https://vuejs.org/guide/essentials/class-and-style.html#class-and-style-bindings
    -->
    <div id='cont' :class = "{'info-group': !isReverse, 'reverse-info-group': isReverse}">
        <img id="tro" :src = "image" alt="" />
        <p class="desc">
           {{ description }}
        </p>
    </div>
    
</template>

<script setup>
    /*
        Instead of defining the props as a simple list, an object was used.
        This allows to add properties to the props.
        In this example there are:
        - type: type of the prop
        - default: default value of the prop when it is not provided
    */
    defineProps({
        isReverse: {
            type: Boolean,
            default: false
        },
        description: {
            type: String
        },
        image:{
            type: String
        }
    })
</script>

<style>
    #tro {
        width: 500px;
        height: 500px;
        margin:1%;
    }
    
    #cont{
        border:1px grey;
    }

    .info-group {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 40px;
    }
    
    .reverse-info-group {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
        flex-direction: row-reverse;
    }

    @media screen and (max-width: 1200px) {
        #main-img {
            width: 500px;
            height: 500px;
        }

        .info-group, .reverse-info-group{
            flex-direction: column;
            gap: 10px;
        }
    }
    
    .desc
    {
        font-size: 30px;
        font-weight: bold;
        color: rgb(27, 103, 202);
        margin:1%;
    }
</style>