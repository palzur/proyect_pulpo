<template>
  <div>
    <section class="container">
      <b-collapse aria-id="contentIdForA11y2" class="panel" animation="slide">
        <p class="title">Regístrate</p>
        <div>
          <button class="btn btn-google">Registro con Google</button>
        </div>
        <div>
          <button class="btn btn-facebook">Registro con Facebook</button>
        </div>
        <div>
          <button class="btn btn-email" @click="goToRegisterEmail()">Registro con Email</button>
        </div>
        <p class="text">
          Al registrarme acepto los Términos y Condiciones de Pulpo
        </p>
      </b-collapse>
    </section>
  </div>
</template>

<script>
export default {
  name: "Register",
  methods:{
    goToRegisterEmail(){
      this.$router.push({name: "RegisterEmail"});
    }
  }
};
</script>


<style>
.container {
  width: 700px;
  padding: 60px;
}

.btn {
  font-family: inherit;
  text-align:center;
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

.btn-email{
  background: rgb(53, 56, 65);
}

.title {
  font-family: Raleway, sans-serif;
  color: rgb(67, 72, 80);
  padding-top: 20px;
  line-height: 21px;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.125;
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
</style>