<template>
  <div>
    <h2
      class="text-h2 text-center mt-7"
      style="font-family: 'Kite One', sans-serif !important"
    >
      Dessert
    </h2>
    <v-divider thickness="3"></v-divider>
    <v-card v-for="recipe in recipes" :key="recipe.id" class="ma-3">
      <v-card-text class="ma-2 pb-2">
        <h2
          :id="recipe.name"
          class="text-h4 recipeHeader"
          style="font-family: 'Kite One', sans-serif !important"
        >
          {{ recipe.name }}
        </h2>
      </v-card-text>
      <v-card-text class="ma-2 d-flex flex-row justify-space-evenly">
        <h3>Preptime: {{ recipe.preptime }}</h3>
        <h3>Cooktime: {{ recipe.cooktime }}</h3>
        <h3>Serves: {{ recipe.serving }}</h3>
      </v-card-text>
      <v-divider thickness="2"></v-divider>
      <v-table class="ma-2" theme="light">
        <thead>
          <tr>
            <th class="text-center font-weight-black">Ingredient</th>
            <th class="text-center font-weight-black">Quantity</th>
            <th class="text-left font-weight-black">Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ingredient in recipe.ingredients" :key="ingredient.name">
            <td class="text-center">{{ ingredient.name }}</td>
            <td class="text-center">{{ ingredient.quantity }}</td>
            <td class="text-left">{{ ingredient.notes }}</td>
          </tr>
        </tbody>
      </v-table>
      <v-divider thickness="2"></v-divider>
      <v-list>
        <v-list-item
          v-for="instruction in recipe.instructions"
          :key="instruction.name"
          :title="instruction.name"
        >
          {{ instruction.inst }}
          <v-divider thickness="2"></v-divider>
        </v-list-item>
      </v-list>
      <v-img
        :src="recipe.image"
        cover
        aspect-ratio="1"
        max-height="500"
        class="bg-grey-lighten-2"
      ></v-img>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      recipes: [
        {
          name: "Brownies",
          preptime: "5 minuets",
          cooktime: "40 minuets",
          serving: 12,
          ingredients: [{}],
          instructions: [{}],
          image: ""
        }
      ]
    };
  },
  methods: {},
  mounted() {
    this.$emit("data", {
      route: "/dessert-page",
      names: this.recipes.map((recipe) => {
        return recipe.name;
      })
    });
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kite+One&display=swap");
@import "../styles/commonStyling.css";
</style>
