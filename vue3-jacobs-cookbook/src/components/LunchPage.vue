<template>
  <div>
    <h2
      class="text-h2 text-center mt-7"
      style="font-family: 'Kite One', sans-serif !important"
    >
      Lunch
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
  name: "LunchPage",
  data() {
    return {
      recipes: [
        {
          name: "Egg Drop Soup",
          preptime: "5 minuets",
          cooktime: "15 minuets",
          serving: 2,
          ingredients: [
            {
              name: "Egg",
              quantity: "3 Large",
              notes: ""
            },
            {
              name: "Chicken/Vegtable Stock",
              quantity: "500ml",
              notes:
                "Prefereably unsalted, but this could be from a stock cube for conveinence"
            },
            {
              name: "Star Aniseed",
              quantity: "1 pod",
              notes: ""
            },
            {
              name: "Corriander Seeds",
              quantity: "A few seeds",
              notes: ""
            },
            {
              name: "Spring onioin",
              quantity: "Enough for a garnish, on top",
              notes: "Finely sliced"
            },
            {
              name: "Roasted seaseme seed oil",
              quantity: "1tsp",
              notes: ""
            },
            {
              name: "Light Soy Sauce",
              quantity: "1tbsp",
              notes:
                "Add less if your stock has salt in it and is mainly for taste"
            }
          ],
          instructions: [
            {
              name: "Step 1",
              inst: "Heat up the stock or melt stock cube in boilng water (500ml) then redue to a simmer over a medium low heat."
            },
            {
              name: "Step 2",
              inst: "Once the stock is simmering. take the Star Aniseed and corriander seeds and add them to a little cheese cloth and add tie with kitchen twine or add to a fine tea streainer and add to stock. Simmer this spices for 10 minuets"
            },
            {
              name: "Step 3",
              inst: "Whilst thats simmering add the 3 eggs to a bowl and whisk heavily till they are throughly mixed together."
            },
            {
              name: "Step 4",
              inst: "When 10 minuets is up take out the spices. Start to whisk slowly and start to pour the eggs slowly into the soup."
            },
            {
              name: "Step 5",
              inst: "After all the egg is added in turn off the heat add in the sesame oil and the soy sauce to taste and wait roughly 2 minuets for the egg to fully cook."
            },
            {
              name: "Step 6",
              inst: "When all is done spoon in small bowls add a sprinkle of the green onions on top to garnish and enjoy!"
            }
          ],
          image: ""
        }
      ]
    };
  },
  mounted() {
    this.$emit("data", {
      route: "/lunch-page",
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
