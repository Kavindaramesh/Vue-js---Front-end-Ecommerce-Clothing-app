<template>
    <div class="welcome-page">
        <h1 style="color: transparent; margin-top: -10px; ">Welcome to Sally sweets </h1>
        <h1 style="color: transparent; margin-top: -10px; ">Welcome to Sally sweets </h1>
        </div>
        <div class="container"></div>




</template>

<style>

.welcome-page {
    background-image: url('../assets/2.jpg');
    filter: brightness(100%);
    background-size: cover;
    width: 100%;
    height: 110vh;
    margin-top: 10px;

    background-size: cover;
    background-position: center;
    /* Add any other background properties you need */
}
.logo-container{
    display: flex;
    justify-content: center;
    align-items: center;


}
</style>
<script>

export default {
    data() {
        return {
            activeTab: 'homeview'
        };
    },
    components: {  }
};

</script>
