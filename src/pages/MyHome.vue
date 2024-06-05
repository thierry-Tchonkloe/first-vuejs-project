<template>
    <div id="MyHome">
        <div>
            <MyHeader />
        </div>
        <div>
            <BandeComponents />
        </div>

        <div class="MyHomeExam">
            <div class="MyHomeExamConcours">
                <div class="_1MyHomeExam">
                    <div class="d-flex justify-content-between mb-5 MyHomeExam1">
                        <h1>Examens & concours nationaux</h1>
                        <div class="w-25 _button_ border border-1">
                            <b-button href="#" variant="outline-info">Voir plus</b-button>
                        </div>
                    </div>
                    <div class="MyHomeExam2">
                        <GeneralCoursComponent bgColor="midnightblue" numN="01" h4="CEP session des malades de Juillet 2022" p="Direction Examens et concours MEMP" />

                        <GeneralCoursComponent bgColor="green" numN="02" h4="CEP session normale de Juin 2022" p="Direction Examens et concours MEMP" />

                        <GeneralCoursComponent bgColor="midnightblue" numN="03" h4="BEPC la session normale de Juin 2020" p="Direction Examens et concours MEMP" />

                        <GeneralCoursComponent bgColor="green" numN="04" h4="BAC la session normale de Juin 2020" p="Office du Baccalauréat au Bénin" />

                        <GeneralCoursComponent bgColor="brown" numN="05" h4="Inscription au fichier national des principales fonctions" p="Ministère de la Décentralisation et de la Gouvernance Locale" />

                        <GeneralCoursComponent bgColor="goldenrod" numN="06" h4="Une Formation de Master(1 & 2) 2021" p="Direction Examens et concours MEMP" />

                        <GeneralCoursComponent bgColor="midnightblue" numN="07" h4="Une Formation de Licence(1 & 2 & 3) 2021" p="Direction Examens et concours MEMP" />

                        <GeneralCoursComponent bgColor="indianred" numN="08" h4="Concours d'Entrée à l'INSPEI 2021" p="Direction Examens et concours MEMP" />

                        <GeneralCoursComponent bgColor="teal" numN="09" h4="Concours d'Entrée à l'INSPEI 2021 - 2022" p="Direction des Examens et concours MEMP" />
                    </div>
                </div>
                <hr class="mt-5 mb-5">
                <div class="_1MyHomeExam mt-5 pt-3">
                    <div class="MyHomeExam2">
                        <ConcoursComponents bgColor="midnightblue" numN="01" h4="CEAP 2022" p="Direction Examens et concours MEMP" />

                        <ConcoursComponents bgColor="green" numN="02" h4="CAP 2022" p="Direction Examens et concours MEMP" />

                        <ConcoursComponents bgColor="midnightblue" numN="03" h4="Concours d'Entrée à l'IFSIO 2022" p="Direction Examens et concours MESRS" />

                        <ConcoursComponents bgColor="green" numN="04" h4="Concours d'Entrée à l'INMeS 2022" p="Direction Examens et concours MESRS" />

                        <ConcoursComponents bgColor="brown" numN="05" h4="Concours d'Entrée à l'ENSPD 2022" p="Direction Examens et concours MESRS" />

                        <ConcoursComponents bgColor="goldenrod" numN="06" h4="Concours d'Entrée à l'ENSTIC 2022" p="Direction Examens et concours MESRS" />

                        <ConcoursComponents bgColor="midnightblue" numN="07" h4="Concours d'Entrée à l'ENEAM 2022" p="Direction Examens et concours MESRS" />

                        <ConcoursComponents bgColor="indianred" numN="08" h4="CAFCP 2022" p="Direction Examens et concours MEMP" />

                        <ConcoursComponents bgColor="teal" numN="09" h4="CEP session des malades de Juillet 2022" p="Direction Examens et concours MEMP" />
                    </div>
                </div>
            </div>
        </div>
        <div>
            <MyFooter />
        </div>
    </div>
</template>

<script>
    import GeneralCoursComponent from '../components/GeneralCoursComponent.vue';
    import ConcoursComponents from '../components/ConcoursComponents.vue';
    import MyHeader from '../components/MyHeader.vue';
    import MyFooter from '../components/MyFooter.vue';
    import BandeComponents from '../components/BandeComponents.vue';


    export default {
        name: 'MyHome',
        components: {
            GeneralCoursComponent,
            ConcoursComponents,
            MyHeader,
            MyFooter,
            BandeComponents,
        }
    }
</script>

<style>
    #MyHome{
        width: 100%;
    }
    .MyHomeExam{
        margin-top: 200px;
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .MyHomeExamConcours{
        width: 88%;
    }
    .MyHomeExam1>div>b-button{
        border: 2px solid black;
        border-radius: 25px;
        padding-right: 14px;
        padding-left: 14px;
        padding-top: 7px;
        padding-bottom: 7px;
        text-decoration: none;
        color: black;
        cursor: pointer;
    }
    .MyHomeExam2{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    @media screen and (max-width: 600px) {
        .MyHomeExam{
            margin-top: 300px;
        }
        .MyHomeExam1{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
        }

        ._button_{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
    }
</style>