// const cookie = {
//     base: "cookie",
//     madeIn: "korea"
// };

// const chocochipCookie = {
//     ...cookie,
//     toping: "chocochip"
// };

// const blueberryCookie = {
//     ...cookie,
//     toping: "blueberry"
// };

// const strawberryCookie = {
//     ...cookie,
//     toping: "strawberry"
// };

// console.log(chocochipCookie);

const noTopingCookies = ["촉촉한 쿠키", "안촉촉한 쿠키"];
const topingCookies = ["바나나쿠키", "블루베리 쿠키", "딸기쿠기", "초코칩쿠키"];

const allCookies = [...noTopingCookies,"함정쿠키", ...topingCookies];
console.log(allCookies);