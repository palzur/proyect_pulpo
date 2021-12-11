<template>
<div>
    <!-- <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>


     <nav class="navbar">
        <div class="navbar-brand">
            <a class="navbar-item">
                <img src="/static/img/buefy-logo.png" alt="Buefy">
            </a>
            <a class="navbar-item"><b-icon pack="fab" icon="github"></b-icon></a>
            <a class="navbar-item"><b-icon pack="fab" icon="twitter"></b-icon></a>
        </div>

        <div class="navbar-menu">
            <div class="navbar-end">
                <b-dropdown
                    v-model="navigation"
                    position="is-bottom-left"
                    append-to-body
                    aria-role="menu">
                    <template #trigger>
                        <a
                            class="navbar-item"
                            role="button">
                            <span>Menu</span>
                            <b-icon icon="menu-down"></b-icon>
                        </a>
                    </template>


                    <b-dropdown-item custom aria-role="menuitem">
                        Logged as <b>Rafael Beraldo</b>
                    </b-dropdown-item>
                    <hr class="dropdown-divider">
                    <b-dropdown-item has-link aria-role="menuitem">
                        <a href="https://google.com" target="_blank">
                            <b-icon icon="link"></b-icon>
                            Google (link)
                        </a>
                    </b-dropdown-item>
                    <b-dropdown-item value="home" aria-role="menuitem">
                        <b-icon icon="home"></b-icon>
                        Home
                    </b-dropdown-item>
                    <b-dropdown-item value="products" aria-role="menuitem">
                        <b-icon icon="cart"></b-icon>
                        Products
                    </b-dropdown-item>
                    <b-dropdown-item value="blog" disabled aria-role="menuitem">
                        <b-icon icon="book-open"></b-icon>
                        Blog
                    </b-dropdown-item>
                    <hr class="dropdown-divider" aria-role="menuitem">
                    <b-dropdown-item value="settings">
                        <b-icon icon="settings"></b-icon>
                        Settings
                    </b-dropdown-item>
                    <b-dropdown-item value="logout" aria-role="menuitem">
                        <b-icon icon="logout"></b-icon>
                        Logout
                    </b-dropdown-item>
                </b-dropdown>
            </div>
        </div>
    </nav> -->
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
