<template>
  <div
    class="jhm-notification"
    :class="{ 'jhm-notification--error': isError }"
    :role="isAlert ? 'alert' : false"
  >
    <h2 class="jhm-notification__title">{{ title }}</h2>
    <slot />
  </div>
</template>

<style lang="scss">
.jhm-notification {
  padding: emRhythm(4);
  margin-bottom: emRhythm(4);
}

.jhm-notification--error {
  background-color: red;
  color: white;

  .jhm-notification__title {
    color: white;
  }
}
</style>

<script>
export default {
  name: "NotificationBase",
  props: {
    title: { type: String },
    isError: { type: Boolean, default: false },
    isAlert: { type: Boolean, default: false }
  }
};
</script>
