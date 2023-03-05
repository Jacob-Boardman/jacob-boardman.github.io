<template>
    <v-footer class="footer text-center">
        <div class="px-4 py-2 text-center w-100">
            Website design by Jacob Boardman (BSc) &#169; - <strong> {{ currentYear }} </strong>
        </div>
    </v-footer>
</template>
<script>
export default {
    data() {
        return {
            currentYear: 0
        }
    },
    created() {
        this.currentYear = this.getLatestyear()
    },
    methods: {
        getLatestyear() {
            return new Date().getFullYear();
        }
    }
}
</script>
<style scoped>
.footer {
    font-size: small;
    text-align: center;
    position: fixed;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 20px;
    background: #cebdad;
}
</style>