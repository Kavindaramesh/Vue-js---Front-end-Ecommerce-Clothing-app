<template>
    <div class="welcome-page2">
        <div class="aboutcard">
            <div class="abcards">
              <img src="../assets/ab1.jpg">
              <div class="layer"></div>
              <div class="info">
                <h1>About us</h1>
                <p> Welcome to Fashion – Where Trending Fashion Dreams Come True!

</p>
                <button>Read More</button>
              </div>



            </div>


        </div>
        <div class="aboutcard" style="margin-left: 50px;" >
            <div class="abcards">
              <img src="../assets/con1.jpg">
              <div class="layer"></div>
              <div class="info">
                <h1 >Contact Us</h1>
                <p> Welcome to Fashion – .</p>
                <button>Read More</button>
              </div>



            </div>


        </div>

        <div class="aboutcard" style="margin-left: 50px;" >
            <div class="abcards">
              <img src="../assets/loc.jpg">
              <div class="layer"></div>
              <div class="info">
                <h1>Open hours</h1>
                <p>Welcome to Fashion  </p>
                <button>Read More</button>
              </div>



            </div>


        </div>





</div>

</template>


<style>
@import url('https://fonts.googleapis.com/css?family=Inter:wght@500;600;700&display=swap');

.welcome-page2 {
    background-image: url('../assets/bg4.jpg');
    filter: brightness(80%);
    background-size: cover;
    width: 100%;
    height: 92vh;
    margin-top: -10px;
    background-size: cover;
    background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
    /* Add any other background properties you need */
}

.aboutcard{

    display: flex;
    gap: 15px;

}
.abcards{
  filter: brightness(100%);
    position: relative;
    width: 600px;
    height: 750px;
    border-radius: 20px;
    overflow: hidden;
    transition: 0.5s;
    cursor: pointer;
}
.abcards img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
    transition: 0.5s;
}
.abcards:hover{
    transform: scale(1.05);
}
.abcards:hover img{
    filter: blur(2px);
}
.abcards .layer{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    clip-path: circle(0px at center);
    background: rgba(0,0,0,0.7);
    transition: 0.5s;
}

.abcards .info{
    position: absolute;
    color: rgb(255, 255, 255);
    bottom: -50%;
    padding: 20px;
    opacity: 0;
    transition: 0.5s bottom, 1.5s opacity;
}
.info h1{
    font-size: 30px;
    margin: 0;
    padding: 0;
    font-weight: 500;
}
.info p{
    font-size: 16px;
    margin-top: 10px;
    color: #fff;
}
.info button{
    padding: 10px 20px;
    background: #fff;
    border: none;
    outline: none;
    color: #000;
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.5s;
}
.abcards:hover,
.abcards:hover img,
.abcards:hover layer{
    opacity: 1;
    transform: scale(1.1);
}
.abcards:hover> layer{
  opacity: 1;

}
.abcards:hover .info{
    bottom: 0;
    opacity: 1;
}
 .aboutcard:hover> .abcards:not(:hover){
  filter: blur(2px);
 }
  .aboutcard:hover> .abcards:not(:hover) img{
    filter: blur(2px);
  }
  .aboutcard:hover> .abcards:not(:hover) .layer{
    opacity: 1;
  }
  .aboutcard:hover> .abcards:not(:hover) .info{
    bottom: 0;
    opacity: 1;
  }
  .aboutcard:hover> .abcards:not(:hover) .info h1{
    font-size: 30px;
    margin: 0;
    padding: 0;
    font-weight: 500;
  }
  .aboutcard:hover> .abcards:not(:hover) .info p{
    font-size: 16px;
    margin-top: 10px;
    color: #fff;
  }
  .aboutcard:hover> .abcards:not(:hover) .info button{
    padding: 10px 20px;
    background: #fff;
    border: none;
    outline: none;
    color: #000;
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.5s;
  }

  .footer .single {
  margin-bottom: 20px;
  display: flex;
}

.footer .single h4 {
  color: #333;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
}

.footer .single ul {
  padding-left: 0;
  list-style: none;
}

.footer .single ul li {
  margin-bottom: 8px;
}

.footer .single ul li a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer .single ul li a:hover {
  color: #333;
}



</style>
<script>


export default {

        data() {
                return {
                        activeTab: 'homeview',

                };
        }


};

</script>

