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
import { EventBus } from "../event-bus.js";
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
    methods: {
        getData() {
            fetch("http://localhost:3000/students")
                .then((res) => res.json())
                .then((data) => {
                    this.students = data;
                })
                .catch((err) => console.log(err.message))
        }
    },
    mounted() {
        this.getData();

        EventBus.on("stdChange", (data) => {
            console.log(`Student Change --> ${data.message}`);
            this.getData();
        })
    }
}
</script>