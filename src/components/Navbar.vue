<template>
  <nav class="blue accent-3">
    <div class="nav-wrapper">
        <router-link to="/" class="brand-logo">GroupMaker TIB <i class="fa fa-angellist"></i></router-link>
        <a data-activates="main-menu" class="button-collapse">
            <i class="fa fa-bars"></i>
        </a>
        <ul class="right hide-on-small-only">
            <li><router-link to="/mahasiswa">Mahasiswa</router-link></li>
            <li><img src="logo.png" alt="Vue.js" id="logo"></li>
        </ul>
    </div>
  </nav>
</template>
