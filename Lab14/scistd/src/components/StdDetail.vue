<template>
    <div v-if="editmode">
        <StdEdit :stdId="students.id"/>
    </div>
    <div v-else>
        <div class="card my-2">
            <div class="card-body bg-info bg-opacity-10">
                <h5 class="card-title">รหัสนิสิต {{ students.id }}</h5>
                <div class="card-sub-title">ชื่อ สกุล {{ students.name }}</div>
                <div class="cart-text">สาขาวิชา {{ students.major }} ชั้นปีที่ {{ students.yr }}</div>
            </div>
        </div>
        <!-- <button class="btn btn-success" @click="selectStudent()">เลือก</button> -->
        <button class="btn btn-warning mx-3" @click="editmode = !editmode">แก้ไขข้อมูล</button>
        <button class="btn btn-danger" @click="delDetail()">ลบข้อมูล</button>
    </div>
</template>

<script>
import StdEdit from "./StdEdit.vue"
import { EventBus } from "../event-bus";
export default {
    name: "StdDetail",
    components: {
        StdEdit
    },
    props: ["stdId"],
    data() {
        return {
            students: [],
            editmode: false,
        }
    },
    methods: {
        selectStudent() {
            EventBus.emit("std_select", {
                id: this.students.id,
                major: this.students.major
            });
        },
        delDetail() {
            if (confirm("ยืนยันลบข้อมูล")) {
                fetch(`http://localhost:3000/students/${this.stdId}`, {
                    method: "DELETE"
                }).then(() => {
                    EventBus.emit("stdChange", { message: "delete" })
                })
                    .catch((err) => console.log(err.message))
            }
        }
    },
    mounted() {
        fetch(`http://localhost:3000/students/${this.stdId}`)
            .then((res) => res.json())
            .then((data) => {
                this.students = data;
            })
            .catch((err) => console.log(err.message))
    }
}
</script>