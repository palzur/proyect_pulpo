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
    <main class="container">
      <section class="firstCard card">
        <h2>¿Crear un grupo y recibir dinero de forma automática cada mes?</h2>
        <p>
          ¡Sí, crea un grupo como administrador y cobra las cuotas de todos los
          miembros en tu cuenta de forma automática cada mes!
        </p>
      </section>
      <section>
        <article class="suscripciones">
          <h2>¿Qué plataforma quieres compartir?</h2>
          <div class="categorias">
            <template v-for="service in services">
              <router-link
                class="categoria"
                :to="{ name: 'CreateGroupServicePage', params:{name: service.name} }"
                :key="service.name"
              >
                <img :src="service.image" />
              </router-link>
            </template>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>

<script scoped>
import { services } from "@/modules/firebase";

export default {
  name: "CreateGroup",
  data() {
    return {
      services: [],
    };
  },
  firestore: {
    services: services,
  },
};
</script>

<style scoped>
img {
  width: 90px;
}
section h2 {
  font-weight: bold;
  margin-bottom: 14px;
}

.firstCard {
  width: 90%;
  margin: 30px auto;
  padding: 16px;
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

.categorias {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 18px;
  padding: 16px;
  width: 100%;
}

.categoria {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(245, 250, 255);
  box-shadow: rgb(0 0 0 / 20%) 1px 4px 6px;
  border-radius: 15px;
  text-align: center;
  height: 60px;
  width: 90%;
}

.suscripciones {
  margin-top: 75px;
}

@media (min-width: 600px) {
  .categoria {
    width: 48%;
  }
}

@media (min-width: 1024px) {
  .btn {
    width: 90px;
    margin-top: 8px;
  }
  .btn-cerrar {
    color: white;
    background: none;
    background: linear-gradient(rgb(0, 120, 255) 0%, rgb(0, 172, 255) 100%);
    padding: 8px;
  }

  .categoria {
    width: 30%;
  }
  img {
    width: 100px;
  }
  .suscripciones {
    margin-top: 85px;
  }
}
</style>
