let name = "iri miyvars goo";

console.log(name);

let satauri = document.getElementById("satauri");

console.log(satauri);

let isFuck = false;

satauri.addEventListener("mouseover", function () {
  if (isFuck == false) {
    satauri.textContent = "fuck u";
    isFuck = true;
  } else {
    satauri.textContent = "Me and You";
    isFuck = false;
  }
});

let saidumloElementi = document.getElementById("saidumlo");

saidumloElementi.addEventListener("mouseover", function () {
  saidumloElementi.textContent =
    "es aris saidmlo ar unda gaamjavno adamianebo chven vart ucxo planetelebi";
});

saidumloElementi.addEventListener("mouseout", function () {
  saidumloElementi.textContent = "GRIFID SAIDUMLO";
});

let btnElement = document.getElementById("btn");

btnElement.addEventListener("mouseover", function () {
  btnElement.style.position = "absolute";
  btnElement.style.top = Math.floor(Math.random() * 300) - 1 + "px";
  btnElement.style.left = Math.floor(Math.random() * 500) - 1 + "px";
});

let boxElement = document.getElementById("box");

boxElement.ondrag = function (event) {
  console.log(event);
  console.log(
    boxElement.offsetHeight,
    boxElement.offsetLeft,
    boxElement.offsetParent,
    boxElement.offsetTop,
    boxElement.offsetWidth
  );
  boxElement.style.position = "absolute";
  boxElement.style.top = event.cl;
};
