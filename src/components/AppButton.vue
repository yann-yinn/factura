<template>
  <button
    class="py-3 px-6 text-white rounded-lg shadow-lg block md:inline-block"
    :class="{
      'bg-indigo-500': color === 'indigo',
      'bg-blue-500': color === 'blue',
      'bg-green-500': color === 'green',
      'bg-yellow-400': color === 'yellow',
      'bg-purple-600': color === 'purple',
      'bg-red-500': color === 'red',
    }"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

enum PropColor {
  Indigo = "indigo",
  Blue = "blue",
  Green = "green",
  Yellow = "yellow",
  Purple = "purple",
  Red = "red",
}

export default defineComponent({
  props: {
    color: {
      type: String as PropType<PropColor>,
      default: "blue",
    },
  },
});
</script>
