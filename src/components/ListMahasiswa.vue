<template>
  <div id="lm">
    <div class="container">
        <div class="row">
          <div class="col s12">
            <br>
            <ul class="collection with-header">
                <li class="collection-header"><h4>Daftar Mahasiswa</h4></li>
                <li class="collection-item" v-for="mhs in mahasiswa" :key="mhs.id">
                  {{mhs.npm}} {{mhs.nama}}

                  <router-link :to="{name: 'view-mahasiswa', params: {npm: mhs.npm}}" class="secondary-content"><i class="fa fa-eye"></i></router-link>
                </li>
            </ul>
            <div class="fixed-action-btn">
              <router-link to="/new-mahasiswa" class="btn-floating btn-large red">
                <i class="fa fa-plus"></i>
              </router-link>
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
      mahasiswa: []
    }
  },
  created () {
    db.collection('mahasiswa').orderBy('npm').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          id: doc.id,
          npm: doc.data().npm,
          nama: doc.data().nama,
          done: doc.data().done
        }
        this.mahasiswa.push(data)
      })
    })
  }
}
</script>
