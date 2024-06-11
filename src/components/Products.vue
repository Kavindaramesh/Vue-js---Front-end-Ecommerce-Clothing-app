<template>
    





            <div class="box" style="margin-top: 100px;">
    <div class="evecards">
        <div class="eveimage">
            <img src="../assets/shoes.png">

        <div class="evedetails">
            <h3 style="margin-top: -60px;" > Shoes </h3>
            <h3> $5.00 </h3>
            <button class="cartbtn" @click="addToCart">Add to Cart</button>
        <p v-if="addedToCart" class="added-to-cart-message">Added to the cart</p>
        </div>
    </div>
    </div>

    <div class="evecards">
        <div class="eveimage">
            <img src="../assets/mc1.jpg">

        <div class="evedetails">
            <h3 style="margin-top: -60px;">Men's T-Shirt</h3>
            <h3> $5.00 </h3>
            <button class="cartbtn" @click="addToCart">Add to Cart</button>
        <p v-if="addedToCart" class="added-to-cart-message">Added to the cart</p>
        </div>
    </div>
    </div>



    <div class="evecards">
        <div class="eveimage">
            <img src="../assets/shirt4.jpg">

        <div class="evedetails">
            <h3 style="margin-top: -60px;"> Ladie"s T-shirt </h3>
            <h3> $5.00 </h3>
            <button class="cartbtn" @click="addToCart">Add to Cart</button>
        <p v-if="addedToCart" class="added-to-cart-message">Added to the cart</p>
        </div>
    </div>
    </div>

    <div class="evecards">
        <div class="eveimage" style="margin-top: -0px;">
            <img src="../assets/menp.jpg">

        <div class="evedetails">
            <h3 style="margin-top: -60px;"> Men's Pants </h3>
            <h3> $5.00 </h3>
            <button class="cartbtn" @click="addToCart">Add to Cart</button>
        <p v-if="addedToCart" class="added-to-cart-message">Added to the cart</p>
        </div>
    </div>
    </div>



    <div class="evecards">
        <div class="eveimage">
            <img src="../assets/lp2.jpg">

        <div class="evedetails">
            <h3 style="margin-top: -55px;"> Ladie's Pants </h3>
            <h3> $5.00 </h3>
            <button class="cartbtn" @click="addToCart">Add to Cart</button>
        <p v-if="addedToCart" class="added-to-cart-message">Added to the cart</p>
        </div>
    </div>
    </div>
    <div class="evecards">
        <div class="eveimage">
            <img src="../assets/hood.png">

        <div class="evedetails">
            <h3 style="margin-top: -60px;"> Hoddie </h3>
            <h3> $5.00 </h3>
            <button class="cartbtn" @click="addToCart">Add to Cart</button>
        <p v-if="addedToCart" class="added-to-cart-message">Added to the cart</p>
        </div>
    </div>
    </div>

    </div>
    <div class="evecards" v-for="(product, index) in products" :key="index">
      <!-- Product details -->
      <div class="eveimage">
        <img :src="product.image">
        <div class="evedetails">
          <h3 style="margin-top: -60px;">{{ product.name }}</h3>
          <h3>{{ product.price }}</h3>
          <button class="cartbtn" @click="addToCart(product)">Add to Cart</button>
          <p v-if="addedToCart" class="added-to-cart-message">Added to the cart</p>
        </div>
      </div>
    </div>
 </template>

<script>


export default {
  components: {  },
  data() {
    return {
      products: [ /* Your product data */ ],
      addedToCart: false
    };
  },
  methods: {
    addToCart(product) {
      console.log("Adding product to cart:", product);
      // Add logic to emit an event with product details
      this.$root.$emit('add-to-cart', product);
    }
  }
};
</script>
    <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=poppins:wght@400;700&display=swap');

    .evebg2 {
  background-image: url('~@/assets/dis2.jpg'); /* Assuming 'src' is your root directory */
  
  background-position: center;
  height: 50vh; /* Set the height as needed */
  /* Add any other styles you want */
}
.box{
    display: grid;
    grid-row-gap: nowrap;
    grid-template-columns: repeat(3, 0.25fr);
    justify-content: center;
    align-items: center;
    gap: 100px;
    font-family: 'popins', sans-serif;


}
.evecards{
    position: relative;
    width: 400px;
    height: 500px;
    background: transparent ;
    color: black;
    border-radius: 50px;
    margin: 0 auto;
    box-shadow: 0 3px 10px rgba(0,0,0,0.2);


}
.evecards::before,
.evecards::after{
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
    height: 100%;
    background: #ffffff;
    border-radius: 50px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.2);
    z-index: -1;


}

.evecards:hover::after{
    transform: rotate(10deg);


}

.evecards:hover::before{
    transform: rotate(20deg);

}
.eveimage{
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: 50px 50px 50px 50px;
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 10px;
    background: #ffffff;
    right: 10px;
    bottom: 10px;
    transition: .5s;
}

.evecards:hover .eveimage{
    transform: scale(1.1);
    transition: .5s;
    bottom: 75px;
}
.eveimage{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
}
.evedetails{
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 10px;
    height: 55px;

}
h3{
    font-size: 18px;
    margin-top: 5px;
    padding: 0;
    font-weight: 20px;
    text-align: center;
    line-height: 1.15em;

}

h3 span{
    font-weight: 400;
    font-size: 15px;
    color: #050000;
}
.cartbtn {
  appearance: none;
  background-color: transparent;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3B3B3B;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  will-change: transform;
}

.cartbtn:disabled {
  pointer-events: none;
}

.cartbtn:hover {
  color: #fff;
  background-color: #1A1A1A;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.cartbtn:active {
  box-shadow: none;
  transform: translateY(0);
}

    </style>
