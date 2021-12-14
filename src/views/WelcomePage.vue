<template>
  <div>
    <section class="fondo">
      <header>
        <b-navbar class="mainNavbar">
          <template #brand>
            <b-navbar-item
              class="logoPrincipal"
              tag="router-link"
              :to="{ path: '/' }"
            >
              ShareXpenses
            </b-navbar-item>
          </template>
          <template #end>
            <b-navbar-item tag="div">
              <div class="actions">
                <router-link to="/login"
                  ><button class="btn btn-login">Login</button></router-link
                >
                <router-link to="/register"
                  ><button class="btn btn-register">
                    Regístrate
                  </button></router-link
                >
              </div>
            </b-navbar-item>
          </template>
        </b-navbar>
      </header>
      <section class="first-section">
        <article>
          <h1>¡¡Ahorra en tus gastos!!</h1>
          <p>
            Ahorra compartiendo los gastos de suscripciones digitales con
            amigos.
          </p>
          <router-link to="/login"
            ><button class="btn btn-start">¡Comenzar!</button></router-link
          >
        </article>
      </section>
    </section>
    <section class="cardHeader">
      <card-service class="cardChild" />
      <card-service class="cardHeaderHidden cardChild" />
      <card-service class="cardHeaderHidden cardChild" />
    </section>

    <main>
      <section class="second-section">
        <article>
          <h1>Únete a un grupo compartido y ahorra hasta un 75%</h1>
          <p>
            Descubre los grupos compartidos y dspreocúpate uniéndote a un grupo
            donde compartirás gastos de forma legal y con pagos automatizados.
          </p>
        </article>
      </section>

      <section class="cardMain">
        <template v-for="group in groups">
          <card-service :group="group" class="cardChild" :key="group.id" />
        </template>
      </section>
    </main>
  </div>
</template>

<script>
import CardService from "../components/CardService.vue";
import { groups } from "@/modules/firebase";

export default {
  components: {
    CardService,
  },
  data() {
    return {
      groups: [],
    };
  },
  firestore: {
    groups: groups,
  },
};
</script>

<style scoped>
.cardHeader {
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
  padding: 20px;
  position: relative;
  top: -84px;
  margin-bottom: 10px;
}
.cardHeaderHidden {
  display: none;
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

.first-section {
  position: relative;
  color: white;
}

.first-section h1 {
  font-family: Readex Pro, sans-serif;
  font-weight: 900;
  font-size: 48px;
  line-height: 56px;
  color: rgb(245, 250, 255);
}
.first-section p {
  margin-top: 20px;
  font-size: 18px;
  padding: 5px;
}

.logoPrincipal {
  font-size: 17px;
  font-family: Readex Pro, sans-serif;
}
.fondo {
  border-bottom-right-radius: 0%;
  border-bottom-left-radius: 0%;
  min-height: 510px;
  background: linear-gradient(rgb(0, 120, 255) 0%, rgb(0, 172, 255) 100%);
  position: relative;
  width: 100%;
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
  background-color: rgb(0, 120, 255) !important;
  transition-duration: 2s;
  transition-timing-function: ease;
}
.is-active {
  transition-timing-function: ease;
}

.mainNavbar a {
  color: white;
  text-decoration: none;
}

.mainNavbar a:hover {
  color: #e2d1c0;
}

.btn-login {
  background: linear-gradient(rgb(0, 120, 255) 0%, rgb(0, 172, 255) 100%);
}

.btn-register {
  color: rgb(0, 120, 255);
  background-color: white;
  border: 4px solid rgb(0, 120, 255);
  padding: 8px;
}

.btn-start {
  margin-top: 50px;
  width: 60%;
  background: linear-gradient(
    180deg,
    rgba(253, 64, 133, 1) 0%,
    rgba(254, 106, 136, 1) 62%,
    rgba(255, 159, 141, 1) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(28, 214, 106, 1) 32%,
    rgba(62, 223, 132, 1) 60%,
    rgba(118, 247, 172, 1) 100%
  );
  height: 50px;
  font-size: 20px;
}

.navbar-burger {
  color: #ffffff !important;
}

.first-section {
  display: flex;
  /* margin-top: 120px; */
  margin-top: 60px;
}

.second-section {
  margin-bottom: 50px;
}

.second-section h1 {
  font-family: Readex Pro, sans-serif;
  font-weight: 700;
  font-size: 20px;
  padding: 25px;
  line-height: 30px;
}

.second-section p {
  font-size: 16px;
  padding: 6px;
}

@media (min-width: 600px) {
  .first-section {
    justify-content: center;
  }
  .first-section p {
    margin-top: 20px;
    font-size: 22px;
  }
  .cardChild {
    width: 43%;
  }
}

@media (min-width: 1024px) {
  .cardChild {
    width: 30%;
  }
  .cardHeaderHidden {
    display: block;
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
  .fondo {
    border-bottom-right-radius: 0%;
    border-bottom-left-radius: 0%;
    height: 500px;
    min-height: 560px;
    background: linear-gradient(rgb(0, 120, 255) 0%, rgb(0, 172, 255) 100%);
    position: relative;
    width: 100%;
    top: 0px;
    bottom: 0px;
    *left: -10%;
  }
  .btn-start {
    margin-top: 60px;
    width: 60%;
  }

  .first-section {
    justify-content: center;
  }
  .first-section p {
    margin-top: 20px;
    font-size: 22px;
  }
}

@media (min-width: 1900px) {
  .cardChild {
    width: 26%;
  }
}
</style>
