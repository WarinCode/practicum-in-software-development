<template>
  <div class="container">
    <h1>Hello World</h1>
    <p>Subject = {{ subj }} Type={{ sectype }}</p>
    <p>Credit = {{ credit }} Open seat={{ seat }}</p>

    <p v-show="showdesc" class="text-primary">
      {{ desc }}
    </p>
    <button type="button" class="btn btn-primary" @click="toggleDesc">ดูข้อมูล</button>

    <div v-if="seat > 60" class="m-2">
      <h1 class="text-danger">ไม่มีห้อง LAB</h1>
      <p>ควรลดจำนวนเปิดรับ</p>
    </div>
    <h3 v-else-if="seat > 50" class="text-warning">มีห้อง LAB 2 ห้อง</h3>
    <h5 v-else>ใช้ได้ทุกห้อง</h5>

    <button type="button" class="btn btn-danger" @click="seat--">
      ---
    </button>
    <button type="button" class="btn btn-primary m-2" @click="seat++">
      +++
    </button>
    <br>
    <button type="button" class="btn btn-success" @click="setSec('Lecture')">Lecture</button>
    <button type="button" class="btn btn-info m-2" @click="setSec('Lab')">Lab</button>
    <button type="button" class="btn btn-dark" @click="setSec('Lecture/Lab')">Lecture/Lab</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      subj: "Database",
      sectype: "Lecture/Lab",
      credit: 3,
      seat: 30,
      desc: "v-show จะทำงานได้เร็วกว่าไม่กิน Resource ถ้าต้องแสดง/ซ่อนบ่อยๆใช้ v-showดีกว่า ",
      showdesc: false
    }
  },
  methods: {
    setSec(value) {
      this.sectype = value;
    },

    toggleDesc() {
      this.showdesc = !this.showdesc;
    }
  }
}
</script>

<style></style>