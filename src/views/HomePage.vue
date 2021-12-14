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
              <button class="btn btn-crear-grupo" @click="crearGrupo()">
                Crear grupo
              </button>
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

    <main class="main">
      <section class="section">
        <h1>Hola {{ session.name }}, ¿qué tal estás?</h1>
        <p>¿Quiéres unirte hoy a algo especial?</p>
        <p>¿¡Es tu momento!?</p>
        <p><i class="fas fa-search icon-search"></i></p>
        <router-link to="/groups/page"
          ><button class="btn btn-serch-more-groups">
            Buscar grupos
          </button></router-link
        >
      </section>

      <section class="firstTittle" v-if="soyAdminGrupos()">
        <h1>Estos son tus grupos creados...</h1>
      </section>
      <section class="cardMain">
        <template v-for="group in groups">
          <card-service
            v-if="session.email == group.admin.email"
            :join="false"
            :group="group"
            class="cardChild"
            :key="group.id"
          />
        </template>
      </section>

      <section class="second-section" v-if="pertenezcoGrupos(group)">
        <h1>Estos son los grupos de los que eres participante...</h1>
        <section class="cardMain">
          <template v-for="group in groups">
            <card-service
              v-if="pertenezcoGrupo(group)"
              :join="false"
              :group="group"
              class="cardChild"
              :key="group.id"
            />
          </template>
        </section>
      </section>
    </main>
  </div>
</template>

<script>
import CardService from "../components/CardService.vue";
import { groups } from "@/modules/firebase";

export default {
  name: "Home",
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
    crearGrupo() {
      this.$router.push({ name: "CreateGroup" });
    },
    pertenezcoGrupo(group) {
      const email = this.session.email;

      if (group.admin.email == email) {
        return false;
      }
      return group.people.some(function (person) {
        return person.email == email;
      });
    },
    pertenezcoGrupos() {
      const email = this.session.email;
      if (this.groups == null) {
        return false;
      }
      return this.groups.some(function (group) {
        if (group.admin.email == email) {
          return false;
        }
        return group.people.some(function (person) {
          return person.email == email;
        });
      });
    },
    soyAdminGrupos() {
      const email = this.session.email;
      if (this.groups == null) {
        return false;
      }
      return this.groups.some(function (group) {
        return group.admin.email == email;
      });
    },
  },
};
</script>

<style scoped>
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

.btn-serch-more-groups {
  margin-top: 20px;
  width: 60%;
  background: linear-gradient(
    180deg,
    rgba(253, 64, 133, 1) 0%,
    rgba(254, 106, 136, 1) 62%,
    rgba(255, 159, 141, 1) 100%
  );
  height: 50px;
  font-size: 20px;
}
.icon-search {
  font-size: 80px;
}

.second-section h1 {
  font-family: Readex Pro, sans-serif;
  font-weight: 700;
  font-size: 23px;
  padding: 20px;
  line-height: 30px;
}
.section h1 {
  font-family: Readex Pro, sans-serif;
  font-weight: 700;
  font-size: 25px;
  padding: 20px;
  line-height: 30px;
}
.firstTittle {
  font-family: Readex Pro, sans-serif;
  font-weight: 700;
  font-size: 23px;
  padding: 20px;
  line-height: 30px;
  margin: 10px;
}

.section p {
  font-size: 19px;
  padding: 6px;
}
main {
  background-color: white;
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

.logoPrincipal {
  font-size: 17px;
  font-family: Readex Pro, sans-serif;
  font-weight: bold;
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
  color: #0078ff;
  font-family: "Readex Pro", sans-serif;
  font-family: "Roboto", sans-serif;
}

.btn-crear-grupo {
  background: linear-gradient(rgb(0, 120, 255) 0%, rgb(0, 172, 255) 100%);
  color: white;
}

.btn-cerrar {
  color: rgb(0, 120, 255);
  background-color: white;
  border: 4px solid rgb(0, 120, 255);
  padding: 8px;
}

.btn-serch-more-groups {
  margin-top: 20px;
  width: 80%;
  background: linear-gradient(
    180deg,
    rgba(253, 64, 133, 1) 0%,
    rgba(254, 106, 136, 1) 62%,
    rgba(255, 159, 141, 1) 100%
  );
  height: 50px;
  font-size: 18px;
}
.navbar-burger {
  color: #ffffff !important;
}

.first-section {
  display: flex;
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

  .btn-serch-more-groups {
    margin-top: 50px;
    width: 30%;
    background: linear-gradient(
      180deg,
      rgba(253, 64, 133, 1) 0%,
      rgba(254, 106, 136, 1) 62%,
      rgba(255, 159, 141, 1) 100%
    );
    height: 50px;
    font-size: 20px;
  }
}

@media (min-width: 1900px) {
  .cardChild {
    width: 26%;
  }
  .btn-serch-more-groups {
    margin-top: 50px;
    width: 27%;
    background: linear-gradient(
      180deg,
      rgba(253, 64, 133, 1) 0%,
      rgba(254, 106, 136, 1) 62%,
      rgba(255, 159, 141, 1) 100%
    );

    height: 50px;
    font-size: 20px;
  }
}
</style>
