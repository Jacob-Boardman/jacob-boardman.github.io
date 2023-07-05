<template>
  <div>
    <h2
      class="text-h2 text-center mt-7"
      style="font-family: 'Kite One', sans-serif !important"
    >
      Breakfast
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
          name: "Breakfast Sandwich",
          preptime: "5 minuets",
          cooktime: "15 minuets",
          serving: 4,
          ingredients: [
            {
              name: "Egg",
              quantity: "6 Large",
              notes: ""
            },
            {
              name: "Butter",
              quantity: "4 tsp",
              notes: "Preferably usalted, and a little extra for toasting"
            },
            {
              name: "Crème Fraîche",
              quantity: "1 tbsp",
              notes: ""
            },
            {
              name: "Salt and pepper",
              quantity: "To taste",
              notes: ""
            },
            {
              name: "Chives",
              quantity: "1 bunch (handful)",
              notes: "Finely chopped"
            },
            {
              name: "Sandwich Buns",
              quantity: "4",
              notes: "Which ever buns you prefer"
            },
            {
              name: "Garlic Mayo",
              quantity: "To your desire",
              notes: ""
            },
            {
              name: "Bacon",
              quantity: "8 Rashors",
              notes: "Normally 2 each but you can do more or less"
            },
            {
              name: "Cheese",
              quantity: "8 slices/50g shredded",
              notes: "This is freely up to you"
            }
          ],
          instructions: [
            {
              name: "Step 1",
              inst: "In a medium saucepan, bring 1 inch (2.5cm) of water to a gentle simmer over medium heat Place a heatproof bowl on top of the pot making sure the bowl does not touch the water."
            },
            {
              name: "Step 2",
              inst: "Crack the eggs into the bowl, along with 2 tablespoons (28g) butter. Cook, constantly whisking, for 8 to 10 minutes, or until the eggs are cooked and starting to finely curd and come together. Remove from the heat while still creamy and soft."
            },
            {
              name: "Step 3",
              inst: "Whisk in the remaining 2 tablespoons (28g) butter, along with the crème fraîche, until melted and well distributed. Season to taste with salt and pepper. Fold in the chives."
            },
            {
              name: "Step 4",
              inst: "Toast the buns in a pan with butter until golden brown on the cut sides. To assemble each sandwich, spread garlic mayo on the bottom buns. Then add 2 slices of bacon, followed by a generous mound of scrambled egg, and finally 2 slices of cheese. Torch or broil to melt the cheese. Top with your other half of the bun, and enjoy immediately."
            }
          ],
          image: new URL("../assets/breakfast_sandwitch.jpg", import.meta.url)
            .href
        },
        {
          name: "Breakfast Bagel",
          preptime: "3 minuets",
          cooktime: "10-15 minuets",
          serving: 1,
          ingredients: [
            {
              name: "Bagels",
              quantity: "1 standard",
              notes: "Can be your own choice of bagle"
            },
            {
              name: "Mushrooms",
              quantity: "50g",
              notes: ""
            },
            {
              name: "Egg",
              quantity: "2 large",
              notes: ""
            },
            {
              name: "Bacon",
              quantity: "4 thin rashors",
              notes: "Ideally two thin pieces per half bagel"
            },
            {
              name: "Suace",
              quantity: "To suit",
              notes: ""
            }
          ],
          instructions: [
            {
              name: "Step 1:",
              inst: "Start off by preparing our food. First of cut you bagel in half length ways so that you have two circular halfs. Then slice the mushrooms roughly."
            },
            {
              name: "Step 2:",
              inst: "Next add some oil to a frying pan on and put on a medium heat."
            },
            {
              name: "Step 3",
              inst: "Add your bacon to the pan and leave it alone to cook on the first side for about 8 minuets, then flip them over and cook for the same time. After you have flipped the bacon add the mushrooms into the same pan and start frying them off."
            },
            {
              name: "Step 4",
              inst: "When you have about 3 minuets left for the bacon move them tothe side of the frying pan with your mushrooms. Next crack both eggs into the other side of the frying pan and let them start to cook. At this point you can now put your bagel halfs into the toaster."
            },
            {
              name: "Step 5",
              inst: "Watch your bacon mushrooms and eggs and turn off the heat when you are happy with how they are cooked."
            },
            {
              name: "Step 6",
              inst: "Assembling is the easiest part. Take your toasted bagles halfs add themto your plate and apread butter (if prefered), at a little bit of suace and spread evenly. Take the bacon out first and add two pieces to each half. Lay your egg on top next. Then finish with your fried mushrooms."
            }
          ],
          image:
            "https://www.instagram.com/p/B_p0n_RFBaH/?utm_source=ig_web_copy_link"
        }
      ]
    };
  },
  methods: {},
  mounted() {
    this.$emit("data", {
      route: "/breakfast-page",
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
