<template>
  <div v-if="group!==null">
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
      <section class="first-section">
        <h1>Genial {{session.name}}, estas a punto de unirte a un grupo de...</h1>
        <img
          class="image"
          :src="group.service.image"
          alt=""
        />
      </section>

      <section>
        <article class="article-first">
          <p><i class="iconos fas fa-user-shield"></i></p>
          <h2>¿Quién es su administrador?</h2>
          <p>{{group.admin.name}}</p>
        </article>
        <article class="article-second">
          <p><i class="iconos fas fa-users"></i></p>
          <h2>¿Quiénes son los integrantes?</h2>
          <ul>
            <li v-for="person in group.people" :key="person.name">{{person.name}}</li>
          </ul>
          <p v-if="group.people.length==0">Aún no existen integrantes en este grupo. ¡Se el primero!</p>
        </article>
        <article>
          <p><i class="iconos far fa-money-bill-alt"></i></p>
          <h2>¿Cuánto pagarás?</h2>
          <p>{{group.service.pricePerson}}€/mes</p>
        </article>
      </section>

      <section class="section-buttom">
        <h2>¿Estás listo para unirte a nosotros?</h2>
        <button class="btn btn-add" @click="addGroup()">Unirme</button>
      </section>
    </main>
  </div>
</template>

<script>
import { ToastProgrammatic as Toast } from "buefy";
import { groups } from "@/modules/firebase";
export default {
  name: "JoinGroupPage",
  data() {
    return {
      group: null,
      session: JSON.parse(sessionStorage.getItem("session")),
    };
  },
  //Obtengo el grupo a partir de su id, y guardo la info en el objeto group
  async created(){
    const response = await groups.doc(this.$route.params.id).get();
    this.group= response.data();
  },
  methods:{
     mostrarMensaje(mensaje) {
      Toast.open({
        duration: 6000,
        message: mensaje,
        position: "is-bottom",
        type: "is-success",
      });
    },

    //Implemento la funcionalidad para unirme al grupo
   async addGroup(){
      const user={
        id:this.session.id || "",
        name: this.session.name,
        surname: this.session.surname,
        email: this.session.email,
      }
      console.log(user);
      this.group.people.push(user);
      // console.log(this.group)

      //Guardo al nuevo usuario en la bbdd
      const result = await groups.doc(this.$route.params.id).set(this.group);

      this.$router.push({name: 'Home'});
      this.mostrarMensaje("¡Enhorabuena! Se ha unido al grupo.")
    }
  }
  
};
</script>

<style scoped>
.iconos {
  font-size: 30px;
}
section article {
  margin-top: 40px;
}

.section-buttom {
  margin-top: 80px;
}
section article p {
  font-size: 19px;
}
li {
  font-size: 19px;
}
.image {
  justify-content: center;
  margin: 15px auto;
  width: 43%;
}

h2 {
  font-size: 19px;
  padding: 0px 6px 6px 6px;
  font-weight: 600;
}

.first-section h1 {
  margin-top: 50px;
  padding: 30px;
  font-family: Readex Pro, sans-serif;
  font-weight: 700;
  font-size: 23px;
  padding: 20px;
  line-height: 30px;
}

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
.btn-add {
  margin-top: 10px;
  width: 55%;
  background: linear-gradient(
    180deg,
    rgba(28, 214, 106, 1) 32%,
    rgba(62, 223, 132, 1) 60%,
    rgba(118, 247, 172, 1) 100%
  );
  height: 50px;
  font-size: 18px;
  margin-bottom: 60px;
}

@media (min-width: 1024px) {
  .first-section h1 {
    font-size: 40px;
    line-height: 60px;
  }
  .image {
    width: 15%;
  }
  .btn-add {
    width: 20%;
  }
}
</style>
