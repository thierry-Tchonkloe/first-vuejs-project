<template>
    <div id="BandeComponents">
        <section class="la_section">
            <div class="image_base">
                <h1 class="mt-5">Bienvenue sur la plateforme eRésultats</h1><br>
                <p>Vos résultats aux différents examens (BAC, BEPC, CEP, etc.) et concours nationaux disponibles en ligne.</p><br><br>
                <h2>eRésultats vous souhaite une belle réussite !</h2><br><br><br><br>
            </div>
        </section>
    </div>
</template>


<script>
    export default {
        name: 'BandeComponents',
    }
</script>

<style>
    .la_section{
        width: 100%;
        height: 69vh;
        background-image: url("../assets/image1.jpg");
        background-position: center;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: center;
        color: white;
    }
    .image_base{
        max-height: 300px;
        width: 100%;
        background-color: navy;
        opacity: 0.4;
        margin-top: 500px;
    }
    .image_base>h1{
        font-size: 55px;
        text-transform: uppercase;
    }
    .image_base>p{
        font-size: 25px;
        font-style:normal;
    }
    .image_base>h2{
        font-size: 20px;
    }


    .container{
        margin-top: 190px;
        margin-left: 100px;
    }
    .container_menu{
    position: relative;
    margin-right: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    }

    .container_menu>h1{
        font-size: 43px;

    }
    .div_link{
        font-size: 24px;
        width: 110px;
        height: 30px;
        border: 1px solid rgba(14, 10, 47,0.8);
        border-radius: 25px;
        text-align: center;
    }
    .div_link>a {
        color: #141030; 
    }

    @media screen and (max-width: 800px) {
        .image_base{
            max-height: 400px;
        }
        .image_base>h1{
            font-size: 30px;
            text-transform: uppercase;
        }
    }
    @media screen and (max-width: 450px) {
        .image_base{
            max-height: 500px;
        }
        .image_base>h1{
            font-size: 27px;
            text-transform: uppercase;
        }
    }
</style>