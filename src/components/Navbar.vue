<template>
  <div id="app">
    <nav class="sticky z-10" :class="{ 'sticky-top': isSticky }">
      <button>
        <div class="cart">
            <li><router-link to="/cart">Cart</router-link></li>
        </div>
        <ul>
          <li><router-link to="" style="color: antiquewhite;">Home</router-link></li>
          <li><router-link to="/contact">Contact us</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/register">Signin</router-link></li>
          <li>
            <template v-if="!isLoggedout">
              <router-link to="/blog"  >Login</router-link>
            </template>
            <template v-else>
              <router-link to="/blog">Logout</router-link>
              {{ user ? user.displayName || user.email : 'Guest' }}
              <button @click="logout">Logout</button>
            </template>
          </li>
          <div class="indicator"></div>
        </ul>
      </button>
    </nav>
    <router-view/>
  </div>
  
  <div class="evebg2" style="margin-top: 0px;" >
      </div>
</template>

<script>

export default {
  name: "Navbar",
  components: { },
  data() {
    return {
      isSticky: false,
      isLoggedIn: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isSticky = window.pageYOffset > 0;
    },
    checkAuthState() {
      // Check if the user is already logged in
      firebase.auth().onAuthStateChanged((user) => {
        this.isLoggedIn = !!user;
      });
    },
    logout() {
      // Logout function using Firebase Auth
      firebase.auth().signOut().then(() => {
        // After successful logout
        this.isLoggedIn = false;
        // Redirect to home or any other page if needed
        this.$router.push("/");
      }).catch((error) => {
        console.error("Logout error", error);
      });
    },
  },
};
const $indicator= document.querySelector('.indicator');
const $links = document.querySelectorAll('li a');


$links.forEach( ($link) => {
$link.addEventListener(
    'mousemove',
    (e) => {
        const{ offsetleft, offsetwidth } = e.targ
    }

);
}


);

</script>

<style>
@import url("https://use.fontawesome.com/releases/v.15.1/css/all.css");
@import url("https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900");
.evebg2 {
  background-image: url('~@/assets/dis2.jpg'); /* Assuming 'src' is your root directory */
  background-size: cover;
  background-position: center;
  height: 50vh; /* Set the height as needed */
  /* Add any other styles you want */
}
body{

    background-image: linear-gradient(rgba(70, 62, 62, 0.5),rgba(0,0,0,0.5)),url("@/assets/fbg1.jpg");

    background-size: center;
    width: 100%;
    height: 100%;
    font-family:'Poppins', sans-serif;

ul{
    list-style: none;
    display: flex;
    position: relative;
    padding: 0;
    margin: 0;
    font-family:'Poppins', sans-serif;

}

a {
  position: relative;
  background:transparent;
  color: white;
  font-size: 1em;
  text-decoration: none;
  display: inline-block;
  padding: 10px 20px;
 font-weight: 300;
 box-shadow: 0 15px 35px #00000033;
  backdrop-filter: blur(15px);
  overflow: hidden;
  border-radius: 20%;
}

a:hover{
  color: #000;
  background: #fff;
  box-shadow: 0 5px 15px #00000033;
  transform: scale(1.1);
  transition: 0.5s;
}


.indicator{
  position: absolute;
  z-index: 1;
  widows: 85px;
  height: 45px;
  top: 0;
  transition: 0.5s;
}




}

.sticky-top {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}
.cart{
    margin-left: 1300px;
    margin-bottom: -70px;
}

</style>
