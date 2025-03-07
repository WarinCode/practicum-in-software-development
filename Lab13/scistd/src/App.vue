<template>
  <div class="container">
    <h1 class="mt-3">นิสิตคณะวิทยาศาสตร์ ศรีราชา {{ stdId }}</h1>
    <h2 class="text-primary">[{{ id }}] {{ name }}</h2>
    <h3 class="text-danger">{{ yr }}/{{ sem }} {{ stdMajor }}</h3>
    <p class="text-secondary">{{ secType }}</p>
    <button type="button" class="btn btn-primary me-2" @click="showAdd = !showAdd">เพิ่มนิสิต</button>
    <button type="button" class="btn btn-secondary" @click="showList = !showList">แสดงรายชื่อนิสิต</button>

    <div v-if="showAdd" class="my-3">
      <StdAdd />
    </div>

    <div v-if="showList" class="mt-3">
      <StdList />
    </div>
  </div>
</template>

<script>
import StdList from "./components/StdList.vue"
import StdAdd from "./components/StdAdd.vue";
import { EventBus } from "./event-bus";
export default {
  name: "App",
  components: {
    StdList,
    StdAdd
  },
  data() {
    return {
      id: "01418214",
      name: "Praticum in software development",
      yr: 2524,
      sem: 2,
      secType: ["Lab", "Lecture"],
      showList: false,
      stdId: null,
      stdMajor: null,
      showAdd: false
    }
  },
  mounted() {
    EventBus.on("std_select", (data) => {
      this.stdId = data.id;
      this.stdMajor = data.major;
    })
  }
}
</script>

<style></style>
