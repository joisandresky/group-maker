<template>
  <div id="mahasiswa">
      <p>Total Mahasiswa: {{total}}</p>
        <h3>List Mahasiswa</h3>
        <ul class="collection">
          <li class="collection-item" v-for="maba in mhs" :key="maba.npm">{{maba.nama}} - {{maba.npm}}</li>
        </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data () {
    return {
      logoLink: './assets/logo.png'
    }
  },
  computed: {
    ...mapState([
      'mhs'
    ]),
    // mhs(){
    //   return this.$store.getters.getMahasiswa
    // },
    total(){
      return this.$store.getters.getTotalMhs
    }
  }
}
</script>

