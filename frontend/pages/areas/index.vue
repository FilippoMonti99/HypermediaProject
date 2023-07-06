<!--

import CardArea from '~/components/CardArea.vue';
    Page with the list of all the people.
    As described in the Card component, the same component was used for both person and project since they have the same structure.
-->
<template>
    <main>
        <div class="cont-ar1"> 
            <div class="image2">
                <img id="a1" src = "~/assets/img/invest.png"  alt=""/>
            </div>
            
            
            <div class="aree">
                <h1>Areas of investment</h1>
                <h3 style="margin-top:-15px;">At Innovate Ventures, we are driven by a strong belief in the power of innovation and the transformative potential of visionary entrepreneurs</h3>
            </div>
            
            
        </div>

        <div class="sottot">
            <h2>
                We have carefully chosen our areas of investment to strategically position ourselves for long-term success and impactful returns.
                We recognize that focusing our efforts on specific sectors allows us to develop a deep expertise and a comprehensive understanding of the unique challenges and opportunities within those industries. This focused approach enables us to identify and support the most promising startups, providing them with the necessary resources, guidance, and capital to thrive and disrupt their respective markets.
            </h2>
        </div>
        

        <div id="card-container">
            <CardArea v-for = "area of areas" :title = "area.name" :link = "'/areas/' + area.id" :imm_link="`_nuxt/assets/img/${area.name}.jpeg`" />
        </div>
    </main>
</template>

<script setup>

  const { data: areas } = await useFetch(useRuntimeConfig().public.serverURL + '/areas')


  useHead({
    title: 'All areas - Innovate Ventures',
    meta: [
      {
        name: 'description',
        content: 'All areas page, the 3 main areas in which we invest' 
      },
      {
        name: 'keywords',
        content : 'areas, economy, tourism, healthcare'
      }
    ]
  });
  </script>

<style>


    .cont-ar1{
        display: grid;
        align-items: center; 
        grid-template-columns: 1fr 1fr;
        column-gap: auto;
    }

    .aree{
        font-size: 60px;
        text-align: right;
        margin-right:3%;
        color:#03bfcb;
    }

    #a1{
        width:max-content;
        height:max-content;
        max-width:800px;
        max-height:800px;
    }
    
    .sottot{
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
        gap: 20px;
    }
    .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    main
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
        gap: 10px;
        text-align: center;
        width:100%;
    }




</style>