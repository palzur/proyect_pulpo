<template>
  <div>
    <section class="container">
      <b-collapse aria-id="contentIdForA11y2" class="panel" animation="slide">
        <p class="title">Login</p>
        <div>
          <button class="btn btn-google">Login con Google
          </button>
        </div>
        <div>
          <button class="btn btn-facebook">Login con Facebook</button>
        </div>

        <div class="card">
          <div class="panel-block">
            <section>
              <label name="Email" class="text">Email</label>
              <input class="inputText" type="email" value="" maxlength="30" />

              <label name="Contraseña" class="text">Contraseña</label>
              <input
                class="inputText"
                type="password"
                value=""
                maxlength="30"
              />
              <button class="btn btn-login">Login</button>
              <p class="text">¿Has olvidado tu contraseña?</p>
              <p class="text text2">¿Aún no tienes cuenta? Registrate</p>
            </section>
          </div>
        </div>
      </b-collapse>
    </section>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>


<style>
.container {
  width: 700px;
  padding: 60px;
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

.title {
  font-family: Raleway, sans-serif;
  color: rgb(67, 72, 80);
  padding-top: 20px;
  line-height: 21px;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.125;
}

.card {
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
</style>