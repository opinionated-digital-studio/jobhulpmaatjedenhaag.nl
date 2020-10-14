<template>
  <header class="jhm-header">
    <JhmSkiplink />
    <div class="jhm-container row">
      <nav
        class="column jhm-header__nav"
        aria-label="Hoofdmenu"
        role="navigation"
      >
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
            <li class="jhm-menu__item">
              <g-link class="jhm-menu__link" to="/">Home</g-link>
            </li>

            <li
              class="jhm-menu__item jhm-dropdown__container"
              aria-haspopup="true"
            >
              <g-link class="jhm-menu__link" to="/over-ons/"
                >Over ons
                <font-awesome class="fa-icon jhm-link__caret" :icon="['fas', 'caret-down']"
              /></g-link>
              <ul class="jhm-menu__dropdown" aria-label="submenu">
                <li class="jhm-dropdown__item">
                  <g-link to="/over-ons/bestuur/">Bestuur</g-link>
                </li>
              </ul>
            </li>

            <li class="jhm-menu__item">
              <g-link class="jhm-menu__link" to="/de-maatjes/"
                >De maatjes</g-link
              >
            </li>

            <li class="jhm-menu__item">
              <g-link class="jhm-menu__link" to="/verhalen/">Verhalen</g-link>
            </li>

            <li class="jhm-menu__item">
              <g-link class="jhm-menu__link" to="/contact/">Contact</g-link>
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
    padding: emRhythm(2) emRhythm(5);
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

.jhm-link__caret {
  margin-left: emRhythm(1);
}

.jhm-menu__dropdown {
  position: relative;
  left: 0;
  width: 100%;
  list-style: none;
  background-color: $secondary-color;
  margin-top: emRhythm(1);
  margin-bottom: emRhythm(1);

  @include bp("lg") {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    display: none;
  }
}

.jhm-menu__dropdown::before {
  content: "";
  position: absolute;
  top: -10px;
  left: emRhythm(2);
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid $secondary-color;
  z-index: -1;

  @include bp("lg") {
    left: 50%;
    transform: translateX(-50%);
  }
}

.jhm-dropdown__container:hover > .jhm-menu__dropdown,
.jhm-dropdown__container:focus-within > .jhm-menu__dropdown,
.jhm-menu__dropdown:hover {
  visibility: visible;
  opacity: 1;
  display: block;
}

.jhm-dropdown__item {
  clear: both;
}

.jhm-dropdown__item a {
  text-decoration: none;
  display: block;
  padding: emRhythm(2) emRhythm(3);
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
