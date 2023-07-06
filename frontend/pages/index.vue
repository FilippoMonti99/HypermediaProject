<!--
     Home page
-->
<template>

    <main>
        <div class="cont"> 
            <div class="tit">
                <h1>INNOVATE VENTURES</h1>
                <h2 style="margin-top:-15px;">Leading investment firm specialized in funding  startups</h2>
            </div>
            
            <div class="image2">
                <img id="uno" src = "~/assets/img/pngegg.png" alt="Innovate Ventures"/>
            </div>
        </div>
      
        <div class="secondo"> 
            <div class="image2">
                <img id="sec" src = "~/assets/img/ideas.png" alt=""/>
            </div>
            <div class="tit2">
                <h1> We believe in supporting visionary founders who are passionate about disrupting industries and solving complex challenges  </h1>
            </div>
        </div>

        <div class="terzo"> 
            <div class="tit3">
                <h1> Our experienced team brings a wealth of industry expertise and a vast network of connections to help our portfolio companies accelerate their growth and achieve their full potential  </h1>
            </div>
            <div class="image2">
                <img id="ter" src = "~/assets/img/team.png" alt=""/>
            </div>
        </div>

        <div class="quarto"> 
            <div class="image2">
                <img id="qua" src = "~/assets/img/proj.png" alt=""/>
            </div>
            <div class="tit4">
                <h1> Our investment focus spans across sectors such as technology, healthcare, consumer products, fintech, and clean energy, among others </h1>
                <NuxtLink to = "/mostrelevant" class="linksyle"> 
                    <div id="mostrel">
                        <h1>  Our top ranked projects </h1>
                    </div>
                </NuxtLink> 
            </div>
        </div>

    </main>
</template>


<script setup>
  useHead({
    title: 'Innovate Ventures',
    meta: [
      {
        name: 'description',
        content: 'see every information you want about Venture Innovative starting from our Home page' 
      },
      {
        name: 'keywords',
        content : 'Venture, Innovative, VC'
      }
    ]
  });
</script>


<style>



    main {
        width: 100%;
        
    }
    
    .cont{
        display: grid;
        align-items: center; 
        grid-template-columns: 1fr 1fr;
        column-gap: auto;
    }
    
    .secondo{
        display: grid;
        align-items: center; 
        grid-template-columns: 1fr 1fr;
        column-gap: auto;
        background-color:rgb(96, 240, 245) ;
        
    }

    .terzo{
        display: grid;
        align-items: center; 
        grid-template-columns: 1fr 1fr;
        column-gap: auto;
        background-color:rgb(27, 103, 202) ;
        
    }

    .quarto{
        display: grid;
        align-items: center; 
        grid-template-columns: 1fr 1fr;
        column-gap: auto;
    }
    
    #uno{
        width:max-content;
        height:max-content;
        max-width:800px;
        max-height:800px;
    }

    #sec{
        margin:1%;
        width:max-content;
        height:max-content;
        max-width:800px;
        max-height:800px;
    }

    #ter{
        margin:1%;
        width:max-content;
        height:max-content;
        max-width:800px;
        max-height:800px;
    }

    #qua{
        margin:1%;
        width:max-content;
        height:max-content;
        max-width:800px;
        max-height:800px;
    }

    .tit {
        font-size: 70px;
        text-align: left;
        margin-left:3%;
        color:#03bfcb;
       
    }

    .tit2{
        font-size: 40px;
        color: #332c53;
        text-align: right;
        margin:3%;
    }

    .tit3{
        font-size: 40px;
        color:#03d2e1;
        text-align: left;
        margin:3%;
    }
    .tit4 {
        font-size: 40px;
        text-align: right;
        margin:3%;
        align-items: center;
        color:white;
    }
    .contex{
        background-color: aquamarine;
    }
    
    #mostrel
    {
        border-radius: 5px;
        display: flex;
        flex-flow: column;
        padding: 10px;
        width: 100%;
        height: fit-content;
        max-height: 400px;
        background-color: rgb(96, 240, 245);
        font-size: 30px;
        text-align: center;
        align-items: center;
    }
    .linksyle{
        color: white;
        text-decoration: none;
    }
</style>