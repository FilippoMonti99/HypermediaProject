<!--
    Page with the list of all the people.
    As described in the Card component, the same component was used for both person and project since they have the same structure.
-->
<template>
    <main>
        <!--
            Form used to filter the list by age.
        -->
        <div class="cont-peo1"> 
            <div class="peop1">
                <h1>Our team</h1>
                <h3>At Innovate Ventures, our success is driven by the collective brilliance and diverse expertise of our exceptional team</h3>
            </div>

            <div class="image2">
                <img id="pe1" src = "~/assets/img/team.png" alt=""/>
            </div>
        </div>
        <div class="sottot-peo">
            <h2>
                Each member brings a unique set of skills, experiences, and perspectives, contributing to a dynamic and forward-thinking environment that fuels our ability to identify and support groundbreaking startups.
                Our team is led by visionary leaders who have a proven track record of success in entrepreneurship, investment, and strategic guidance. With their wealth of experience, they provide invaluable insights and strategic direction, ensuring that our investment decisions align with our long-term objectives and deliver exceptional returns.
            </h2>
        </div>
        
        <div id="card-container">
            <Card v-for = "person of people" :title = "person.name" :subtitle = "person.role" :link = "'/people/' + person.id" :img_link="`_nuxt/assets/img/people/${person.name}.jpeg`" />
        </div>
    </main>
</template>

<script setup>

    const { data: people } = await useFetch(useRuntimeConfig().public.serverURL + '/people')


    useHead({
        title: 'All people - Innovate Ventures',
        meta: [
        {
            name: 'description',
            content: 'All people page, the team that currently work in our firm' 
        },
        {
            name: 'keywords',
            content : 'person, team, people'
        }
        ]
    });
</script>

<style>

    .cont-peo1{
        display: grid;
        align-items: center; 
        grid-template-columns: 1fr 1fr;
        column-gap: auto;
        
    }

    .peop1{
        font-size: 60px;
        text-align: left;
        margin-left:3%;
        color:#03bfcb;
    }

    #pe1{
        width:max-content;
        height:max-content;
        max-width:800px;
        max-height:800px;
    }

    .sottot-peo{
        color:#03bfcb;
        font-size: 20px;
        font-style:italic;
        margin:3%;
    }

    #card-container
    {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: flex-start;
    }
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    .card {
        /* Add shadows to create the "card" effect */
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    }

    .container {
        padding: 2px 16px;
    }

    main
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
    }

    

    
</style>