<template>
  <div id="new-mahasiswa" class="container">
      <br>
      <div class="row">
        <div class="col s12 m6 offset-m3">
          <div class="card grey lighten-4">
            <div class="card-content black-text">
              <span class="card-title">Tambah Mahasiswa</span>
              <div class="row">
                <div class="input-field col s12">
                    <input type="text" name="npm" v-model="npm">
                    <label>NPM</label>
                </div>
               </div>
               <div class="row">
                <div class="input-field col s12">
                    <input type="text" name="nama" v-model="nama">
                    <label>Nama</label>
                </div>
               </div>
            </div>
            <div class="card-action">
                <button class="btn" @click="saveMahasiswa">Simpan</button>
              <router-link to="/mahasiswa" class="btn red">Kembali</router-link>
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
        nama: null,
        done: false
    }
  },
  methods: {
    saveMahasiswa () {
      if(!!this.npm && !!this.nama) {
        db.collection('mahasiswa').add({
          npm: this.npm,
          nama: this.nama,
          done: this.done
        }).then(doc => this.$router.push('/mahasiswa'))
        .catch(err => console.log(err))
      } else {
        alert('Isi Semua dong Boss!!')
      }
    }
  }
}
</script>

