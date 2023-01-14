
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
   document.querySelector("body").style.backgroundImage =  "url('https://static.vecteezy.com/system/resources/thumbnails/009/637/330/small/cute-funny-halloween-black-cat-witch-on-flying-broom-with-full-moon-and-bats-watercolor-illustration-vector-png.png')"
   
  }
    

document.querySelector(".input").value = "";
document.querySelector(".input").focus() = "";

});




