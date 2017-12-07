<template>
  <div id="mahasiswa">
      <p>Total Mahasiswa: {{total}}</p>
        <h3>List Mahasiswa</h3>
        <ul class="collection">
          <li class="collection-item" v-for="maba in mhs">{{maba.nama}} - {{maba.npm}}</li>
        </ul>
  </div>
</template>

<script>
export default {
  computed: {
    mhs(){
      return this.$store.getters.getMahasiswa
    },
    total(){
      return this.$store.getters.getTotalMhs
    }
  }
}
</script>

