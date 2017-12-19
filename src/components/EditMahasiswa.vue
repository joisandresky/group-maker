<template>
  <div id="edit-mahasiswa" class="container">
      <br>
      <div class="row">
        <div class="col s12 m6 offset-m3">
          <div class="card grey lighten-4">
            <div class="card-content black-text">
              <span class="card-title">Edit Mahasiswa</span>
              <div class="row">
                <div class="input-field col s12">
                    <input type="text" name="npm" v-model="npm" disabled>
                </div>
               </div>
               <div class="row">
                <div class="input-field col s12">
                    <input type="text" name="nama" v-model="nama">
                </div>
               </div>
            </div>
            <div class="card-action">
                <button class="btn" @click="updateMahasiswa">Simpan</button>
              <router-link :to="{name: 'view-mahasiswa', params: {npm: npm}}" class="btn red">Kembali</router-link>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import db from '../firebaseInit'

export default {
  data () {
    return {
      npm: null,
      nama: null
    }
  },
  beforeRouteEnter (to, from, next) {
    db.collection('mahasiswa').where('npm', '==', to.params.npm).get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.npm = doc.data().npm
            vm.nama = doc.data().nama
          })
        })
    })
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      db.collection('mahasiswa').where('npm', '==', this.$route.params.npm).get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.npm = doc.data().npm
          this.nama = doc.data().nama
        })
      })
    },
    updateMahasiswa () {
      if(!!this.nama) {
        db.collection('mahasiswa').where('npm', '==', this.$route.params.npm).get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.update({
              npm: this.npm,
              nama: this.nama
            }).then(() => {
              alert('berhasil Mengupdate Data Mahasiswa')
              this.$router.push({name: 'view-mahasiswa', params: {npm: this.$route.params.npm}})
            })
          })
        })
      } else {
        alert('Isi Dengan Lengkap Semua Data yang dibutuhkan!')
        return false
      }
    }
  }
}
</script>
