<template>
<div>
    <section class="container">
      <p class="title">Reestablecer contraseña</p>
      <div class="form">
        <div class="panel-block">
          <form>
            <label name="email" class="text">Email</label>
            <input
              class="inputText"
              type="emial"
              v-model="user.email"
              maxlength="30"
            />
            <label name="password" class="text">Contraseña</label>
            <input
              class="inputText"
              type="password"
              v-model="user.password"
              maxlength="30"
            />
            <label name="confirmPassword" class="text"
              >Repite la contraseña</label
            >
            <input
              class="inputText"
              type="password"
              v-model="user.confirmPassword"
              maxlength="30"
            />
            <button class="btn3-1">
              Reestablecer
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

  <script>
  export default{
    name:'ChangePassword',
    data(){
      return{}
    }
  }

  </script>
  
  <style scoped>
  .container {
  width: 100%;
  margin-top: 60px;
  padding: 0px;
}

.btn3-1 {
  display: flex;
  justify-content: center;
  height: 42px;
  font-family: inherit;
  padding: 12px 24px;
  background: rgb(62, 223, 132);
  color: rgb(245, 250, 255);
  display: inline-flex;
  appearance: none;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  transition: all 250ms ease 0s;
  user-select: none;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  outline: none;
  width: 180px;
  line-height: 1.2;
  border-radius: 26px;
  font-weight: 900;
  border: none;
  margin-top: 28px;
  margin-bottom: 22px;
  font-size: 16px;
  height: 42px;
  min-width: 160px;
}
.title {
  font-family: Raleway, sans-serif;
  color: rgb(67, 72, 80);
  padding-top: 20px;
  line-height: 21px;
  font-size: 1.5rem;
  font-weight: 00;
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
  border-image: initial;
  border-color: inherit;
  background: inherit;
  background: rgb(255, 255, 255);
  border-color: rgb(226, 232, 240);
  width: 300px;
}

.text {
  margin-top: 20px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  color: rgb(159, 170, 187);
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