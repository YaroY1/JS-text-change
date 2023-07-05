const btnUp = document.querySelector(".sizeUp");
const btnDown = document.querySelector(".sizeDown");
const btnColor = document.querySelector(".color");
const p = document.querySelector("p");

let fontSize = 36;
const fontUp = () => {
	if (fontSize >= 106) return;
	fontSize += 5;
	p.style.fontSize = fontSize + "px";
};
const fontDown = () => {
	if (fontSize <= 21) {
		return;
	}
	fontSize -= 5;
	p.style.fontSize = fontSize + "px";
};
const changeColor = () => {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
	p.style.color = `rgb(${r},${g},${b})`;
};

btnUp.addEventListener("click", fontUp);
btnDown.addEventListener("click", fontDown);
btnColor.addEventListener("click", changeColor);
