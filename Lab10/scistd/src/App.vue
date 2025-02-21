<template>
    <div class="container">
        <h1 class="mt-3">นิสิตคณะวิทยาศาสตร์ ศรีราชา</h1>
        <h2 class="text-primary">[{{ id }}] {{ name }}</h2>
        <h3 class="text-danger">{{ yr }}/{{ sem }}</h3>
        <p class="text-secondary">{{ secType }}</p>
        <button type="button" class="btn btn-secondary" @click="showList = !showList">แสดงรายชื่อนิสิต</button>
        <div v-if="showList" class="mt-3">
            <StdList />
        </div>
    </div>
</template>

<script>
import StdList from "./components/StdList.vue"
export default {
    name: "App",
    components: {
        StdList
    },
    data() {
        return {
            id: "01418214",
            name: "Praticum in software development",
            yr: 2524,
            sem: 2,
            secType: ["Lab", "Lecture"],
            showList: false
        }
    }
}
</script>

<style></style>
