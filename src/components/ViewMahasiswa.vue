<template>
  <div id="view-mahasiswa" class="container">
      <ul class="collection with-header">
          <li class="collection-header"><h4>{{nama}} </h4></li>
          <li class="collection-item">NPM: {{npm}}</li>
          <li class="collection-item">
            <router-link to="/mahasiswa" class="btn">Back</router-link>
            <button class="btn red" @click="deleteMahasiswa">Delete</button>
          </li>
      </ul>
      <div class="fixed-action-btn">
        <router-link :to="{name: 'edit-mahasiswa', params: {npm: npm}}" class="btn-floating btn-large red">
          <i class="fa fa-pencil"></i>
        </router-link>
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
      loading: false
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
    deleteMahasiswa () {
      if (confirm('Yakin ingin Menghapus Data ini ?')) {
        db.collection('mahasiswa').where('npm', '==', this.$route.params.npm).get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete()
              alert('Berhasil Menghapus Data!')
              this.$router.push('/mahasiswa')
            })
          })
      }
    }
  }
}
</script>
