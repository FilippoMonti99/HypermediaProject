<!--
    Header of the page
-->
<template>
    <header>
        <NuxtLink to = "/"> <img id="img" src='~/assets/img/pngegg.png' alt="Innovate Ventures" /> </NuxtLink>
        <nav>
            <NuxtLink to = "/people" class="links">PEOPLE</NuxtLink>
            <NuxtLink to = "/projects" class="links">PROJECTS</NuxtLink>
            <NuxtLink to = "/areas" class="links">AREAS</NuxtLink>
            <NuxtLink to = "/about" class="links">ABOUT US</NuxtLink>
            <NuxtLink to = "/contact" class="links">CONTACT US</NuxtLink>
        </nav>
    </header>
</template>

<style>
    header
    {
        background-color: #03bfcb;
    }

    header
    {
        padding: 0px 20px 0px 20px;
        margin-bottom: 5px;
        border-bottom: 5px solid #231e39;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        position:sticky;
        top:0;
        width:100%;
        height:80px;
    }

    nav {
        display: flex;
        gap: 40px;
        font-size: 25pt;
        font-weight: bold;
        color: #231e39;
    
    }
    #img{
        max-width: 100%;
        max-height: 100%;
        height: 70px;
        width: 70px;
        margin: auto;
    }

    .links{
        color: #231e39;
        text-decoration: none;
    }

    .links:hover{
        color:rgb(142, 205, 226);

        
    }
   
</style>