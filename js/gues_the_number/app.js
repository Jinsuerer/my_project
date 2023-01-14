
const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber)

document.querySelector(".btn").addEventListener("click" , () => {

    const guessNumber = Number(document.querySelector(".input").value);
    // console.log(guessNumber);
    const bodyBgColor = document.querySelector(".container");
    const newH4 = document.querySelector("h4")
    const newImg = document.querySelector("img")
    

if( randomNumber > guessNumber ){
    alert("Up")


}else if (randomNumber < guessNumber) {
    alert("Down")
    
}else{
    alert("the spell is broken")
    bodyBgColor.style.backgroundColor = "orange"
    newH4.textContent = "clever witch"
    newImg.style.borderRadius = "30px"
    document.querySelector("img").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLdPNV6CvRQWP93CBCH6KtSN0NeVC_ZqsiM7RBsRnNCgztqZrkR3_i2AhNBuKsauVeBUA&usqp=CAU"
    
}
document.querySelector(".input").value = "";
document.querySelector(".input").focus() = "";

})




