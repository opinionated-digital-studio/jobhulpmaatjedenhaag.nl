<template>
  <div>
    <label :for="name"
      >{{ label }}
      <span class="jhm-label__asterisk" v-if="this.required">*</span>
    </label>
    <div v-if="v.$error">
      <label
        class="jhm-form__label jhm-form__label--error"
        :for="name"
        role="alert"
      >
        <span v-if="v.required == false">Vul je {{ lowerCaseLabel }} in</span>
      </label>
    </div>
    <textarea
      class="jhm-textarea"
      :name="name"
      :id="name"
      :aria-required="required"
      :aria-invalid="v.$error ? 'true' : 'false'"
      :rows="rows"
      v-model="passValue"
      @blur="v.$touch()"
    ></textarea>
  </div>
</template>

<style lang="scss">
.jhm-textarea {
  margin-bottom: emRhythm(5);
}

.jhm-textarea[aria-invalid="true"] {
  border: 3px solid red;
}
</style>

<script>
export default {
  name: "InputTextArea",
  props: {
    name: { type: String },
    label: { type: String },
    required: { type: Boolean, default: false },
    rows: { type: Number, default: 3 },
    value: { type: String, default: "" },
    v: { type: Object, required: true },
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
  }
};
</script>
