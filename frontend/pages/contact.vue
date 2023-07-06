<!--
    Contact Page
-->
<template>
        <main>
             <form>
                <div class="form-cont">
                    <div class="text-form">
                        <h1>Contact us</h1>
                        <h4>For further information</h4>
                    </div>
                    
                    <div class="act-form">
                        <div>
                            <label for = "name">Name & Surname</label>
                            <input type = "text" id = "name" placeholder = "Name & Surname" required>
                        </div>
                        <div>
                            <label for = "mail">E-mail</label>
                            <input type = "email" id = "mail" placeholder = "E-mail" required> 
                        </div>
                        <div id = "message-div">
                            <label for = "message">Message</label>
                            <textarea id = "message" placeholder = "Write your message here"></textarea>  
                        </div>
                        <button class="contbutt">Send Message</button>
                    </div>
                </div>
              </form>

              <div class="cont-cont"> 
                <div class="context">
                    <h1>Headquarter</h1>
                    <h4>123 Innovation Street, Cityville </h4>
                    <h4>+1 123-456-7890</h4> 
                    <h4>info@innovateventures.com</h4>
                </div>

                <div class="image2">
                    <img id="cont1" src = "~/assets/img/headquarter.png" alt=""/>
                </div>
            </div>




        </main>
</template>

<script setup>
  useHead({
    title: 'Contact us - Innovate Ventures',
    meta: [
      {
        name: 'description',
        content: 'Contac us page: our e-mail, adress, telephone number and a form to send us an e-mail directly from this page' 
      },
      {
        name: 'keywords',
        content : 'contact, name, surname, e-mail, telephone '
      }
    ]
  });
</script>

<style>
    .cont-cont{
        display: grid;
        align-items: center; 
        grid-template-columns: 1fr 1fr;
        column-gap: auto;
    }

    .context{
        font-size: 40px;
        text-align: left;
        margin-left:3%;
        color:#03bfcb;
    }

    #cont1{
        width:max-content;
        height:max-content;
        max-width:700px;
        max-height:700px;
    }
    
    .form-cont{
        display: grid;
        align-items: center; 
        grid-template-columns: 1fr 1fr;
        column-gap: auto;
        border-top: 50px;
    }

    .text-form{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color:#231e39;
        line-height:5px;
    }


    form {
        width: 95%;
        display: flex;
        flex-direction: column;
        padding: 15px;
        border-radius: 5px;
        row-gap: 20px;
        background-color: #7ce4eb;
        font-size: 25px;
        
    }

    .contbutt{
        border-radius: 5px;
        padding: 10px;
        width:100%;
        height: fit-content;
        max-height: 400px;
        background-color: #231e39;
        font-size: 20px;
        color:white;
        align-items: center;
    }

    textarea {
        width: 85%;
        min-height: 5.1em;
        resize: vertical;
        height: 150px;
    }

    input {
        width: 85%;
    }

    label {
        font-size: 20pt;
        font-weight: bold;
        display: block;
        margin-bottom: 5px;
        color:#231e39;
    }
    
    .act-form{
        align-items:right;
    }
    #mail{
        width: 85%;
        height: 50px; 
    }

    #name{
        width: 85%;
        height: 50px;
    }

    #message-div {
        flex-direction: column;
    }

    @media screen and (max-width: 650px) {
        form div {
            flex-direction: column;
        }

        input {
            width: 100%;
        }
        
        form {
            width: 90%;
            min-width: 400px;
        }
    }
</style>