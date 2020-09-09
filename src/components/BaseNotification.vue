<template>
  <div>
    <h2>{{ title }}</h2>
    <slot />
  </div>
</template>

<script>
export default {
  name: "BaseNotification",
  props: {
    title: { type: String },
    alert: { type: Boolean, default: false }
  }
};
</script>
