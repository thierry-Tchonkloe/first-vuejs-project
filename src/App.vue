<template>
    <div id="app">
        <MyHome />
    </div>
</template>

<script>
import MyHome from './pages/MyHome.vue';

export default {
    name: 'App',
    components: {
        MyHome
    },
}
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style> 