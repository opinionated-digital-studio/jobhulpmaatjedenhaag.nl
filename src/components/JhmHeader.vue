<template>
  <header class="jhm-header">
    <JhmSkiplink />
    <div class="jhm-container row">
      <nav class="column jhm-header__nav" aria-label="Hoofdmenu" role="navigation">
        <ul class="jhm-nav__menu">
          <div class="jhm-menu__items jhm-menu__items--left">
            <li class="jhm-menu__item jhm-menu__item--logo">
              <g-link
                class="jhm-menu__link jhm-menu__link--logo"
                to="/"
                aria-label="Klik hier om naar de startpagina te gaan"
              >
                <img
                  id="jhm-logo"
                  :alt="$static.metadata.siteName"
                  src="../assets/jhm_dh_logo.png"
                />
              </g-link>
            </li>
          </div>
          <button
            class="jhm-menu__hamburger"
            aria-label="Hoofdmenu weergaven"
            @click="openMenu"
          >
            <font-awesome class="fa-icon" :icon="['fas', 'bars']" size="3x" />
          </button>
          <div
            class="jhm-menu__collapsible"
            v-bind:class="{ 'jhm-menu__collapsible--is-closed': !isActive }"
          >
            <li
              class="jhm-menu__item"
              v-for="edge in $static.main.edges"
              :key="edge.node.id"
            >
              <g-link class="jhm-menu__link" v-bind:to="edge.node.path">
                {{ edge.node.title }}</g-link
              >
            </li>
            <li class="jhm-menu__item">
              <g-link class="jhm-menu__link" to="/contact">Contact</g-link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
.jhm-header {
  position: relative;
  padding: emRhythm(2) 0;
}

#jhm-logo {
  width: 135px;
  margin: auto 0;

  @include bp(lg) {
    width: 200px;
    transform: translateX(-3rem);
  }
}

.jhm-menu__link {
  display: inline-block;
  padding: emRhythm(1) 0;
  text-decoration: none;
  color: $primary-color;
}

.jhm-menu__link--logo {
  display: flex;
  flex-direction: column;
}

.jhm-menu__link--logo:focus #jhm-logo {
  background-color: yellow;
}

.jhm-nav__menu {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.jhm-menu__hamburger {
  display: block;
  background: none;
  border: none;

  @include bp(lg) {
    display: none;
  }
}

.fa-icon {
  color: $primary-color;
}

.jhm-menu__collapsible {
  flex-basis: 100%;
  flex-grow: 1;
}

.jhm-menu__collapsible--is-closed {
  display: none;

  @include bp(lg) {
    display: block;
    flex-basis: inherit;
    flex-grow: 0;
    display: flex;
    margin: auto 0;
  }
}

.jhm-menu__item {
  @include bp(lg) {
    padding: emRhythm(2) emRhythm(3);
    position: relative;

    &:last-child {
      padding-right: 0;
    }

    &:not(:first-child) {
      &::before {
        content: "";
        position: absolute;
        left: -1px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
        height: 1rem;
        width: 2px;
        background-color: $secondary-color;
      }
    }
  }
}

.jhm-menu__item--logo {
  padding: 0;
}

.jhm-menu__hamburger {
  cursor: pointer;
}
</style>

<script>
import JhmSkiplink from "~/components/JhmSkiplink.vue";
export default {
  name: "Header",
  components: {
    JhmSkiplink
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    openMenu() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<static-query>
query {
  metadata {
    siteName
    siteUrl
 }
  main: allMain(sortBy: "order", order: ASC){
		edges{
      node{
        id
        title
        path
        content
      }
    }
  }
}
</static-query>
