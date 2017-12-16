<template>
  <div id="home">
    <div class="row">
      <div class="col s8">
        <h3>Buat Kelompok</h3>
        <div class="row">
          <div class="input-field col s6">
            <input type="text" name="max_org" v-model="max_org">
            <label for="max_org">Maksimal Anggota</label>
          </div>
          <div class="input-field col s4">
            <button class="btn" @click="proses()">Proses</button>
          </div>
        </div>
        <kelompok></kelompok>
      </div>
      <div class="col s4">
          <mahasiswa></mahasiswa>
      </div>
    </div>
  </div>
</template>

<script>
import Mahasiswa from './Mahasiswa.vue'
import Kelompok from './Kelompok.vue'

export default {
  data () {
      return {
          max_org: ''
      }
  },
  components: {
      Mahasiswa,
      Kelompok
  },
  computed: {
      getMaxOrg () {
          return this.max_org
      } 
  },
  methods: {
    proses(){
      const totalMhs = this.$store.getters.getTotalMhs
      const maxOrg = this.getMaxOrg
      const total_kelompok = totalMhs/maxOrg
      let isGenap = Number.isInteger(total_kelompok)
      if(this.max_org === ''){
        alert('Isi Maksimal Orang nya boss!!')
      } else {
        this.$store.commit('acak', {
          tm: totalMhs,
          max: maxOrg,
          tk: total_kelompok,
          genap: isGenap
        })
      }
    }
  }
}
</script>

