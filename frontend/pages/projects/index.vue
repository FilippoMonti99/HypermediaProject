
<template>
    <main>
        <div class="cont-pr1"> 
            <div class="proj1">
                <h1>Our projects</h1>
                <h3 style="margin-top:-15px;">We want to support and nurture innovative ideas, drive market disruption, and contribute to the growth and development of impactful businesses</h3>
                <NuxtLink to = "/mostrelevant" class="lin"> 
            <div id="most_stpr">
               <h1> Top ranked </h1>
            </div>
        </NuxtLink> 
            </div>
            
            <div class="image2">
                <img id="p1" src = "~/assets/img/p1.png" alt=""/>
            </div>
        </div>
        <div class="cont-pr2">
            <div class="image2">
                <img id="p2" src = "~/assets/img/p1.png" alt=""/>
            </div>
            <div class="sectors">
                <h1>
                    Requirements:
                </h1>
                <h2>
                    Market Potential.
                </h2><h2>  
                    Disruption and Innovation.
                </h2><h2>
                    Addressing Key Challenges.
                </h2><h2>
                    Sustainability and Social Impact.
                </h2><h2>
                    Passionate Team Workers.
                </h2>
            </div>
       </div>
        
       <div class="carte">
        
        <div id = "form-container-proj">
                <label class="proj-filt" for = "projects-filter"><h1>By area of interest</h1></label>
                <select v-model="area">
                <option value="0"> All projects</option>
                <option value="1"> Economy</option>
                <option value="2"> Tourism</option>
                <option value="3"> Health</option>
                </select>
            </div>

            <div id="card-container">
                <CardLoc v-for = "project of filtered" :title = "project.name" :subtitle = "project.field" :link = "'/projects/' + project.id" :img_link="`_nuxt/assets/img/projects/${project.name}.jpeg`" :button="false"/>
            </div>
    
       </div>     
            

        


    </main>
</template>

<script setup>
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const { data: projects } = await useFetch(useRuntimeConfig().public.serverURL + '/projects')
    
    const area = ref(0);

    const filtered = computed(() => {

        if(area.value == 0 )
            return projects.value
       
         const arr = []

        // Filtering the list
        for(let loc of projects.value) {
            if(loc.area_selection == area.value)
                arr.push(loc)
        }

        // Returning the filtered list
        return arr
    })
    
    useHead({
    title: 'All projects - Innovate Ventures',
    meta: [
      {
        name: 'description',
        content: 'All projects page, see all the projects available in our firm or filter them by area' 
      },
      {
        name: 'keywords',
        content : 'projects, economy, tourism, healthcare, area'
      }
    ]
  });
</script>

<style>

    .proj-filt{
        color:white;
    }
    
    .cont-pr1{
        display: grid;
        align-items: center; 
        grid-template-columns: 1fr 1fr;
        column-gap: auto;
    }

    .proj1{
        font-size: 60px;
        text-align: left;
        margin-left:3%;
        color:#03bfcb;
    }

    #p1{
        width:max-content;
        height:max-content;
        max-width:500px;
        max-height:700px;
    }

    .cont-pr2{
        display: grid;
        align-items: center; 
        grid-template-columns: 1fr 1fr;
        column-gap: auto;
        background-color:#03bfcb;
        width:100%;
        margin-top:10%;
    }

    .sectors{
        color:#231e39;
        font-size: 45px;
        text-align:right;
        margin-right:5%;
    }

    #p2{
        width:max-content;
        height:max-content;
        max-width:500px;
        max-height:700px;
    }


    #card-container
    {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: flex-start;
        gap: 20px;
        margin-bottom: 10px;
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
        gap: 7px;
    }
    
    #most_stpr
    {
        display: flex;
        flex-flow: column;
        padding: 10px;
        width: 100%;
        height: fit-content;
        background-color: #03bfcb;
        border-radius: 10px;
        text-align:center;
    }
    
    .lin{
        color: #231e39;
        text-decoration: none;
        font-size:30px;
    }

    .lin:hover{
        color: #b014c5;
    }

    #form-container-proj {
        width: 90%;
        border-radius: 10px;
        border: 2px solid rgb(27, 103, 202);
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-content: flex-start;
        gap: 20px;
        background-color:#231e39;
        padding: 20px;
        font-size:25pt;
        margin:2%;
        margin-left: 5%;
    }
    
    .carte{
        
        margin-bottom:-18px;
        background-color: rgb(27, 103, 202);
    
    }
   

   
</style>