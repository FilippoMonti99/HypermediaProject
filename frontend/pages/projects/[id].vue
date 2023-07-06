<!--

import SmallCardArea from '~/components/smallCardArea.vue';

import { SmallCard } from '~/.nuxt/components';

import SmallCardArea from '~/components/smallCardArea.vue';
    Page description for a single project.
    As described in the SmallCard component, the same component was used for both person and project since they have the same structure.
-->
<template>
    <main>
        <div class = "info-group-project">
            <div> 
                <img id="proj-imm" v-bind:src="getSrc(project.name)" alt=""/>
            </div>
            
            <div id = "data-container">
                <p class = "data-project"><b>Name:</b> <span>{{ project.name }}</span></p>
                <p class = "data-project"><b>Area:</b> <span>{{ project.field }}</span></p>
            </div>
        </div>

        <p id = "description-project" v-html = project.description></p>
        
        <div class="small-cards-pair">
             
            <div class="carta-1">
                
                <h1 id="proj">Area:</h1>
                
                <div id = "project-card-container">
                    <SmallCardArea :title = "project.area.name" :link = "'/areas/' + project.area.id" />
                </div>

             </div>   
            
             <div class="carta-2">
                
                <h1 id="proj">Supervisor:</h1>
                
                <div id = "project-card-container">
                    <SmallCard :title = "project.person.name" :subtitle = "project.person.role" :link = "'/people/' + project.person.id" />
                </div>
             
            </div>

        </div>
        
        
    </main>
</template>

<script setup>
    
    const route = useRoute()
    const id = route.params.id
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const { data: project } = await useFetch(useRuntimeConfig().public.serverURL + '/projects/' + id)
    
    const getSrc = (name) => {
      const path = `/assets/img/projects/${name}.jpeg`;
      const modules = import.meta.globEager("/assets/img/projects/*.jpeg");
      return modules[path].default;
    };

    useHead({
    title: "Project - Innovate Ventures " ,
    meta: [
      {
        name: 'description',
        content: 'single project page, information about a specific project' 
      },
      {
        name: 'keywords',
        content : 'project, supervisor, area'
      }
    ]
  });

</script>

<style>

    .info-group-project{
        display: grid; 
        align-items: top;
        grid-template-columns: 1fr 1fr;
        column-gap: auto;
        margin-top:2%;
    }

    .data-project{
        font-size: 33px;
        text-align: left;
        margin-left:3%;
        color:#03bfcb;
    }

    #proj-imm{
        max-width: 400px;
        max-height: 400px;
        aspect-ratio: 1/1;
    }

    .small-cards-pair{
        display: grid; 
        align-items: top;
        grid-template-columns: 1fr 1fr;
        column-gap: auto;
    }

    .carta-1{
        color:  rgb(235, 134, 98);
        font-size: 15pt;
        text-align: left;
        
    }

    .carta-2{
        color:  rgb(235, 134, 98);
        font-size: 15pt;
    }


    #project-card-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px
    }



    #description-project {
        padding: 0 20px 0 20px;
        font-size: 18pt;
        color:#03bfcb ;
        text-align: center;
        margin-left:20%;
        margin-right:20%;
        font-style: italic;
    }
</style>