<template>
    <div class="d-flex justify-center align-center mb-2 navbar">
        <router-link class="navItem" to="/">About Me</router-link>
        <router-link class="navItem" to="/breakfast-page">Breakfast</router-link>
        <router-link class="navItem" to="/lunch-page">Lunch</router-link>
        <router-link class="navItem" to="/dinner-page">Dinner</router-link>
        <router-link class="navItem" to="/dessert-page">Desserts</router-link>
        <router-link class="navItem" to="/contact-page">Contact Me</router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            drawer: null
        }
    },
}
</script>
<style scoped>
.navbar {
    display: flex;
    flex-flow: column wrap;
    background: #c281bd;
    box-shadow: 0 4px 8px 0 rgb(0, 0, 0, 0.2);
    border-top: rgb(247, 216, 40) 5px solid;
}

.navbar>.navItem {
    color: #fff;
    text-decoration: none;
    text-align: center;
    padding: 10px;
    transition: 0.3s;
    font-weight: bold;
    border-bottom: #813e7d 2px solid;
    width: 100%;
}

.navItem:hover {
    color: #000;
    background: #F2E6D8
}

.navbar>.navItem>a {
    color: #000;
    text-decoration: none;
}

.navbar>.navItem>a:visited {
    color: #000;
    text-decoration: none;
}
</style>