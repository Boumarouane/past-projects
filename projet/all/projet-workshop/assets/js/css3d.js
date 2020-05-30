
let parent = document.querySelector(".css3d")

console.log(parent);

let childOne = document.querySelector(".child1")
console.log(childOne);

let childTwo = document.querySelector(".child2")
console.log(childTwo);

let childThree = document.querySelector(".child3")
console.log(childThree);

let childFour = document.querySelector(".child4")
console.log(childFour);

let childFive = document.querySelector(".child5")
console.log(childFive);

let childSix = document.querySelector(".child6")
console.log(childSix);

let childSeven = document.querySelector(".child7")
console.log(childSeven);

let childEight = document.querySelector(".child8")
console.log(childEight);

let childNine = document.querySelector(".child9")
console.log(childNine);



const childOneAdd = childOne.addEventListener("mouseover", () => {
    parent.classList.add("animOne")
})

const childOneDelete = childTwo.addEventListener("mouseleave", () => {
    parent.classList.remove("animOne")
    parent.classList.add("base")
})





const childTwoAdd = childTwo.addEventListener("mouseover", () => {
    parent.classList.add("animTwo")
})

const childTwoDelete = childTwo.addEventListener("mouseleave", () => {
    parent.classList.remove("animTwo")
    parent.classList.add("base")
})





const childThreeAdd = childThree.addEventListener("mouseover", () => {
    parent.classList.add("animThree")
})

const childThreeDelete = childThree.addEventListener("mouseleave", () => {
    parent.classList.remove("animThree")
    parent.classList.add("base")
})




const childFourAdd = childFour.addEventListener("mouseover", () => {
    parent.classList.add("animFour")
})

const childFourDelete = childFour.addEventListener("mouseleave", () => {
    parent.classList.remove("animFour")
    parent.classList.add("base")
})





const childFiveAdd = childFive.addEventListener("mouseover", () => {
    parent.classList.add("animFive")
})

const childFiveDelete = childFive.addEventListener("mouseleave", () => {
    parent.classList.remove("animFive")
    parent.classList.add("base")
})



const childSixAdd = childSix.addEventListener("mouseover", () => {
    parent.classList.add("animSix")
})

const childSixDelete = childSix.addEventListener("mouseleave", () => {
    parent.classList.remove("animSix")
    parent.classList.add("base")
})




const childSevenAdd = childSeven.addEventListener("mouseover", () => {
    parent.classList.add("animSeven")
})

const childSevenDelete = childSeven.addEventListener("mouseleave", () => {
    parent.classList.remove("animSeven")
    parent.classList.add("base")
})
        


const childEightAdd = childEight.addEventListener("mouseover", () => {
    parent.classList.add("animEight")
})

const childEightDelete = childEight.addEventListener("mouseleave", () => {
    parent.classList.remove("animEight")
    parent.classList.add("base")
            
})




const childNineAdd = childNine.addEventListener("mouseover", (e) => {
    parent.classList.add("animNine")
})

const childNineDelete = childNine.addEventListener("mouseleave", () => {
    parent.classList.remove("animNine")
    parent.classList.add("base")
})






