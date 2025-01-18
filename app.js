const wrapperDive = document.createElement("div");
const image = document.createElement("img");
image.src = "./Images/Man.svg";

const body = document.body;
const h2 = document.createElement("h2");
const btn1 = document.createElement("btn");
const btn2 = document.createElement("btn");
const btn3 = document.createElement("btn");
const btn4 = document.createElement("btn");
const btn5 = document.createElement("btn");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const container = document.createElement("div");

wrapperDive.append(btn1, btn2, btn3, btn4, btn5);
wrapperDive.appendChild(image);
wrapperDive.appendChild(image);

wrapperDive.appendChild(h2);
h2.textContent = "Jessica Randall";
btn1.textContent = "GitHub";
btn2.textContent = "Frontend Mentor";
btn3.textContent = "LinkedIn";
btn4.textContent = "Twitter";
btn5.textContent = "Instagram";
p1.textContent = "London, United Kingdom";
p2.textContent = "Front - end developer and avid reader.";
// Style
body.style.background = "Black";
p2.style.paddingBottom = "20px";
h2.style.color = "#FFFFFF";
p1.style.color = "#C4F82A";
p2.style.color = "#FFFFFF";
body.style.height = "100vh";
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.flexDirection = "column";
btn1.style.padding = "10px 120px";
btn1.style.background = "#333333";
btn1.style.color = "#ffffff";
btn2.style.padding = "10px 90px";
btn2.style.background = "#333333";
btn2.style.color = "#ffffff";

btn3.style.padding = "10px 115px";
btn3.style.background = "#333333";
btn3.style.color = "#ffffff";

btn4.style.padding = "10px 120px";
btn4.style.background = "#333333";
btn4.style.color = "#ffffff";

btn5.style.padding = "10px 110px";
btn5.style.background = "#333333";
btn5.style.color = "#ffffff";

btn1.style.marginBottom = "16px";
btn2.style.marginBottom = "16px";
btn3.style.marginBottom = "16px";
btn4.style.marginBottom = "16px";
btn5.style.marginBottom = "16px";

body.append(image, h2, p1, p2, btn1, btn2, btn3, btn4, btn5);
