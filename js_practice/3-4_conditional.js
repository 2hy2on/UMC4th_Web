// function isKoreanFood(food){
//     if(["불고기", "떡볶이", "비빔밥"].includes(food)){
//         return true;
//     }
//     return false;
// }

// const food1 = isKoreanFood("불고기");
// console.log(food1);

const meal = {
    한식: "불고기",
    중식: "마라탕",
    일식: "초밥",
    양식: "스테이크",
    인도식: "카레"
};

const getMeal =(mealType) =>{
    // if(mealType === '한식') return "불고기";
    // if(mealType === '양식') return "파스타";
    // if(mealType === '중식') return "마라탕";
    // if(mealType === '일식') return "초밥";
    // return "굶기";
    return meal[mealType] || "굶기";
}

console.log(getMeal("한식"));
console.log(getMeal());
