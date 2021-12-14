<template>
  <div>
    <header>
      <b-navbar class="mainNavbar card">
        <template #brand>
          <b-navbar-item
            class="logoPrincipal"
            tag="router-link"
            :to="{ path: '/home' }"
          >
            ShareXpenses
          </b-navbar-item>
        </template>
        <template #end>
          <b-navbar-item tag="div">
            <div class="actions">
              <router-link to="/home"
                ><button class="btn btn-volver">Volver</button></router-link
              >
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
    <main>
      <section class="section">
        <h1>
          Bienvenida {{ session.name }}, estos son los grupos disponibles a los
          que te puedes unir.
        </h1>
        <p>¿Te sumas a nosotros?</p>
        <p><i class="fas fa-bomb icon-bomb"></i></p>
      </section>
      <section class="cardMain">
        <template v-for="group in groups">
          <card-service v-if="haySitioDisponible(group) && pertenezcoGrupo(group)"
            :join="true"
            :group="group"
            class="cardChild"
            :key="group.id"
          />
        </template>
      </section>
    </main>
  </div>
</template>

<script>
import CardService from "../components/CardService.vue";
import { groups } from "@/modules/firebase";

export default {
  name: "GroupsPage",
  components: {
    CardService,
  },
  data() {
    return {
      groups: [],
      session: JSON.parse(sessionStorage.getItem("session")),
    };
  },
  firestore: {
    groups: groups,
  },
  methods: {
    pertenezcoGrupo(group) {
      const email = this.session.email;
      if (group.admin.email == email) {
        return false;
      }
      return !group.people.some(function (person) {
        return person.email == email;
      });
    },
    haySitioDisponible(group){
      return group.numberPerson - group.people.length > 0;
    }
  },
};
</script>


<style scoped>
.mainNavbar {
  transition-duration: 2s;
  transition-timing-function: ease;
}
.icon-bomb {
  font-size: 80px;
}

.logoPrincipal {
  font-size: 17px;
  font-family: Readex Pro, sans-serif;
  font-weight: bold;
}
.mainNavbar a {
  color: #0078ff;
  font-family: "Roboto", sans-serif;
}
.section h1 {
  font-family: Readex Pro, sans-serif;
  font-weight: 700;
  font-size: 23px;
  padding: 20px;
  line-height: 30px;
}

.section p {
  font-size: 19px;
  padding: 6px;
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
.btn-cerrar {
  color: rgb(0, 120, 255);
  background-color: white;
  border: 4px solid rgb(0, 120, 255);
  padding: 8px;
}
.btn-volver {
  background: linear-gradient(rgb(0, 120, 255) 0%, rgb(0, 172, 255) 100%);
  color: white;
}
.cardChild {
  width: 100%;
}

.cardMain {
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
  padding: 20px;
}
@media (min-width: 1024px) {
  .cardChild {
    width: 30%;
  }
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

@media (min-width: 1900px) {
  .cardChild {
    width: 26%;
  }
}
</style>
