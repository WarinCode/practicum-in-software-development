<template>
    <h6 class="text-success fw-bold">{{ stdId }}-{{ stdName }}</h6>
</template>

<script>
export default {
    name: "StdDetail",
    props: ["stdId", "stdName"],
    data() {
        return {
        }
    }
}
</script>

<style></style>