<template>
  <div>
    <section class="container">
      
        <p class="title">Regístrate</p>
        <div>
          <button class="btn btn-google">
            <i class="customIcon fab fa-google"></i> Registro con Google
          </button>
        </div>
        <div>
          <button class="btn btn-facebook">
            <i class="customIcon fab fa-facebook-f"></i> Registro con Facebook
          </button>
        </div>
        <div>
          <button class="btn btn-email" @click="goToRegisterEmail()">
            <i class="customIcon far fa-envelope"></i> Registro con Email
          </button>
        </div>
        <p class="text">
          Al registrarme acepto los Términos y Condiciones de Pulpo
        </p>

    </section>
  </div>
</template>

<script>
export default {
  name: "Register",
  methods: {
    goToRegisterEmail() {
      this.$router.push({ name: "RegisterEmail" });
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

.btn-email {
  background: rgb(53, 56, 65);
}

.title {
  color: rgb(67, 72, 80);
  padding-top: 20px;
  line-height: 21px;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.125;
}

.customIcon {
  margin-right: 8px;
}

.card {
  display: flex;
  justify-content: center;
}

.text {
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  color: rgb(159, 170, 187);
  padding-bottom: 20px;
}

@media (min-width: 1024px) {
  .container {
    width: 700px;
    border-radius: 6px;
    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%);
  }
}
</style>