<template>
  <Layout>
    <h1>
      <span class="sr-only" v-if="$v.form.$error"
        >Er zijn foutmeldingen in het formulier: </span
      >Ik word maatje
    </h1>
    <p>Meld je aan met onderstaand formulier.</p>

    <NotificationBase
      v-if="showError"
      title="Foutmelding"
      :isError="true"
      :isAlert="true"
    >
      Er zijn fouten gevonden in het formulier. Controleer of de vragen goed en
      volledig zijn beantwoord en probeer het formulier nogmaals te verzenden.
    </NotificationBase>

    <form @submit.prevent="submitForm" novalidate>
      <fieldset>
        <legend class="jhm-legend">Persoonlijke gegevens</legend>

        <div class="row">
          <div class="column medium-6">
            <InputBase
              name="given-name"
              type="text"
              :required="true"
              label="Voornaam"
              autocomplete="given-name"
              v-model="form.givenName"
              :v="$v.form.givenName"
            />
          </div>
          <div class="column medium-6">
            <InputBase
              name="family-name"
              type="text"
              :required="true"
              label="Achternaam"
              autocomplete="family-name"
              v-model="form.familyName"
              :v="$v.form.familyName"
            />
          </div>
        </div>
      </fieldset>

      <fieldset class="jhm-fieldset" aria-describedby="date-of-birth-hint">
        <legend class="jhm-legend">
          Geboortedatum
        </legend>
        <p class="jhm-form__hint" id="date-of-birth-hint">
          Bijvoorbeeld: 21 09 1988
        </p>
        <InputDateOfBirth @emitDateOfBirth="getDateOfBirth" />
      </fieldset>

      <fieldset class="jhm-fieldset">
        <legend class="jhm-legend">Adresgegevens</legend>

        <InputAddress @emitAddress="getAddress" @emitPostcode="getPostcode" :v="$v.form.address"/>
      </fieldset>

      <fieldset class="jhm-fieldset">
        <legend class="jhm-legend">
          Contactgegevens
        </legend>

        <div class="row">
          <div class="column medium-6">
            <InputBase
              name="email"
              type="email"
              label="E-mailadres"
              v-model="form.email"
              :v="$v.form.email"
            />
          </div>
          <div class="column medium-6">
            <InputBase
              name="tel"
              type="tel"
              :required="true"
              label="Telefoonnummer"
              v-model="form.tel"
              :v="$v.form.tel"
            />
          </div>
        </div>
      </fieldset>

      <InputTextArea
        name="situatie"
        :required="true"
        label="Situatie"
        :rows="6"
        v-model="form.situatie"
        :v="$v.form.situatie"
      />

      <JhmButton
        type="submit"
        to="sendButton"
        class="jhm-button"
        size="large"
        >{{ submitButtonText }}</JhmButton
      >
    </form>
  </Layout>
</template>

<style lang="scss">
.jhm-form__hint {
  color: $dark-gray;
  margin-bottom: emRhythm(2);
}
</style>

<script>
import axios from "axios";
import Layout from "~/layouts/Forms.vue";
import { required, email, minLength } from "vuelidate/lib/validators";
import JhmButton from "~/components/JhmButton.vue";
import InputBase from "~/components/forms/InputBase.vue";
import InputTextArea from "~/components/forms/InputTextArea";
import InputAddress from "~/components/forms/InputAddress";
import InputDateOfBirth from "~/components/forms/InputDateOfBirth";
import NotificationBase from "~/components/NotificationBase";

export default {
  metaInfo: {
    title: "Ik word maatje"
  },
  components: {
    Layout,
    JhmButton,
    InputBase,
    InputAddress,
    InputDateOfBirth,
    InputTextArea,
    NotificationBase
  },
  data() {
    return {
      form: {
        givenName: "",
        familyName: "",
        dateOfBirth: "",
        email: "",
        tel: "",
        address: "",
        postcode: "",
        situatie: ""
      },
      showError: false,
      submitButtonText: "Aanmelden"
    };
  },
  validations: {
    form: {
      givenName: {
        required
      },
      familyName: {
        required
      },
      email: {
        email
      },
      address: {

      },
      tel: {
        required,
        minLength: minLength(10)
      },
      situatie: {
        required
      }
    }
  },
  methods: {
    getAddress(address) {
      this.form.address = address;
    },
    getPostcode(postcode) {
      this.form.postcode = postcode;
    },
    getDateOfBirth(dateofbirth) {
      this.form.dateOfBirth = dateofbirth;
    },
    async submitForm() {
      this.$v.form.$touch();
      if (this.$v.form.$pending || this.$v.form.$error) {
        this.showError = true;
        return;
      }
      this.submitButtonText = "Bezig met verzenden...";
      await axios
        .post(process.env.GRIDSOME_FORMCAKE_HV_URL, this.form)
        .then(response => {
          this.submitButtonText = "Verzonden";
          this.$router.push("/ik-wil-hulp/success");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
