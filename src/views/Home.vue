<template>
  <div class="home">
    <Invoice />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Invoice from "@/components/Invoice.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    Invoice,
  },
});
</script>
