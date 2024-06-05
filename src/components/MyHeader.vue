<template>
    <div id="MyHeader">
        <header class="head_page">
            <nav class="nav_page">
                <div class="logo"><a href="eResultats.html"><img src="../assets/logo.png" alt="logo" /></a></div>
                <ul class="menu_nav">
                    <li class="sous_menu"><a href="#"><h4>comment çA MARCHE ?</h4></a></li>
                    <li class="sous_menu"><a href="#"><span><h4>examens</h4></span></a></li>
                    <li class="sous_menu"><a href="#"><span><h4>concours</h4></span></a></li>
                    <li class="sous_menu"><a href="#"><h4>epreuves et Corrigés</h4></a></li>
                    <li class="sous_menu"><a href="#"><h4> Foire aux questions</h4></a></li> 
                </ul>
            </nav>
        </header>
    </div>
</template>

<script>
    export default {
        name: 'MyHeader',
    }
</script>


<style scoped>
    a{
        text-decoration: none;
    }
    .head_page{
        height: 70px;
        width: 100%;
        background-color: rgb(14, 10, 47);
    }
    .menu_nav{
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .sous_menu{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        height: 70px;
    }
    .nav_page{
        margin-left: 15px;
        margin-right: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .logo>a>img{
        width: 40px;
        height: 40px;
    }
    .sous_menu>a{
        text-transform: uppercase;
        color: white;
    }
    .sous_menu>a:hover{
        color: darkorange;
    }
    .sous_menu>a>h4{
        font-size: 14px;
    }
    .sous_menu>a>span>h4{
        font-size: 14px;
    }

    @media screen and (max-width: 767px) {
        .head_page{
            height: auto;
        }
        .menu_nav{
            width: 80%;
            display: flex;
            flex-direction: column;
        }
    }
</style>
