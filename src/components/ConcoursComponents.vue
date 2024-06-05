<template>
    <div class="container_text">
        <a class="link_color" href="/">
            <div>
                <div class="d-flex flex-row justify-content-between">
                    <div class="numero" :style="{ backgroundColor: bgColor }">
                        <h3 class="mt-1">{{ numN }}</h3>
                    </div>
                </div>
            </div>
        </a>
        <a class="link_color" href="/">
            <div class="contenu">
                <span class="disponible1">
                    <div class="disponible px-2">Bientôt disponible</div>
                </span>
                <h4 class="sous_contenu1 mb-4 text-start">{{ h4 }}</h4>
                <p class="sous_contenu2 text-start">{{ p }}</p>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'ConcoursComponents',
    props: {
        bgColor: {
            type: String,
            default: 'midnightblue'
        },
        numN: {
            type: String,
            required: true
        },
        h4: {
            type: String,
            required: true
        },
        p: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
    .container_text {
        padding-left: 15px;
        padding-right: 10px;
        padding-top: 30px;
        padding-bottom: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-right: 20px;
        margin-bottom: 30px;
        box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.4);
        cursor: pointer;
        max-width: 400px;
        height: auto;
    }

    .container_text:hover{
        box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.4);
        transition: 0.6s;
    }

    .numero {
        position: relative;
        height: 58px;
        width: 58px;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        color: white;
    }

    .contenu {
        margin-left: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    .sous_contenu1 {
        font-size: 19px;
    }

    .sous_contenu2 {
        font-size: 20px;
        font-style: italic;
    }

    .link_color {
        color: black;
        text-decoration: none;
        height: auto;
    }

    .disponible {
        background-color: rgba(10, 55, 100, 0.62);
        border-top-left-radius: 6px;
        border-bottom-right-radius: 6px;
        font-size: 13px;
        color: #fff;
        margin-top: -30px;
        margin-right: -70px;
        position: absolute;
    }
</style>