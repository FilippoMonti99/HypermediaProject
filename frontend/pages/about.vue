<!--
    About us page
-->
<template>
    <!--
        Instead of having the two structures written directly on the page, it was preferred to use components as they had the same layout.
        This also allows to have a much cleaner and easy to read 'code'
    -->
    <main>
        <div class="firm"><h1>Our firm</h1>
        <TextImage description = "Innovate Ventures is a leading venture capital firm dedicated to supporting and empowering early-stage and high-growth companies on their journey to success. With a passion for innovation and a commitment to nurturing entrepreneurial talent, we strive to make a lasting impact on the businesses we invest in and the industries they operate in. " :isReverse = true image="_nuxt/assets/img/pngegg.png"/></div>
        
        <div class="history"><h1> Our History</h1>
            <TextImage description = "Founded in 2005, our venture capital firm, Innovate Ventures, emerged as a result of a shared vision among a group of seasoned entrepreneurs and industry experts. With a passion for supporting innovation and driving technological advancements, they set out to establish a firm that would become a catalyst for groundbreaking ideas and transformative businesses.
                                    The founders, led by John Smith, recognized the immense potential of emerging markets and the need for strategic investments to foster entrepreneurship and fuel economic growth. Drawing on their own experiences of building successful companies, they assembled a team of investors with diverse backgrounds in technology, finance, and business strategy. " image="_nuxt/assets/img/investment.jpeg" />
                                    
            <TextImage description = "In the early years, Innovate Ventures focused on nurturing startups in the tech sector, providing capital, mentorship, and access to valuable networks. The firm quickly gained a reputation for its hands-on approach and commitment to helping entrepreneurs navigate the challenges of scaling their businesses. As Innovate Ventures expanded its portfolio, it began diversifying its investments across various industries, including finance, healthcare, energy, and tourism. This strategic shift allowed the firm to tap into new opportunities and support projects with high growth potential in different sectors.
                                    Over the years, Innovate Ventures has established itself as a trusted partner for entrepreneurs seeking not only financial support but also strategic guidance and industry expertise. The firm's investment philosophy centers around identifying visionary founders, disruptive technologies, and scalable business models." :isReverse = true image="_nuxt/assets/img/startup.webp"/>
                            
            <TextImage description = "Innovate Ventures has had several notable successes, with many of its portfolio companies achieving significant milestones, including successful IPOs, acquisitions by industry leaders, and global expansion. These successes have further solidified the firm's reputation and attracted a network of prominent investors and strategic partners. Today, Innovate Ventures continues to actively seek innovative projects that have the potential to shape industries and create lasting impact. With a dedicated team of investment professionals, the firm remains committed to supporting visionary entrepreneurs, driving technological advancements, and contributing to the growth and development of the entrepreneurial ecosystem.
                                    Throughout its history, Innovate Ventures has remained true to its core values of integrity, collaboration, and entrepreneurship, fueling its mission to be at the forefront of innovation and drive positive change in the business world." image="_nuxt/assets/img/innov.jpeg" /></div>
    
         <div class="health"><h1> About Healtcare</h1>
            <TextImage description = "With a deep understanding of the unique challenges and opportunities in the healthcare sector, our experienced team of investment professionals brings together a wealth of expertise, industry knowledge, and a robust network of strategic partners. We strive to identify and partner with exceptional entrepreneurs who are developing groundbreaking technologies, transformative therapies, digital health solutions, and disruptive business models." :isReverse=true image="_nuxt/assets/img/Health.jpeg" /> </div>
        <div class="economy"><h1> About Economy</h1>
            <TextImage description="At Innovate Ventures, we believe that innovation is the key driver of economic growth. We actively seek out companies with disruptive business models, groundbreaking technologies, and novel approaches that have the potential to transform industries and create sustainable value. By investing in these visionary enterprises, we play a vital role in fueling economic expansion, driving job creation, and fostering entrepreneurial ecosystems."  image="_nuxt/assets/img/logoecon.png"></TextImage>
        </div>
        <div class="tourism"><h1> About Tourism</h1>
            <TextImage description="Our investment philosophy is centered around supporting companies across various segments of the tourism industry, including travel technology, accommodations, experiences, destination marketing, and sustainable tourism initiatives. By partnering with innovative businesses in these areas, we aim to drive positive change, boost economic growth, and contribute to the overall development of the tourism ecosystem." :isReverse=true image="_nuxt/assets/img/logotour.png"></TextImage>
        </div>
    </main>
</template>

<script setup>
  useHead({
    title: 'About us - Innovate Ventures',
    meta: [
      {
        name: 'description',
        content: 'About us page, brief information about who we are and in what we invest' 
      },
      {
        name: 'keywords',
        content : 'about, economy, tourism, healthcare'
      }
    ]
  });
  </script>

<style>

    .firm{
        font-size: 50px;
        color:rgb(27, 103, 202);
        
    }
    .history{
       
        font-size: 50px;
        background-color: rgb(96, 240, 245);
        color:rgb(27, 103, 202);
       
    }

    .health{
        font-size: 50px;
        color:rgb(27, 103, 202);
        border-bottom: 3px solid aqua;
       
    }

    .economy{
        font-size: 50px;
        color:rgb(27, 103, 202);
        border-bottom: 3px solid aqua;
       
    }

    .tourism{
        font-size: 50px;
        color:rgb(27, 103, 202);
    
       
    }

    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
</style>