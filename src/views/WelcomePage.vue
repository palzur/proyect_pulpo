<template>
  <div>
    <section class="fondo"></section>
    <header>
      <b-navbar class="mainNavbar">
        <template #brand>
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
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
        <p>Ahorra en tus gastos!!</p>
      </article>
    </section>
    <main></main>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.first-section {
  position: relative;
  color: white;
}

.first-section p {
  font-family: Raleway, sans-serif;
  font-weight: 900;
  font-size: 48px;
  line-height: 56px;
  color: rgb(245, 250, 255);
}

.fondo {
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  height: 660px;
  min-height: 660px;
  background: linear-gradient(rgb(0, 120, 255) 0%, rgb(0, 172, 255) 100%);
  position: fixed;
  width: 120%;
  top: 0px;
  bottom: 0px;
  left: -10%;
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
.navbar-burger {
  color: #ffffff !important;
}

.first-section {
  display: flex;
}

@media (min-width: 1024px) {
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
</style>
