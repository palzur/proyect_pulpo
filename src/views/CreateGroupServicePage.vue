<template>
  <div v-if="currentService != null">
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
      <img class="imagenSuscripcion" :src="currentService.image" alt="" />
      <h1>¿Con cuántas personas quieres compartir tu cuenta de Netflix?</h1>
      <div class="marcador">
        <b-field>
          <b-numberinput
            type="is-info"
            icon-pack="fas"
            v-model="qtyPerson"
            :max="currentService.maxPerson"
            min="1"
          ></b-numberinput>
        </b-field>
      </div>
      <p>
        Cobrarás <b>{{ currentService.pricePerson * qtyPerson }} €/mes</b>
      </p>
      <button class="btn btn-create-group" @click="createGroup()">
        Crear grupo
      </button>
      <div class="aviso">
        <i class="far fa-file-alt miIcon"></i>
        <h2>¿Con cuántas personas puedes compartir tu cuenta?</h2>
        <p>
          Legalmente solo puedes compartir hasta un número máximo indicado
          arriba, por lo que si ya tienes gente usando el servicio no se puede
          exceder el límite.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { services } from "@/modules/firebase";
import { groups } from "@/modules/firebase";

export default {
  name: "CreateGroupServicePage",
  data() {
    return {
      currentService: null,
      qtyPerson: 1,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const name = this.$route.params.name;
      const service = services.where("name", "==", name).get();
      service.then((snapshot) => {
        snapshot.docs.map((item) => (this.currentService = item.data()));
      });
    },
    obtenerUsuarioSesion() {
      const session = JSON.parse(sessionStorage.getItem("session"));
      return session;
    },
    async createGroup() {
      const session = this.obtenerUsuarioSesion();
      const group = {
        numberPerson: this.qtyPerson,
        service: this.currentService,
        people: [],
        admin: {
          name: session.name,
          surname: session.surname,
          email: session.email,
        },
      };

      const result = await groups.add(group);
      this.$router.push({ path: "/home" });
    },
  },
};
</script>

<style scoped>
.marcador {
  width: 100%;
  margin: 0px auto;
  padding: 30px;
}

.container {
  justify-content: center;
  margin-top: 60px;
}
.container img {
  width: 60%;
  margin-bottom: 16px;
}
.container h1 {
  font-weight: bold;
  padding: 13px;
  font-size: 17px;
}

.container p {
  font-size: 18px;
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
.btn-create-group {
  margin-top: 20px;
  margin-bottom: 30px;
  width: 60%;
  background: linear-gradient(
    180deg,
    rgba(28, 214, 106, 1) 32%,
    rgba(62, 223, 132, 1) 60%,
    rgba(118, 247, 172, 1) 100%
  );
  height: 50px;
  font-size: 20px;
}

.aviso {
  box-shadow: rgb(222 232 243) 0px 40px 50px -25px;
  border-radius: 40px;
  background: rgb(245, 250, 255);
  padding: 20px;
  padding: 12px;
  margin: 16px;
}

.aviso h2 {
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 10px;
}
.miIcon {
  font-size: 30px;
  margin-bottom: 10px;
}

@media (min-width: 770px) {
  .btn-create-group {
    width: 30%;
  }
   .marcador {
    width: 60%;
  }
  .container img {
    width: 45%;
  }
 
}
@media (min-width: 1200px) {

  .container img {
    width: 30%;
  }
 
}


@media (min-width: 1500px) {
  .btn-create-group {
    width: 30%;
  }
  .marcador {
    width: 50%;
  }
  .container img {
    width: 40%;
  }
}
</style>
