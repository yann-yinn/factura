<template>
  <div class="container mx-auto bg-white shadow-sm">
    <Invoice />
  </div>
</template>

<script>
// @ is an alias to /src
import Invoice from "@/components/Invoice.vue";

export default {
  name: "Home",
  components: {
    Invoice,
  },
};
</script>
