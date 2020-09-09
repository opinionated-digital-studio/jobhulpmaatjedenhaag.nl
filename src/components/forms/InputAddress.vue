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
    <div class="jhm-form__group">
      <InputBase
        id="postcode-form-item"
        name="postcode"
        type="text"
        label="Postcode"
        v-model.trim="addressItems.postcode"
        :v="$v.addressItems.postcode"
        @input="emitAddressDetails"
        :showErrors=false
        :required="required ? true : false"
      />

      <InputBase
        name="housenumber"
        type="text"
        label="Huisnummer"
        v-model="addressItems.housenumber"
        :v="$v.addressItems.housenumber"
        @input="emitAddressDetails"
        :showErrors=false
        :required="required ? true : false"
      />
    </div>

    <button
      id="address-lookup-button"
      type="button"
      class="jhm-button jhm-button--gray"
      v-on:click.prevent="addressLookup"
    >
      Huisadres opvragen
    </button>

    <label
      v-if="lookingForAddressText"
      for="address-lookup-button"
      class="jhm-label jhm-label__address-lookup"
      :class="{ 'jhm-label--error': addressNotFound }"
      >{{ lookingForAddressText }}</label
    >

    <InputBase
      name="streetname"
      type="text"
      label="Straatnaam"
      @input="emitAddressDetails"
      v-model="addressItems.streetname"
      :v="$v.addressItems.streetname"
      :required="required ? true : false"
    />

    <InputBase
      name="area"
      type="text"
      label="Woonplaats"
      v-model="addressItems.area"
      @input="emitAddressDetails"
      :v="$v.addressItems.area"
      :required="required ? true : false"
    />
  </div>
</template>

<style lang="scss">
.jhm-form__group {
  display: flex;
}

.jhm-form__group .jhm-form__item:first-child {
  margin-right: emRhythm(2);
}

.jhm-label__address-lookup {
  display: block;
  margin-bottom: emRhythm(3);
}

#postcode-form-item {
  flex-basis: 120%;
}
</style>

<script>
import InputBase from "~/components/forms/InputBase.vue";
import { required, requiredIf, minLength } from "vuelidate/lib/validators";
import { postcode } from "~/functions/customValidators";
import axios from "axios";

export default {
  name: "InputAddress",
  components: {
    InputBase
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
          required: requiredIf(function(){
            return !! this.required
          }),
          postcode
        },
        housenumber: {
          required: requiredIf(function(){
            return !! this.required
          })
        },
        streetname: {
          required: requiredIf(function(){
            return !! this.required
          })
        },
        area: {
          required: requiredIf(function(){
            return !! this.required
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
        if(val.$error) this.$v.addressItems.$touch()
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
