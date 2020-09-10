<template>
  <div>
    <div v-if="$v.addressItems.$anyError">
      <div v-if="$v.addressItems.postcode.$error">
        <label for="postcode" class="jhm-form__label jhm-form__label--error">
          Vul een geldig postcode in
        </label>
      </div>
      <div v-if="$v.addressItems.housenumber.$error">
        <label for="housenumber" class="jhm-form__label jhm-form__label--error">
          Vul een geldig huisnummer in
        </label>
      </div>
    </div>
    <div class="row">
      <InputBase
        id="postcode-form-item"
        name="postcode"
        type="text"
        class="column medium-5"
        label="Postcode"
        v-model.trim="addressItems.postcode"
        :v="$v.addressItems.postcode"
        @input="emitAddressDetails"
        :showErrors="false"
        :required="required ? true : false"
      />

      <InputBase
        name="housenumber"
        type="text"
        class="column medium-3"
        label="Huisnummer"
        v-model="addressItems.housenumber"
        :v="$v.addressItems.housenumber"
        @input="emitAddressDetails"
        :showErrors="false"
        :required="required ? true : false"
      />

      <div class="column medium-4">
        <JhmButton
          id="address-lookup-button"
          type="button"
          styling="gray"
          @buttonClicked="addressLookup"
          >Huisadres opvragen</JhmButton>
      </div>
    </div>

    <div class="row">
      <label
        id="looking-for-address-text"
        v-if="lookingForAddressText"
        for="address-lookup-button"
        class="column jhm-label jhm-label__address-lookup"
        :class="{ 'jhm-label--error': addressNotFound }"
        >{{ lookingForAddressText }}</label
      >
    </div>

    <div class="row">
      <InputBase
        name="streetname"
        type="text"
        label="Straatnaam"
        class="column medium-6"
        @input="emitAddressDetails"
        v-model="addressItems.streetname"
        :v="$v.addressItems.streetname"
        :required="required ? true : false"
      />

      <InputBase
        name="area"
        type="text"
        label="Woonplaats"
        class="column medium-6"
        v-model="addressItems.area"
        @input="emitAddressDetails"
        :v="$v.addressItems.area"
        :required="required ? true : false"
      />
    </div>
  </div>
</template>

<style lang="scss">
#address-lookup-button {
  @include bp(md) {
    width: 100%;
    margin-top: 1.8rem;
  }
}

#looking-for-address-text {
  height: emRhythm(7);
  margin-bottom: emRhythm(2);
}
</style>

<script>
import InputBase from "~/components/forms/InputBase.vue";
import JhmButton from "~/components/JhmButton.vue";
import { required, requiredIf, minLength } from "vuelidate/lib/validators";
import { postcode } from "~/functions/customValidators";
import axios from "axios";

export default {
  name: "InputAddress",
  components: {
    InputBase,
    JhmButton
  },
  data() {
    return {
      addressItems: {
        postcode: "",
        housenumber: "",
        streetname: "",
        area: ""
      },
      lookingForAddressText: false,
      addressNotFound: false
    };
  },
  validations() {
    return {
      addressItems: {
        postcode: {
          required: requiredIf(function() {
            return !!this.required;
          }),
          postcode
        },
        housenumber: {
          required: requiredIf(function() {
            return !!this.required;
          })
        },
        streetname: {
          required: requiredIf(function() {
            return !!this.required;
          })
        },
        area: {
          required: requiredIf(function() {
            return !!this.required;
          })
        }
      }
    };
  },
  props: {
    value: { type: String, default: "" },
    v: { type: Object, required: true },
    required: { type: Boolean, default: false }
  },
  computed: {
    compileAddress: function() {
      return this.addressItems.streetname + " " + this.addressItems.housenumber;
    },
    compilePostcode: function() {
      return this.addressItems.postcode + " " + this.addressItems.area;
    }
  },
  watch: {
    v: {
      handler(val) {
        if (val.$error) this.$v.addressItems.$touch();
      },
      deep: true
    }
  },
  methods: {
    emitAddressDetails: function() {
      this.$emit("emitAddress", this.compileAddress);
      this.$emit("emitPostcode", this.compilePostcode);
    },
    addressLookup: async function() {
      // Strip spaces
      this.addressItems.postcode = this.addressItems.postcode.replace(
        /\s|-/g,
        ""
      );
      this.addressItems.postcode = this.addressItems.postcode.toUpperCase();
      this.addressNotFound = false;
      this.lookingForAddressText = "Bezig met zoeken...";
      await axios
        .get(
          `http://geodata.nationaalgeoregister.nl/locatieserver/free?fq=postcode:${
            this.addressItems.postcode
          }&fq=huisnummer~${this.addressItems.housenumber}*`
        )
        .then(response => {
          if (response.data.response.docs.length > 0) {
            response = response.data.response.docs[0];
            const streetname = response.straatnaam;
            const area = response.woonplaatsnaam;
            this.addressItems.streetname = streetname;
            this.addressItems.area = area;
            this.lookingForAddressText = false;
            this.emitAddressDetails();
          } else {
            this.emitAddressDetails();
            this.addressItems.streetname = "";
            this.addressItems.area = "";
            this.addressNotFound = true;
            this.lookingForAddressText =
              "Geen adres gevonden. Probeer het nogmaals of vul het handmatig in.";
          }
        })
        .catch(error => {
          this.addressItems.streetname = "";
          this.addressItems.area = "";
          this.addressNotFound = true;
          this.lookingForAddressText =
            "Geen adres gevonden. Probeer het nogmaals of vul het handmatig in.";
          console.log(error);
        });
      return "test";
    }
  }
};
</script>
