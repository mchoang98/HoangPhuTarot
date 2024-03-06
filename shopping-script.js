import dataShopping from "./dataShopping.json" assert {type: "json"};
console.log("Hello")
// Combo special
// var aChoice = document.getElementById("a-choice");
// var bChoice = document.getElementById("b-choice");

// var costList = document.getElementsByClassName("cost-style");

// aChoice.addEventListener("click", function () {
//     document.getElementsByClassName("a-choice")[0].style.visibility = "visible";
//     document.getElementsByClassName("b-choice")[0].style.visibility = "hidden";

// });

// bChoice.addEventListener("click", function () {
//     document.getElementsByClassName("a-choice")[0].style.visibility = "hidden";
//     document.getElementsByClassName("b-choice")[0].style.visibility = "visible";

// });

// Array.from(costList).forEach((element, index) => {
//     element.addEventListener("click", function () {
//         for (let i = 0; i < costList.length; i++) {
//             costList[i].classList.remove("active");
//         }
//         element.classList.add("active");
//     })
// });




// fetch("./data.json")
//     .then((response)=>response.json())
//     .then((json) => console.log(json));

var shoppingList = document.getElementById("shopping-container");
var comboItem = "";

for (var item of dataShopping) {
    comboItem += `
    <div class="combo">
        <h1 class="combo-tittle">${item.name}</h1> 
        <div class="content">
            <div class="content-description">  
            ${checkContent()}
            </div> 
            <div class="normalCombo-shopping">
                <div class="normal-choices">
                ${renderChoiceName()}
                </div>
                ${renderDescription()}
                ${renderCostList()}
                <div class="cartBuy">
                    <button class="button cartBtn">Thêm vào giỏ hàng</button>
                    <button class="button cartBtn">Mua ngay</button>
                </div>
            </div>               
        </div>
    </div>  `;
}

function checkContent() {
    var checkCont = ``;
    if (item.image != "" && item.description != "") {
        checkCont += `<img src=${item.image} alt="img-here"></img>
                    <p class="description-para">${item.description}</p>`
    } else if (item.image != "") {
        checkCont += `<img src=${item.image} alt="img-here"></img>`
    } else {
        checkCont += `<p class="description-para">${item.description}</p>`
    }
    return checkCont;
}

function renderChoiceName(){
    var choiceNames = "";
    for (let choice of item.choices) {
        choiceNames += `<button class="${item.id} button normalBtn150 btn ">${choice.name}</button>`;
    }
    return choiceNames;
}

function renderDescription(){
    var descript = ``;
    for(let desc of item.choices){
        descript += `<p class="choices-desc-normalCombo hidden">${desc.description}</p>`
    }
    return descript;
}

function renderCostList(){
    var costLists = ``;
    var costLi = ``
    for(let pri of item.choices){
        if(pri.price != []){
            for(let i = 0; i < pri.price.length; i++){
                costLi += `<li class="cost-style">${pri.price[i]}</li>`
            }
        }        
        costLists += ` <div class="cost hidden">
                            <ul class="cost-list">
                                ${costLi}
                            </ul>
                        </div> `;
        costLi = ``;
                
    }
    return costLists;
}
shoppingList.innerHTML = comboItem;
     
// // Other combo
var listBtn = document.getElementsByClassName("btn");
var listText = document.getElementsByClassName("choices-desc-normalCombo");
var listCost = document.getElementsByClassName("cost");
var arrayId = [];
var countItemArray = [0];
var indexArray = 0;

console.log(listBtn);

// Đếm những id hiện có
Array.from(listBtn).forEach((element) => {
    if(arrayId[indexArray] != element.classList[0]){
        arrayId[indexArray] = element.classList[0];
        indexArray++;
    }
})

for(let i = 0; i < arrayId.length-1; i++){
    if(arrayId[i] != arrayId[i + 1]){
        countItemArray.push(i+1);
    }
}

for(let i = 0; i < countItemArray.length; i++){
    listText[countItemArray[i]].classList.remove("hidden");
    listCost[countItemArray[i]].classList.remove("hidden");
}

Array.from(listBtn).forEach((element, index) => {
    element.addEventListener("click", function () {
        var inc = 0;
        for(var i = 0; i < countItemArray.length; i++){
            if(index <= countItemArray[i]){
                inc = i - 1;
                break;
        }
    }
    console.log(inc);
    console.log(countItemArray[inc])
        for(let i =  countItemArray[inc] - 1; i < countItemArray[inc + 1]; i++){
            listText[countItemArray[i]].classList.add("hidden");
            listCost[countItemArray[i]].classList.add("hidden");
        }
   
        listText[index].classList.remove("hidden");
        listCost[index].classList.remove("hidden");
    
})
})
