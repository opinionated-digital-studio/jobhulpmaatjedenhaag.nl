<template>
  <table class="jhm-maatje-selfie-card">
    <tbody>
      <tr align="left">
        <th scope="row">Naam en selfie foto</th>
        <td>
          {{ name }}
          <img
            class="jhm-maatje-selfie-card__selfie"
            :src="processedSelfie()"
            :alt="selfieAlt"
            srcset=""
          />
        </td>
      </tr>
      <tr align="left">
        <th scope="row">Maatje sinds</th>
        <td>{{ startingDate }}</td>
      </tr>
      <tr align="left">
        <th scope="row">Ik ben verder lekker druk met ….</th>
        <td>{{ hobbies }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss">
.jhm-maatje-selfie-card {
  background-color: #f0f0f0;
  margin-bottom: emRhythm(4);

  th {
    font-weight: 700;
  }

  th,
  td {
    padding: emRhythm(2);
  }
}

.jhm-maatje-selfie-card__selfie {
  max-width: 300px;
}
</style>

<script>
export default {
  name: "MaatjeSelfieCard",
  props: {
    name: { type: String },
    selfie: { type: String },
    startingDate: { type: String },
    hobbies: { type: String },
    selfieAlt: { type: String }
  },
  methods: {
    processedSelfie() {
      return require("~/assets/thumbs/" + this.selfie);
    }
  }
};
</script>
