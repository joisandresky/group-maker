<template>
<div id="kelompok" class="row">
  <div class="col s12 m4" v-for="(klp, index) in groups">
    <div class="card blue darken 1">
        <div class="card-content black-text">
        <span class="card-title">Kelompok {{index +1}}</span>
        <ul class="collection">
            <li class="collection-item" v-for="m in klp">{{ m.nama }}</li>
        </ul>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    groups(){
      return this.$store.getters.getKelompok
    },
    loaded(){
      return this.$store.getters.loaded
    }
  }
}
</script>

