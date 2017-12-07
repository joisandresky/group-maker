<template>
  <div id="app">
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
        <app-kelompok></app-kelompok>
      </div>
      <div class="col s4">
          <app-mahasiswa></app-mahasiswa>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      max_org: ''
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
  },
  computed: {
    getMaxOrg(){
      return this.max_org
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
