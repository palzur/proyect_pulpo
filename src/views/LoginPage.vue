<template>
  <div>
    <section class="container">
      <p class="title">Login</p>
      <div>
        <button class="btn btn-google" @click="loginGoogle()">
          <i class="customIcon fab fa-google"></i> Login con Google
        </button>
      </div>
      <div>
        <button class="btn btn-facebook">
          <i class="customIcon fab fa-facebook-f"></i> Login con Facebook
        </button>
      </div>

      <div class="form">
        <div>
          <form>
            <label name="Email" class="text">Email</label>
            <input
              class="inputText"
              type="email"
              v-model="user.email"
              maxlength="30"
            />

            <label name="Contraseña" class="text">Contraseña</label>
            <input
              class="inputText"
              type="password"
              v-model="user.password"
              maxlength="30"
            />
            <button class="btn btn-login" @click.prevent="login(user)">
              Login
            </button>
            <router-link to="/change/password"
              ><p class="text">¿Has olvidado tu contraseña?</p></router-link
            >
            <p class="text text2">
              ¿Aún no tienes cuenta?
              <router-link to="/register">Regístrate</router-link>
            </p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ToastProgrammatic as Toast } from "buefy";
import { Provider, Auth, users } from "@/modules/firebase";
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    async login(user) {
      if (this.validarDatos(user)) {
        try {
          const response = await Auth.signInWithEmailAndPassword(
            user.email,
            user.password
          );
          const userResponseEmail = users
            .where("email", "==", response.user.email)
            .get();
          const session = {
            token: response.user.Aa,
            email: response.user.email,
            name: "",
            surname: "",
            id: "",
          };

          userResponseEmail.then((snapshot) => {
            snapshot.docs.map((item) => {
              session.name = item.data().name;
              session.surname = item.data().surname;
              session.id = item.id;
              sessionStorage.setItem("session", JSON.stringify(session));
              this.goToHome();
            });
          });
        } catch (error) {
          if (error.code == "auth/user-not-found") {
            this.mostrarError("El usuario no existe.");
          } else if (error.code == "auth/wrong-password") {
            this.mostrarError("Contraseña incorrecta.");
          } else if (error.code == "auth/invalid-email") {
            this.mostrarError("El email debe estar bien formateado.");
          }
        }
      }
    },
    async loginGoogle() {
      const response = await Auth.signInWithPopup(Provider);
      const session = {
        token: response.user.Aa,
        email: response.additionalUserInfo.profile.email,
        name: response.additionalUserInfo.profile.given_name,
        surname: response.additionalUserInfo.profile.family_name,
      };
      sessionStorage.setItem("session", JSON.stringify(session));
      this.goToHome();
    },
    validarDatos(user) {
      if (user.email == "") {
        this.mostrarError("Debe introducir email.");
        return false;
      }
      if (user.password == "") {
        this.mostrarError("La contraseña es obligatoria.");
        return false;
      }
      return true;
    },
    mostrarError(mensaje) {
      Toast.open({
        duration: 5000,
        message: mensaje,
        position: "is-bottom",
        type: "is-danger",
      });
    },
    goToHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>


<style scoped>
.container {
  width: 100%;
  margin-top: 60px;
  padding: 0px;
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

.btn-google {
  background: rgb(217, 93, 93);
}

.btn-facebook {
  background: rgb(56, 88, 152);
}

.btn-login {
  background: rgb(62, 223, 132);
  width: 180px;
  margin-top: 20px;
}
.customIcon {
  margin-right: 8px;
}

.title {
  font-family: Raleway, sans-serif;
  color: rgb(67, 72, 80);
  padding-top: 20px;
  line-height: 21px;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.125;
}

.form {
  display: flex;
  justify-content: center;
}

.inputText {
  display: flex;
  width: 100%;
  outline: 0px;
  position: relative;
  appearance: none;
  transition: all 0.2s ease 0s;
  font-size: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2.5rem;
  border-radius: 26px;
  border-width: 3px;
  border-style: solid;
  background: rgb(232, 240, 254);
  border-color: rgb(226, 232, 240);
  width: 230px;
}

.text {
  margin-top: 20px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  color: rgb(159, 170, 187);
}

.text2 {
  margin-bottom: 20px;
}

@media (min-width: 1024px) {
  .container {
    width: 700px;
    border-radius: 6px;
    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
      0 0px 0 1px rgb(10 10 10 / 2%);
  }
}
</style>