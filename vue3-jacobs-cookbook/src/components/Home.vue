<template>
    <div class="body">
      <div class="body-content">
        <h1>Hi my name is Jacob Boardman</h1>
        <h2>Introduction</h2>
        <p>This is going to be my personal online cookbook.</p>
        <p>I've come from a Computer Science background, I graduated back in 2018 and started working within a Consulting firm. I worked there for two years under an IBM 
          contract where eventually I was presented with an offer to move to IBM CIC full time back in September.
        </p>
        <p>I have always had a passion for cooking even though I was an incredibly fussy eater wheni was younger. I was taught by my dad and always offered to cook, I then cook 
          my cooking to University with me where I cooked for my housemates. Whilst I was at university I had to get creative and cook to suit everyones tastes, and this 
          sparked my love for cooking even more. When I moved out of Uni and started living on my own I was able experiment even more as I could cook whatever I would enjoy 
          without the contraints of others.
        </p>
        <p>I cook all sorts of food but tend to graviate to tranditainl english dishes and East Asain inspired dishes. I've started to write my own little cooking journal and 
          will be sharing some of these recipes here.
        </p>
        <h2>Example</h2>
        <p>Below will show you an exmaple of how a recipe is going to be laid out. First will come a table with the ingredients and measurements. There might also be some notes
          or tips associated as well.
        </p>
        <table id="ingredients-table">
          <tr class="table-row-header">
            <th>Ingredients</th>
            <th>Amount</th>
            <th>Notes</th>
          </tr>
          <tr>
            <td>Butter</td>
            <td>120g</td>
            <td>Preferably unsalted</td>
          </tr>
          <tr>
            <td>All purpose flour</td>
            <td>210g</td>
            <td></td>
          </tr>
          <tr>
            <td>Egg</td>
            <td>1 large</td>
            <td>Preferably free range</td>
          </tr>
        </table>
        <p>The steps for the recipes will be given in a nice and easy to follow numbered list of steps as seen below:</p>
        <ol>
            <li>Mix the Flour, Sugar, and Eggs into a bowl</li>
            <li>Add into a baking tray</li>
            <li>Cook in oven for 20 minuets</li>
        </ol>
        <p>This is just an example and the acutal recipes will go into more detail about each step and will showcase an image or two on next to or above the recipe</p>
      </div>
      <div class="body-image">
        <img 
          src="../assets/ProfilePicture.jpeg" 
          alt="Image of Jacob Boardman"
          height="200px"
          width="200px"
          >
      </div>
    </div>
    <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../styles/mainStyleSheet.css";
</style>
