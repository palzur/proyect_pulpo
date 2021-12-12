<template>
  <div>
    <b-navbar class="mainNavbar card">
        <template #brand>
          <b-navbar-item tag="router-link" :to="{ path: '/home' }">
            ShareXpenses
          </b-navbar-item>
        </template>
        <template #end>
          <b-navbar-item tag="div">
            <div class="actions">
              <button class="btn btn-crear-grupo" @click="crearGrupo()">Crear grupo</button>
              <router-link to="/logout"><button class="btn btn-cerrar">Cerrar Session</button></router-link>
            </div>
          </b-navbar-item>
        </template>
      </b-navbar>
  </div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return{

  };
},
  methods: {
    crearGrupo(){
      this.$router.push({name: "CreateGroup"});
    }
  }
}
</script>

<style scoped>
main {
  background-color: white;
}


.btn {
  font-family: inherit;
  text-align: center;
  padding: 12px 24px;
  color: rgb(245, 250, 255);
  transition: all 250ms ease 0s;
  position: relative;
  width: 300px;
  line-height: 1.2;
  border-radius: 26px;
  font-weight: 900;
  border: none;
  font-size: 16px;
  height: 42px;
  min-width: 160px;
  margin-bottom: 15px;
}

.mainNavbar {
  transition-duration: 2s;
  transition-timing-function: ease;
}
.is-active {
  transition-timing-function: ease;
}

.mainNavbar a {
  color: #0078FF;
  font-family: 'Readex Pro', sans-serif;
  font-family: 'Roboto', sans-serif;
}

.btn-crear-grupo {
  background: linear-gradient(rgb(0, 120, 255) 0%, rgb(0, 172, 255) 100%);
  color:white;
}

.btn-cerrar{
  color: rgb(0, 120, 255);
  background-color: white;
  border: 4px solid rgb(0, 120, 255);
  padding: 8px;
}
.navbar-burger{
  color: #ffffff !important;
}

.first-section{
  display: flex;
}


@media (min-width: 1024px) {
  .btn {
    width: 90px;
    margin-top: 8px;
  }
  .btn-login {
    color: rgb(0, 120, 255);
    background: none;
    background-color: white;
    border: 4px solid rgb(0, 120, 255);
    padding: 8px;
  }
}



</style>
