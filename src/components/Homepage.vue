<template>
<div>
    <h1>THUNDER DESIGN</h1>
    <span @click="toDocs" class="toDocs">component</span>
</div>
</template>

<script>
export default {
    name: "Homepage",
    methods: {
        toDocs() {
            this.$router.push("./docs");
        },
    },
};
</script>

<style lang="less" scoped>
.toDocs {
    cursor: pointer;
}
</style>
