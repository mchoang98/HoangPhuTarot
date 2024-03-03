// Combo special
var aChoice = document.getElementById("a-choice");
var bChoice = document.getElementById("b-choice");

var costList = document.getElementsByClassName("cost-style");

aChoice.addEventListener("click", function(){
    document.getElementsByClassName("a-choice")[0].style.visibility="visible";
    document.getElementsByClassName("b-choice")[0].style.visibility="hidden";

});

bChoice.addEventListener("click", function(){
    document.getElementsByClassName("a-choice")[0].style.visibility="hidden";
    document.getElementsByClassName("b-choice")[0].style.visibility="visible";

});

Array.from(costList).forEach((element,index) => {
    element.addEventListener("click", function(){
        for(let i = 0; i < costList.length; i++){
            costList[i].classList.remove("active");
        }
        element.classList.add("active");
    })
});

// Other combo

var arrayOfDescripttion150K = 
[
    "Người yêu cũ",
    "Người yêu tương lai",
    "Dự định kinh doanh",
    "Đang độc thân",
    "Mỗi quan hệ bạn bè",
    "Hôn nhân gia đình",
    "Tình hình học tập",
    "Đang yêu xa",
    "Công việc hiện tại",
    "Tài chính tiền bạc"
]

var arrayOfDescripttion160K = 
[
    "Người yêu hiện tại",
    "Mối quan hệ mập mờ cũ",
    "Mối quan hệ mập mờ",
]
var arrayOfDescripttion175K = 
[
    "Đang có crush",
    "Mối quan hệ bạn bè",
]
var arrayOfDescripttion200K = 
[
    "Người yêu cũ Special",
]
var listBtn = document.getElementsByClassName("btn");
var listBtn150 = document.getElementsByClassName("normalBtn150");
console.log(listBtn.length);
var listBtn160 = document.getElementsByClassName("normalBtn160");
var listBtn175 = document.getElementsByClassName("normalBtn175");
var listBtn200 = document.getElementsByClassName("normalBtn200");
var listText= document.getElementsByClassName("choices-desc-normalCombo");
Array.from(listBtn).forEach(activeBtn);

function activeBtn (element, index){
    element.addEventListener("click",function(){
        for(let i = 0; i < listBtn.length; i++){
            listBtn[i].classList.remove("activeBtn");
        }
        element.classList.add("activeBtn");
            console.log(element.classList[1].slice(-3));
            switch(element.classList[1].slice(-3)){
                case "150":
                    listText[0].innerHTML = arrayOfDescripttion150K[index];
                case "160":
                    console.log(index);
                    listText[1].innerHTML = arrayOfDescripttion160K[index - listBtn150.length];
                case "175":
                    listText[2].innerHTML = arrayOfDescripttion175K[index - listBtn150.length - listBtn160.length];
                case "200":
                    listText[3].innerHTML = arrayOfDescripttion200K[index - listBtn150.length - listBtn160.length - listBtn175.length];
            }  
    })
}