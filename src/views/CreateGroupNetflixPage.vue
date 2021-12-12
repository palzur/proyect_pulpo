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
            <router-link to="/logout"
              ><button class="btn btn-cerrar">
                Cerrar Session
              </button></router-link
            >
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>

    <div class="container">
      <img src="../assets/images/net-flix.png" alt="">
      <h1>¿Con cuántas personas quieres compartir tu cuenta de Netflix?</h1>
      <div class="marcador">
        <b-field>
          <b-numberinput
            type="is-info"
            icon-pack="fas"
            v-model="personas"
            min="1"
            max="3"
          ></b-numberinput>
        </b-field>
      </div>
      <p>Cobrarás <b>{{ personas * precioPorPersona }} €/mes</b></p>

      <div class="aviso">
        <i class="far fa-file-alt miIcon"></i>
        <h2>¿Con cuántas personas puedes compartir tu cuenta?</h2>
        <p>Legalmente solo puedes compartir hasta un número máximo indicado arriba, por lo que si ya tienes gente usando el servicio no se puede exceder el límite.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateGroupNetflixPage",
  data() {
    return {
      personas: 1,
      precioPorPersona: 4.50,
    };
  }
};
</script>

<style scoped>
.marcador {
  width: 100%;
  margin: 16px auto;
  padding: 30px;
}

.container {
  justify-content: center;
  margin-top: 60px;
}
.container img{
  width: 60%;
    margin-bottom: 16px;
}
.container h1{
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

.aviso{
  box-shadow: rgb(222 232 243) 0px 40px 50px -25px;
  border-radius: 40px;
  background: rgb(245, 250, 255);
  padding: 20px;
  padding: 12px;
  margin: 16px;
}

.aviso h2{
  font-weight: bold;
}
.miIcon{
  font-size: 30px;
  margin-bottom: 10px;
}
</style>
