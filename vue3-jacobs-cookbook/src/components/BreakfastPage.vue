<template>
  <div>
    <h2 class="text-h2 text-center mt-4" style="font-family: 'Kite One', sans-serif !important;">Breakfast</h2>
    <v-divider thickness="3"></v-divider>
    <v-card v-for="recipe in recipes" :key="recipe.id" class="ma-3">
      <v-card-text class="ma-2 pb-2">
        <h2 :id="recipe.name" class="text-h4" style="font-family: 'Kite One', sans-serif !important;">{{ recipe.name }}</h2>
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
            <th class="text-center font-weight-bold">Ingredient</th>
            <th class="text-center font-weight-bold">Quantity</th>
            <th class="text-left font-weight-bold">Notes</th>
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
      <v-list lines="none">
        <v-list-item v-for="instruction in recipe.instructions" :key="instruction.name" :title="instruction.name">
          {{ instruction.inst }}
          <v-divider thickness="2"></v-divider>
        </v-list-item>
      </v-list>
      <v-img :src="recipe.image" cover aspect-ratio="1" max-height="500" class="bg-grey-lighten-2"></v-img>
    </v-card>
    <div class="cookbook-body">
      <div class="cookbook-menu">
        <div class="cookbook-menu-row">
          <h3 class="cookbook-menu-column-header">Breakfast Sandwich</h3>
          <hr class="menu-divider" />
          <div class="cookbook-menu-column">
            <div class="cookbook-menu-column-steps">
              <div class="prep-cook-serve">
                <p>Prep: 5min</p>
                <p>Cook Time: 15min</p>
                <p>Serves 4</p>
              </div>
              <table id="ingredients-table">
                <tr class="table-row-header">
                  <th>Ingredients</th>
                  <th>Amount</th>
                  <th>Notes</th>
                </tr>
                <tr>
                  <td>Egg</td>
                  <td>6 large</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Butter</td>
                  <td>4 tsp</td>
                  <td>Preferably usalted, and a little extra for toasting</td>
                </tr>
                <tr>
                  <td>Crème Fraîche</td>
                  <td>1 tbsp</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Salt and pepper</td>
                  <td>To taste</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Chives</td>
                  <td>1 bunch (handful)</td>
                  <td>Finely chopped</td>
                </tr>
                <tr>
                  <td>Sandwich Buns</td>
                  <td>4</td>
                  <td>Which ever buns you prefer</td>
                </tr>
                <tr>
                  <td>Garlic Mayo</td>
                  <td>To your desire</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Bacon</td>
                  <td>8 Rashors</td>
                  <td>Normally 2 each but you can do more or less</td>
                </tr>
                <tr>
                  <td>Cheese</td>
                  <td>8 slices/50g shredded</td>
                  <td>This is freely up to you</td>
                </tr>
              </table>
              <ol id="instructions">
                <li>
                  In a medium saucepan, bring 1 inch (2.5cm) of water to a
                  gentle simmer over medium heat Place a heatproof bowl on top
                  of the pot making sure the bowl does not touch the water.
                </li>
                <li>
                  Crack the eggs into the bowl, along with 2 tablespoons (28g)
                  butter. Cook, constantly whisking, for 8 to 10 minutes, or
                  until the eggs are cooked and starting to finely curd and come
                  together. Remove from the heat while still creamy and soft.
                </li>
                <li>
                  Whisk in the remaining 2 tablespoons (28g) butter, along with
                  the crème fraîche, until melted and well distributed. Season
                  to taste with salt and pepper. Fold in the chives.
                </li>
                <li>
                  Toast the buns in a pan with butter until golden brown on the
                  cut sides. To assemble each sandwich, spread garlic mayo on
                  the bottom buns. Then add 2 slices of bacon, followed by a
                  generous mound of scrambled egg, and finally 2 slices of
                  cheese. Torch or broil to melt the cheese. Top with your other
                  half of the bun, and enjoy immediately.
                </li>
              </ol>
            </div>
            <div class="cookbook-menu-column-img">
              <img class="column-img" src="../assets/breakfast_sandwitch.jpg" alt="Image of breakfast sandwich"
                height="400px" width="500px" />
            </div>
          </div>
        </div>
        <div class="cookbook-menu-row">
          <h2 class="cookbook-menu-column-header">Breakfast Bagels</h2>
          <hr class="menu-divider" />
          <div class="cookbook-menu-column">
            <div class="cookbook-menu-column-steps">
              <div class="prep-cook-serve">
                <p>Prep: 3min</p>
                <p>Cook Time: 10-15min</p>
                <p>Serves 1</p>
              </div>
              <table id="ingredients-table">
                <tr class="table-row-header">
                  <th>Ingredients</th>
                  <th>Amount</th>
                  <th>Notes</th>
                </tr>
                <tr>
                  <td>Bagels</td>
                  <td>1 standard</td>
                  <td>This can be any of your choice</td>
                </tr>
                <tr>
                  <td>Mushrooms</td>
                  <td>50g</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Egg</td>
                  <td>2 large</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Bacon</td>
                  <td>4 thin rashors</td>
                  <td>Ideally two thin pieces per half bagel</td>
                </tr>
                <tr>
                  <td>Suace</td>
                  <td>To suit</td>
                  <td></td>
                </tr>
              </table>
              <ol id="instructions">
                <li>
                  Start off by preparing our food. First of cut you bagel
                  in half length ways so that you have two circular halfs. Then
                  slice the mushrooms roughly.
                </li>
                <li>
                  Next add some oil to a frying pan on and put on a medium heat.
                </li>
                <li>
                  Add your bacon to the pan and leave it alone to cook on the
                  first side for about 8 minuets, then flip them over and cook
                  for the same time. After you have flipped the bacon add the
                  mushrooms into the same pan and start frying them off.
                </li>
                <li>
                  When you have about 3 minuets left for the bacon move them
                  tothe side of the frying pan with your mushrooms. Next crack
                  both eggs into the other side of the frying pan and let them
                  start to cook. At this point you can now put your bagel halfs
                  into the toaster.
                </li>
                <li>
                  Watch you bacon mushrooms and eggs and turn off the heat when
                  you are happy with how they are cooked.
                </li>
                <li>
                  Assembling is the easiest part. Take your toasted bagles halfs
                  add themto your plate and apread butter (if prefered), at a
                  little bit of suace and spread evenly. Take the bacon out
                  first and add two pieces to each half. Lay your egg on top
                  next. Then finish with your fried mushrooms.
                </li>
                <li>Dig in and Enjoy!</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      recipes: [{
        name: 'Breakfast Sandwich',
        preptime: '5 minuets',
        cooktime: '15 minuets',
        serving: 4,
        ingredients: [
          {
            name: 'Egg',
            quantity: '6 Large',
            notes: ''
          },
          {
            name: 'Butter',
            quantity: '4 tsp',
            notes: 'Preferably usalted, and a little extra for toasting'
          }
        ],
        instructions: [
          {
            name: 'Step 1',
            inst: 'In a medium saucepan, bring 1 inch (2.5cm) of water to a gentle simmer over medium heat Place a heatproof bowl on top of the pot making sure the bowl does not touch the water.'
          },
          {
            name: 'Step 2',
            inst: 'Crack the eggs into the bowl, along with 2 tablespoons (28g) butter. Cook, constantly whisking, for 8 to 10 minutes, or until the eggs are cooked and starting to finely curd and come together. Remove from the heat while still creamy and soft.'
          }
        ],
        image: new URL('../assets/breakfast_sandwitch.jpg', import.meta.url).href
      }, {
        name: 'Breakfast Bagel',
        preptime: '3 minuets',
        cooktime: '10-15 minuets',
        serving: 1,
        ingredients: [
          {
            name: 'Bagels',
            quantity: '1 standard',
            notes: 'Can be your own choice of bagle'
          },
          {
            name: 'Mushrooms',
            quantity: '50g',
            notes: ''
          }
        ],
        instructions: [
          {
            name: 'Step 1:',
            inst: 'Start off by preparing our food. First of cut you bagel in half length ways so that you have two circular halfs. Then slice the mushrooms roughly.'
          },
          {
            name: 'Step 2:',
            inst: 'Next add some oil to a frying pan on and put on a medium heat.'
          }
        ],
        image: 'https://www.instagram.com/p/B_p0n_RFBaH/?utm_source=ig_web_copy_link'
      }],
      accessToken:
        'IGQVJYNDRCR1NSUGZAiU2QyN2xkSUZAfRVVYM1FmSDU2SkRfT0V4R3VCY3NIbmduSFBXSXdMcXdycXl2amNaeVZABNGhtanItYUNYNW9rZAkRWbnZAic2xKTWdaVHhMc293Smdjc3UwZAkxpSHNmM0s5SkR4OQZDZD',
      instagramUrl: 'https://www.instagram.com/p/B_p0n_RFBaH/'
    };
  },
  methods: {},
  mounted() {
    this.$emit('data', {
      route: '/breakfast-page',
      names: this.recipes.map(recipe => { return recipe.name })
    }
    );
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kite+One&display=swap');
</style>
