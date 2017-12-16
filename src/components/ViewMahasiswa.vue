<template>
  <div id="view-mahasiswa" class="container">
      <ul class="collection with-header">
          <li class="collection-header"><h4>{{nama}}</h4></li>
          <li class="collection-item">NPM: {{npm}}</li>
          <li class="collection-item">
            <router-link to="/mahasiswa" class="btn">Back</router-link>
            <button class="btn red">Edit</button>
          </li>
      </ul>
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
    }
  }
}
</script>

