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
          <InputBase
            name="given-name"
            type="text"
            :required="true"
            label="Voornaam"
            autocomplete="given-name"
            v-model="form.givenName"
            :v="$v.form.givenName"
            class="column medium-6"
          />

          <InputBase
            name="family-name"
            type="text"
            :required="true"
            label="Achternaam"
            autocomplete="family-name"
            v-model="form.familyName"
            :v="$v.form.familyName"
            class="column medium-6"
          />
        </div>
      </fieldset>

      <fieldset class="jhm-fieldset">
        <legend class="jhm-legend">Adresgegevens</legend>

        <InputAddress
          :required="true"
          @emitAddress="getAddress"
          @emitPostcode="getPostcode"
          :v="$v.form.address"
        />
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
              :required="true"
              label="E-mailadres"
              v-model="form.email"
              :v="$v.form.email"
              autocomplete="email"
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
              autocomplete="tel"
            />
          </div>
        </div>
      </fieldset>

      <InputTextArea
        name="motivation"
        :required="true"
        label="Motivatie"
        :rows="6"
        v-model="form.motivation"
        :v="$v.form.motivation"
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

<script>
import axios from "axios";
import { required, email, minLength } from "vuelidate/lib/validators";
import Layout from "~/layouts/Forms.vue";
import JhmButton from "~/components/JhmButton.vue";
import InputBase from "~/components/forms/InputBase.vue";
import InputTextArea from "~/components/forms/InputTextArea";
import InputAddress from "~/components/forms/InputAddress";
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
    InputTextArea,
    NotificationBase
  },
  data() {
    return {
      form: {
        givenName: "",
        familyName: "",
        email: "",
        tel: "",
        address: "",
        postcode: "",
        motivation: ""
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
        required,
        email
      },
      tel: {
        required,
        minLength: minLength(10)
      },
      motivation: {
        required
      },
      address: {
        required
      }
    }
  },
  methods: {
    getAddress(address) {
      console.log(address);
      this.form.address = address;
    },
    getPostcode(postcode) {
      console.log(postcode);
      this.form.postcode = postcode;
    },
    async submitForm() {
      this.$v.form.$touch();
      if (this.$v.form.$pending || this.$v.form.$error) {
        this.showError = true;
        return;
      }
      this.submitButtonText = "Bezig met verzenden...";
      await axios
        .post(process.env.GRIDSOME_FORMCAKE_MAATJE_URL, this.form)
        .then(response => {
          this.submitButtonText = "Verzonden";
          this.$router.push("/ik-word-maatje/success");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
