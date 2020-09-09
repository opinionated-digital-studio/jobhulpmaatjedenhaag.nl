<template>
  <div class="jhm-form__item">
    <label :for="name"
      >{{ label }}
      <span class="jhm-form__asterisk" v-if="this.required">*</span>
    </label>
    <div v-if="showErrorMessages">
      <label
        class="jhm-form__label jhm-form__label--error"
        :for="name"
        role="alert"
      >
        <span v-if="v.required == false">Vul je {{ lowerCaseLabel }} in</span>
        <span v-else-if="v.email == false">Vul een geldig e-mailadres in </span>
        <span v-else-if="v.minLength == false"
          >Vul een geldig {{ lowerCaseLabel }} in met minstens
          {{ v.$params.minLength.min }} tekens
        </span>
        <span v-else-if="v.postcode == false">Vul een geldig postcode in</span>
      </label>
    </div>
    <input
      class="jhm-input"
      :type="type"
      :name="name"
      :id="name"
      :autocomplete="autocomplete"
      :aria-required="required"
      :aria-invalid="v.$error ? 'true' : 'false'"
      :pattern="isNumeric ? '[0-9]*' : false"
      :inputmode="isNumeric ? 'numeric' : false"
      :maxlength="maxLength ? maxLength : false"
      v-model="passValue"
      @blur="v.$touch()"
    />
  </div>
</template>

<style lang="scss">
.jhm-input {
  display: inline-block;
  margin-bottom: emRhythm(3);
  height: emRhythm(7);
}

.jhm-input[aria-invalid="true"] {
  border: 3px solid red;
}

.jhm-form__label--error {
  font-weight: bold;
}

.jhm-form__label--error,
.jhm-form__asterisk {
  color: red;
}
</style>

<script>
export default {
  name: "InputBase",
  props: {
    name: { type: String },
    label: { type: String },
    type: { type: String, default: "text" },
    autocomplete: { type: String, default: "off" },
    required: { type: Boolean, default: false },
    isNumeric: { type: Boolean, default: false },
    value: { type: String, default: "" },
    v: { type: Object, required: true },
    showErrors: { type: Boolean, default: true },
    maxLength: {type: String, default: null} 
  },
  computed: {
    lowerCaseLabel() {
      const label = this.label;
      return label.toString().toLowerCase();
    },
    passValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    },
    showErrorMessages() {
      return this.v.$error && this.showErrors
    }
  }
};
</script>
