import FormulateTrim from "./FormulateTrim";
export default function FormulateTrimPlugin(formulateInstance) {
  formulateInstance.extend({
    components: {
      FormulateTrim,
    },
    library: {
      trim: {
        classification: "text",
        component: "FormulateTrim",
      },
    },
  });
}
