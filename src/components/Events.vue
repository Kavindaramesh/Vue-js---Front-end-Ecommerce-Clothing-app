<template>
    <div class="evebg" style="margin-top: 40px;" >
        </div>


<div class="box" style="margin-top: 70px;" >
    <div class="evecards">
        <div class="eveimage">
            <img src="../assets/kidcs.jpg">

        <div class="evedetails">
            <h3> Kid's Section </h3>
            
        </div>
    </div>
    </div>

    <div class="evecards">
        <div class="eveimage">
            <img src="../assets/mcs.jpg">

        <div class="evedetails">
            <h3 > Men's Section </h3>
           
        </div>
    </div>
    </div>
    <div class="evecards">
        <div class="eveimage">
            <img src="../assets/lcs.jpg">

        <div class="evedetails">
            <h3> Women's Sections </h3>
            
            </div>
        </div>
    </div>
</div>
<div class="evebg2" style="margin-top: 70px;" >

        </div>
</template>

<script>

 export default {
            data() {
                    return {

                            activeTab: 'homeview' ,
                            components: {  },
                    };
            }


    };
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=poppins:wght@400;700&display=swap');


.evebg {
  background-image: url('~@/assets/sub.jpg'); /* Assuming 'src' is your root directory */
  background-size: center;
  background-position: center;
  height: 50vh; /* Set the height as needed */
  /* Add any other styles you want */
}
.evebg2 {
  background-image: url('~@/assets/dis2.jpg'); /* Assuming 'src' is your root directory */
  background-size: cover;
  background-position: center;
  height: 50vh; /* Set the height as needed */
  /* Add any other styles you want */
}
.box{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    font-family: 'popins', sans-serif;


}
.evecards{
    position: relative;
    width: 500px;
    height: 400px;
    background:#0c0c0c ;
    color: black;
    border-radius: 3px;
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
    border-radius: 3px;
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
    border-radius: 3px 3px 0 0;
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 10px;
    background: #dfd6d6;
    right: 10px;
    bottom: 10px;
    transition: .7s;
}

.evecards:hover .eveimage{
    transform: scale(1.1);
    transition: .9s;
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


</style>
