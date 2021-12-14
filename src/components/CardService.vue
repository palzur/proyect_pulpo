<template>
  <div>
    <article class="cardService card" v-if="group != null">
      <header>
        <img :src="group.service.image" class="imageCard" />
      </header>
      <div class="contenidoCard">
        <section class="contenido">
          <p>
            <i class="iconos fas fa-user-shield"></i> Grupo compartido de
            <b>{{ group.admin.name }}</b>
          </p>
          <p class="element">
            <i class="fas fa-money-check"></i> Precio mensual por usuario:
            <b>{{ group.service.pricePerson }}€</b>
          </p>
          <p class="element">
            <i class="fas fa-user-friends"></i> Sitios disponibles:
            {{ sitesAvailables }}
          </p>
        </section>
      </div>
      <footer>
        <router-link
          v-if="join"
          :to="{ name: 'JoinGroupPage', params: { id: group['.key'] } }"
          ><button class="btn btn-unirt">Unirse</button></router-link
        >
      </footer>
    </article>
  </div>
</template>

<script>
export default {
  name: "CardService",
  props: {
    group: Object,
    join: Boolean,
  },
  data() {
    return {};
  },
  computed: {
    sitesAvailables: function () {
      return this.group.people !== null
        ? this.group.numberPerson - this.group.people.length
        : this.group.numberPerson;
    },
  },
};
</script>

<style scoped>
.element {
  margin-top: 8px;
}
.imageCard {
  height: 50px;
}
.cardService {
  width: 100%;
  margin: 20px auto 0px auto;
  border-radius: 14px;
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;
  background-color: rgb(245, 250, 255);
}

.contenidoCard {
  display: flex;
  padding: 8px;
  justify-content: center;
  gap: 10px, 30px;
}

.contenido p {
  font-size: 17px;
}
section {
  padding: 10px;
}
header {
  margin-bottom: 8px;
  background-color: #b13190;
  background-color: #f3c4a0;
  background-color: #c3e3fd;
  padding: 10px;
  color: white;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}
footer {
  display: flex;
  margin-top: 10px;
  justify-content: space-around;
  padding: 10px;
}
.btn {
  font-family: inherit;
  text-align: center;
  padding: 12px 12px;
  color: rgb(245, 250, 255);
  transition: all 250ms ease 0s;
  position: relative;
  line-height: 1.2;
  border-radius: 26px;
  font-weight: 900;
  border: none;
  min-width: 100px;
  width: 200px;
  margin-bottom: 15px;
}

.btn-unirt {
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
  height: 40px;
  font-size: 16px;
}
</style>
