<template>
    <ul class="list-group" style="width: 30rem">
        <li class="list-group-item" v-for="(std, id) in students" :key="id">
            <a href="#" @click="std.isActive = !std.isActive">
                {{ std.id }}
            </a>
            <div v-if="std.isActive">
                <StdDetail :stdId="std.id" />
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
            students: []
        }
    },
    mounted() {
        fetch("http://localhost:3000/students")
            .then((res) => res.json())
            .then((data) => {
                this.students = data;
            })
            .catch((err) => console.log(err.message))
    }
}
</script>