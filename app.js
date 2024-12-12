const body = document.getElementsByName("body");
let slider = document.getElementsByClassName("Slider");
const shoes = document.querySelectorAll(".shoes");
let index = 0;
const wrapper = document.querySelector(".sliderWrapper");
const totalShoes = shoes.length;
// wrapper.style.transform = 'translateX()';
// console.log(totalShoes);
// function moveSlider(event){
//     event.preventDefault();
// }
const product = document.getElementsByClassName("productDetails");
const products = [
    {
        id : 0,
        title : "AIR JORDAN WMNS",
        prise : 199,
        colors : [
            {
                code : "black",
                img : "WMNS+AIR+JORDAN+1+MID (3) (1).png",
            },
            {
                code : "white",
                img : "WMNS_white.png"
            },
        ],
    },
    {
        id : 1,
        title : "Air_Jordan_6",
        prise : 119,
        colors : [
            {
                code : "white",
                img : "AIR+JORDAN+6+RETRO (6) (2).png"
            },
            {
                code : "skyblue",
                img : "AIR+JORDAN+6+RETRO (3) (1).png"
            },
        ],
    },
    {
        id : 2,
        title : "EBERNON",
        prise : 149,
        colors : [
            {
                code : "black",
                img : "JORDAN+HEIR+SERIES+PF (2) (1).png"
            },
            {
                code : "yellow",
                img : "JORDAN+HEIR+SERIES+PF (6) (1).png"
            }
        ],
    },
    {
        id : 3,
        title : "Air jordan RETRO 4",
        prise : 179,
        colors : [
            {
                code : "skyblue",
                img : "AIR+JORDAN+4+RETRO+(GS) (4) (1).png"
            },
            {
                code : "gray",
                img : "AIR+JORDAN+4+RM+(GS) (1).png"
            }
        ],
    },
    {
        id : 4,
        title : "TATUM",
        prise : 199,
        colors : [
            {
                code : "SKYBLUE",
                img : "JORDAN+TATUM+2+GPX+PF (5).png"
            },
            {
                code : "limegreen",
                img : "JORDAN+TATUM+2+PF (1).png"
            }
        ],
    },
];
const Image = [
    {
        img : [
            "WMNS+AIR+JORDAN+1+MID.jpeg",
            "WMNS+AIR+JORDAN+1+MID (1).jpeg",
            "WMNS+AIR+JORDAN+1+MID (2).jpeg",
            "WMNS+AIR+JORDAN+1+MID (3).jpeg"
        ]
    }
]
let chosenProduct = products[0];
const currentProductImg = document.querySelector(".productImg");
const currentProductName = document.querySelector(".productName");
const currentProductPrise = document.querySelector(".productPrise");
const menuItem = document.querySelectorAll(".menuItem");
const currentColor = document.querySelectorAll(".box");
currentColor.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        currentProductImg.src = products[0].colors[index].img
        console.log(index)
    })
})


menuItem.forEach((item,index)=>{
    item.addEventListener("click", (Index)=>{
        //change the curent slide
        wrapper.style.transform = `translateX(${-105 * index}vw)`;

        chosenProduct = products[index]

        currentProductName.textContent = chosenProduct.title;

        currentProductImg.src = chosenProduct.colors[0].img;

        currentProductPrise.textContent = chosenProduct.prise;

        currentColor.forEach((item,ind) =>{
            item.style.backgroundColor = chosenProduct.colors[ind].code;
        })

        currentColor.forEach((box,mainIndex)=>{
            box.addEventListener('click',(item)=>{
                console.log(index,"clicked")
                currentProductImg.src = chosenProduct.colors[mainIndex].img;
            })
        })


    })       
        
});
const buyDiv = document.getElementById("frame");
const but = document.getElementById("buyProduct");
but.addEventListener('click',(evt)=>{
    buyDiv.style.display = "inline";
    buyDiv.style.transition = '2s';
    buyDiv.style.transform = 'translateX(210vh)'
})
const cross = document.getElementById("cross")
cross.addEventListener("click",()=>{
    buyDiv.style.display = 'none'
})
    

