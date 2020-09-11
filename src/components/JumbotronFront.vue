<template>
  <div class="jhm-jumbotron">
    <div class="row">
      <div class="jhm-jumbotron__motto column large-6 large-offset-3">
        <div class="jhm-motto__arrow jhm-motto__arrow--left"></div>
        <div class="jhm-motto__arrow jhm-motto__arrow--right"></div>
        <h1 class="h2 jhm-motto__text jhm-motto__text--jumbotron">
          <span class="secondary">Samen</span> werkt 't
        </h1>
      </div>
    </div>
    <div class="jhm-container row jhm-container--jumbotron middle-on-large">
      <div class="column large-6">
        <p class="jhm-jumbotron__lead jhm-lead">
          Haagse JobHulpMaatjes begeleiden Hagenaars die op zoek zijn naar een
          nieuwe baan of opleiding. Vrijwillig en voor iedereen die het nodig
          heeft.
        </p>
      </div>
      <div class="column medium-6 large-3 large-order-1 first-on-large">
        <JhmButton to="/ik-wil-hulp/" type="link" size="large"
          >Ik wil hulp</JhmButton
        >
      </div>
      <div
        class="column medium-6 large-3 large-order-1"
        id="ik-word-maatje__container"
      >
        <JhmButton
          to="/ik-word-maatje/"
          type="link"
          size="large"
          styling="white"
          >Ik word maatje</JhmButton
        >
      </div>
    </div>
    <div class="jhm-jumbotron__panorama">
      <div class="row jhm-container">
        <div class="column medium-6 large-4">
          <p class="jhm-blurb__item">
            Een maatje aan je zijde in de zoektocht op de arbeidsmarkt. Iemand
            aan wie je jouw verhaal kwijt kunt, die je helpt bij het zoeken naar
            een nieuwe baan.
          </p>
        </div>
        <div class="column medium-6 large-4 large-offset-4">
          <p class="jhm-blurb__item">
            Werk zoeken kan lastig zijn. Dan kan het helpen als er iemand is die
            je een duwtje in de rug geeft, die je helpt ontdekken wat voor werk
            echt bij jou past.
          </p>
        </div>
      </div>
      <div class="jhm-blurb__motto">
        <span class="jhm-motto__text jhm-motto__text--blurb">
          <span class="secondary">Samen</span> werkt 't
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.jhm-jumbotron {
  background-color: $secondary-color;
  color: white;
}

.jhm-jumbotron__motto {
  display: none;
  position: relative;
  background-color: $secondary-color;

  @include bp(md) {
    display: block;
    padding: 0 !important;
  }
}

.jhm-motto__arrow {
  position: absolute;
  top: 0;
  height: emRhythm(1);
  border-top: 7rem solid transparent;
}

.jhm-motto__arrow--left {
  border-left: 6rem solid $secondary-color;
  left: 0;
}

.jhm-motto__arrow--right {
  border-right: 6rem solid $secondary-color;
  right: 0;
}

.jhm-motto__text--jumbotron {
  text-align: center;
  padding-bottom: emRhythm(1) !important;
  padding-top: emRhythm(1) !important;
  text-transform: lowercase;
  background-color: white;
}

.jhm-container--jumbotron {
  padding-top: emRhythm(6) !important;
  padding-bottom: emRhythm(6) !important;

  @include bp(lg) {
    padding-top: emRhythm(10) !important;
    padding-bottom: emRhythm(10) !important;
  }
}

.jhm-jumbotron__lead {
  text-align: center;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;

  @include bp(lg) {
    margin-bottom: 0;
  }
}

#ik-word-maatje__container {
  @include bp(md) {
    display: flex;
    .jhm-button {
      margin-left: auto !important;
    }
  }
}

.jhm-jumbotron__cta-container {
  @include bp(md) {
    display: flex;
    justify-content: space-between !important;
  }
}

.jhm-jumbotron__panorama {
  padding: emRhythm(4) 0;
  background-image: url("../assets/jumbotron_c053b2f9.jpg");
  background-size: cover;
  background-position: center top;

  @include bp(md) {
    padding-bottom: emRhythm(25);
  }

  @include bp(lg) {
    padding: emRhythm(20) 0;
  }
}

.jhm-blurb__container {
  @include bp(md) {
    display: flex;
    justify-content: space-between;
  }
}

.jhm-blurb__item {
  color: black;
  padding: emRhythm(4);
  background-color: rgba(white, 0.9);

  @include bp(md) {
    margin-bottom: 0;
  }
}

.jhm-blurb__motto {
  display: block;
  text-align: center;
  font-weight: bold;
  color: $primary-color;
  margin: 0 auto;
  text-transform: lowercase;

  @include bp(md) {
    display: none;
  }
}

.jhm-motto__text--blurb {
  background-color: white;
  padding: emRhythm(1) emRhythm(2);
}
</style>

<script>
import JhmButton from "@/components/JhmButton.vue";
export default {
  name: "JumbotronFront",
  components: {
    JhmButton
  }
};
</script>
