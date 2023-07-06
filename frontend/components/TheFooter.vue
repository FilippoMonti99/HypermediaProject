<!--
    Footer of the page
-->

<template>
    <footer>
        <div class="footer-container">
            <div class="footer-logo">
                <img id="foto" src="~/assets/img/pngegg.png" alt="Innovate Ventures">
                <h3>Innovate Ventures</h3>
            </div>
            
            <div class="footer-contact">
                <h4>Contact Us</h4>
                <p>123 Innovation Street, Cityville</p>
                <p>+1 123-456-7890</p>
                <p>info@innovateventures.com</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy;<b>2023 Innovate Ventures. All rights reserved.</b>  
                        <h4>Innovate Ventures</h4>  
                        </p>
        </div>
    </footer>

</template>

<style>
    footer
    {
        background-color: #03bfcb;
         margin-top: 1%;
        border-bottom: 5px solid #231e39;
        padding: 5px;
        bottom: 0;
        min-height: 1vh;
        align-items: center;
        
    }

    #foto{
        max-width:200px;
        max-height:200px;
        width: auto;
        height:auto;
    }
    
    .footer-container{
        display: grid;
        align-items: center; 
        grid-template-columns: 1fr 1fr;
        column-gap: auto;
        margin-left: 15%;
    }

    .footer-bottom{
        text-align: center;
    }

    .footer-contact
    {
        color: black;
        gap: 10px;
        font-size: 14pt;
    }
</style>


 
 
 
 
 
 
 
 