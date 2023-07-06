<!--
    Page description for a single person.
    As described in the SmallCard component, the same component was used for both person and project since they have the same structure.
-->
<template>
    <main>
        <div class = "info-group-area">
            
            <div>
                <img id="area-imm" v-bind:src="getSrc(area.name)" alt="" />
            </div>
                
            <div id = "data-container-area">
                <p class = "data-area"> <span>{{ area.name }}</span></p>
            </div>
        
        </div>
        
        <p id = "description-area" v-html = "newLineOnFullStop(area.description)"></p>

        <!--
            v-html allows us to change the structure of a HTML element.
            It used because of the 'newLineOnFullStop' function that returns a string with the <br> tags.
            This function is a composable that is available anywhere, without requiring to be imported.
        -->
        <div id = "person-card-container">
            <SmallCard v-for = "project of area.projects" :link = "'/projects/' + project.id" :title = "project.name" :subtitle = "project.field"/>
        </div>
    </main>
</template>

<script setup>
    
    const route = useRoute()
    const id = route.params.id
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const { data: area } = await useFetch(useRuntimeConfig().public.serverURL + '/areas/' + id)
    
    const getSrc = (name) => {
      const path = `/assets/img/${name}.jpeg`;
      const modules = import.meta.globEager("/assets/img/*.jpeg");
      return modules[path].default;
    };

    useHead({
    title: "Area - Innovate Ventures " ,
    meta: [
      {
        name: 'description',
        content: 'single area page, information about that spaific area, projects related' 
      },
      {
        name: 'keywords',
        content : 'area, projects'
      }
    ]
  });

</script>

<style>
    
    .info-group-area{
        display: grid;
        align-items: center; 
        grid-template-columns: 1fr 1fr;
        column-gap: auto;
    }

    .data-area{
        font-size: 40px;
        text-align: right;
        margin-right:3%;
        color:#03bfcb;
    }

    #area-imm{
        max-width: 300px;
        max-height: 300px;
        aspect-ratio: 1/1;
    }
   

    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    
    #description-area {
        padding: 0 20px 0 20px;
        font-size: 18pt;
        color: rgb(14, 144, 161);
        justify-content: center;
        font-style: italic;
    }

    
    #person-card-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
        margin:2%;
        
    }

</style>