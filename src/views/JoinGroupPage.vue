<template>
<div>
  <header>
    <b-navbar class="mainNavbar card">
      <template #brand>
        <b-navbar-item class="logoPrincipal" tag="router-link" :to="{ path: '/home' }">
          ShareXpenses
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item tag="div">
          <div class="actions">
            <router-link to="/logout"
              ><button class="btn btn-cerrar">
                Cerrar Session
              </button></router-link
            >
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </header>
    <p>Hola desde la página de unirse al grupo</p>
</div>
  
</template>

<script>

</script>

<style scoped>
.logoPrincipal {
  font-size: 17px;
  font-family: Readex Pro, sans-serif;
  font-weight: bold;
}
.mainNavbar {
  transition-duration: 2s;
  transition-timing-function: ease;
}
.mainNavbar a {
  color: #0078ff;
  font-family: "Readex Pro", sans-serif;
  font-family: "Roboto", sans-serif;
}

.btn {
  font-family: inherit;
  text-align: center;
  padding: 12px 24px;
  color: rgb(245, 250, 255);
  transition: all 250ms ease 0s;
  position: relative;
  width: 200px;
  line-height: 1.2;
  border-radius: 26px;
  font-weight: 900;
  border: none;
  font-size: 16px;
  height: 42px;
  min-width: 160px;
  margin-top: 5px;
  margin-bottom: 10px;
}
.btn-cerrar {
  color: white;
  background: none;
  background: linear-gradient(rgb(0, 120, 255) 0%, rgb(0, 172, 255) 100%);
  border: 4px solid rgb(0, 120, 255);
  padding: 8px;
}

</style>
