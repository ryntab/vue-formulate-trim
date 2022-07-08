<template>
<input :placeholder="placeholder" v-bind:class="classes" v-model.trim="context.model"></input>
</template>

<script>
export default {
  props: {
    context: {
      type: Object,
      required: true,
    },
  },
  computed: {
    placeholder() {
      return this.context.attributes.placeholder || "";
    },
    classes() {
      let defaultClasses = this.context.attributes.class;
      let addedClasses = this.context.attributes.styling;

      defaultClasses = defaultClasses.toString().split(" ");

      if (typeof addedClasses === "string") {
        addedClasses = addedClasses.toString().split(" ");
      }

      let classes = defaultClasses.concat(addedClasses);
      classes = classes.join(" ");

      return classes;
    },
  },
};
</script>
