<template>
  <div class="jhm-jumbotron">
    <div class="jhm-jumbotron__container">
      <p class="jhm-jumbotron__lead jhm-lead">
        Haagse JobHulpMaatjes begeleiden Hagenaars die op zoek zijn naar een
        nieuwe baan of opleiding. Vrijwillig en voor iedereen die het nodig
        heeft.
      </p>
      <Button to="/ik-wil-hulp/" type="link" size="large">Ik wil hulp</Button>
      <Button to="/ik-word-maatje/" type="link" size="large" styling="white"
        >Ik word maatje</Button
      >
    </div>
    <div class="jhm-jumbotron__panorama">
      <div class="jhm-container">
        <div class="jhm-jumbotron__blurb">
          <p class="jhm-blurb__item">
            Een maatje aan je zijde in de zoektocht op de arbeidsmarkt. Iemand
            aan wie je jouw verhaal kwijt kunt, die je helpt bij het zoeken naar
            een nieuwe baan.
          </p>
          <p class="jhm-blurb__item">
            Werk zoeken kan lastig zijn. Dan kan het helpen als er iemand is die
            je een duwtje in de rug geeft, die je helpt ontdekken wat voor werk
            echt bij jou past.
          </p>
          <div class="jhm-blurb__motto">
            <span class="jhm-motto__text">
              <span class="secondary">Samen</span> werkt 't
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.jhm-jumbotron {
  background-color: $secondary-color;
}

.jhm-jumbotron__container {
  padding: emRhythm(6) emRhythm(4);
  color: white;
}

.jhm-jumbotron__lead {
  text-align: center;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
}

.jhm-jumbotron__panorama {
  padding: emRhythm(4) 0;
  background-image: url("../assets/jumbotron_c053b2f9.jpg");
  background-size: cover;
  background-position: center bottom;
}

.jhm-blurb__item {
  padding: emRhythm(4);
  background-color: rgba(white, 0.9);
}

.jhm-blurb__motto {
  display: block;
  text-align: center;
  font-weight: bold;
  color: $primary-color;
  margin: 0 auto;
  text-transform: lowercase;
}

.jhm-motto__text {
  background-color: white;
  padding: emRhythm(1) emRhythm(2);
}

</style>

<script>
import Button from "@/components/Button.vue";
export default {
  name: "JumbotronFront",
  components: {
    Button
  }
};
</script>
