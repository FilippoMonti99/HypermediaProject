<template>
    <main>
       <div class="rank">
            <h1> Top ranked projects</h1>
            <h6> At Innovate Ventures, we are committed to identifying and supporting innovative projects that have the potential to make a significant impact in the economy, health, and tourism sectors. Our team of experts has meticulously evaluated numerous ventures and handpicked a selection of top-ranked projects that exemplify groundbreaking ideas and promising growth potential.</h6>
       </div>
        

        <div id="card-container">
            <CardLoc v-for = "project of filtered" :title = "project.name" :subtitle = "project.field" :link = "'/projects/' + project.id" :img_link="`_nuxt/assets/img/projects/${project.name}.jpeg`" />
        </div>
       
    </main>
</template>

<script setup>
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const { data: projects } = await useFetch(useRuntimeConfig().public.serverURL + '/projects')
    
    const filtered = computed(() => {
       
         const arr = []

        // Filtering the list
        for(let loc of projects.value) {
            if(loc.most == 1)
                arr.push(loc)
        }

        // Returning the filtered list
        return arr
    })

    useHead({
    title: 'Most relevant projects - Innovate Ventures',
    meta: [
      {
        name: 'description',
        content: 'most relevant projects, our top 5 ranked projects' 
      },
      {
        name: 'keywords',
        content : 'most, relevant, projects, top'
      }
    ]
  });
</script>

  

<style>
    #card-container
    {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: flex-start;
        gap: 20px;
    }

    main
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
        gap: 10px;
    }
    
    .rank{
        font-size: 60px;
        text-align: left;
        margin-left:3%;
        color:#03bfcb;
    }
    
    .form-container {
        width: 90%;
        border-radius: 10px;
        border: 2px solid brown;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-content: flex-start;
        gap: 20px;

        background-color: burlywood;
        padding: 20px;
    }

    </style>