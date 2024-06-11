<template>
    <div class="customer-reviews" style="height: 400px; background-color: rgb(209, 171, 206)" z-index ="5">
        <h2 class="review-heading" style="padding-top: 20px; margin-top: -20px; "><b>Customer Reviews</b></h2>
        <div style="margin-top: 50px;" class="review-row">
            <div v-for="review in reviews" :key="review.id" class="review">
                <div class="review-box">
                    <div class="review-header">
                        <img :src="review.avatar" alt="Customer Avatar" class="avatar">
                        <div class="review-info">
                            <h3>{{ review.name }}</h3>
                            <p>{{ review.date }}</p>
                            <p>{{ review.stars }}</p>
                        </div>
                    </div>
                    <p class="review-content">{{ review.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import avatar1 from "@/assets/cus1.jpg";
import avatar2 from "@/assets/cus2.jpg";
import avatar3 from "@/assets/cus3.jpg";

export default {
    data() {
        return {
            reviews: [
                {
                    id: 1,
                    name: "Kevin Smith",
                    avatar: avatar1,
                    date: "December 5, 2023",
                    stars: "⭐⭐⭐⭐⭐",
                    content: "The Best"
                },
                {
                    id: 2,
                    name: "Emilly William",
                    avatar: avatar2,
                    date: "December 12, 2023",
                    stars: "⭐⭐⭐⭐⭐",
                    content: "#1 Best Shop"
                },
                {
                    id: 3,
                    name: "Ben Stonebridge",
                    avatar: avatar3,
                    date: "January 1, 2024",
                    stars: "⭐⭐⭐⭐",
                    content: "Very Good"
                }
            ]
        };
    }
};
</script>

<style scoped>
.body{
    background-color: #f5f5f5;
}

.customer-reviews {
    padding: 50px 0;
    background-color: #f5f5f5;
    text-align: center;
    font-family: "Quicksand", sans-serif;
    color: #333;

}


.review-row {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto; /* Center the review boxes */
}



.review-box {
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom: 0px; /* Adjust the margin to reduce distance */
    width: 60%;
    text-align: justify;
}

.review-header {
    /* margin-top: 20px; */
    display: flex;
    align-items: center;
    margin-bottom: 0px;
}

.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 10px;
}



.review-content {
    
    font-size: 15px;
}

.review-heading {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
}
p{
    color: aliceblue;
}
</style>