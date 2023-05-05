// let a = []; //{}. 23(숫자값), "false", Infinity - true가 아니어도 true 인식
// // null, undefined, 0, NaN, ""- false
// if(a){
//     console.log("True")
// }
// else{
//     console.log("False")
// }

const getName = (person) =>{
    if(!person){
        //false Not => true
        return "객채가 참이 아님"
    }
    return person.name;
}

let person;
const name = getName(person);
console.log(name);

