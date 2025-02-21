<template>
    <ul class="list-group" style="width: 30rem">
        <li class="list-group-item" v-for="(std, id) in students" :key="id">
            <a href="#" @click="std.isActive = !std.isActive">
                {{ std.id }} {{ std.name }} {{ std.major }} / {{ std.yr }}
            </a>
            <div v-if="std.isActive">
                <StdDetail :stdId="std.id" :stdName="std.name" />
            </div>
        </li>
    </ul>
</template>

<script>
import StdDetail from "./StdDetail.vue";
export default {
    name: "StdList",
    components: {
        StdDetail
    },
    data() {
        return {
            students: [
                { id: '65001', name: 'Somchai Sailom', major: 'CS', yr: 4, isActive: false },
                { id: '65002', name: 'Somying Jingjai', major: 'DS', yr: 2, isActive: false },
                { id: '65003', name: 'Sommai Kaikong', major: 'CS', yr: 3, isActive: false }
            ],
        }
    }
}
</script>

<style></style>