<template>
  <div>
    <div class="row">
      <div class="column small-4">
        <InputBase
          name="day"
          type="text"
          label="Dag"
          v-model="dateOfBirthData.day"
          :v="$v.dateOfBirthData.day"
          :showErrors="false"
          :isNumeric="true"
          @input="
            moveNextDateField();
            emitDateOfBirth();
          "
          maxLength="2"
        />
      </div>
      <div class="column small-4">
        <InputBase
          name="month"
          type="text"
          label="Maand"
          v-model="dateOfBirthData.month"
          :v="$v.dateOfBirthData.month"
          :showErrors="false"
          :isNumeric="true"
          @input="
            moveNextDateField();
            emitDateOfBirth();
          "
          maxLength="2"
        />
      </div>
      <div class="column small-4">
        <InputBase
          name="year"
          type="text"
          label="Jaar"
          v-model="dateOfBirthData.year"
          :v="$v.dateOfBirthData.year"
          :showErrors="false"
          :isNumeric="true"
          @input="emitDateOfBirth()"
          maxLength="4"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

<script>
import InputBase from "~/components/forms/InputBase.vue";
import { required, requiredIf, minLength } from "vuelidate/lib/validators";

export default {
  name: "InputDateOfBirth",
  components: {
    InputBase
  },
  data() {
    return {
      dateOfBirthData: {
        day: "",
        month: "",
        year: ""
      }
    };
  },
  validations: {
    dateOfBirthData: {
      day: {},
      month: {},
      year: {}
    }
  },
  computed: {
    compileDateOfBirth: function() {
      return (
        this.dateOfBirthData.day +
        "/" +
        this.dateOfBirthData.month +
        "/" +
        this.dateOfBirthData.year
      );
    }
  },
  methods: {
    moveNextDateField() {
      if (event.target.value.length >= 2) {
        event.target.parentElement.parentElement.nextElementSibling.childNodes[0].childNodes[2].focus();
      }
    },
    emitDateOfBirth() {
      this.$emit("emitDateOfBirth", this.compileDateOfBirth);
    }
  }
};
</script>
