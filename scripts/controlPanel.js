import { getDataFunc } from "./getDataFunc.js";
import { postDataFunc } from "./getDataFunc.js";
import { getDataFuncObj } from "./getDataFunc.js";

let controlDataObj = getDataFuncObj("http://127.0.0.1:5000/getDataFunc");
console.log(controlDataObj);

let tempValue = document.querySelector("span.temperature span"),
  lightValue = document.querySelector("span.light span"),
  humValue = document.querySelector("span.humidity span"),
  wtrStatus = document.querySelector("span.plants"),
  fnStatus = document.querySelector("span.fans"),
  ventStatus = document.querySelector("span.ventilation"),
  fertStatus = document.querySelector("span.fertilizer"),
  slStatus = document.querySelector("span.soil");

const tempButtons = document.querySelectorAll("button.temperature"),
  lightButtons = document.querySelectorAll("button.light"),
  humButtons = document.querySelectorAll("button.humidity"),
  wtrButtton = document.querySelector("button.water-plants"),
  fnButtton = document.querySelector("button.turn-on-fans"),
  ventButtton = document.querySelector("button.open-ventilation"),
  fertButtton = document.querySelector("button.add-fertilizer"),
  slButtton = document.querySelector("button.change-soil");

humButtons.forEach((i) => {
  i.addEventListener("click", (e) => {
    if (e.target.classList.contains("decrease")) {
      humValue.innerHTML++;
    } else if (e.target.classList.contains("increase")) {
      humValue.innerHTML--;
    }
    controlDataObj.humidity = parseInt(humValue.innerHTML);
  });
});

//------------------------------------------------------------------------------------------------------

lightButtons.forEach((i) => {
  i.addEventListener("click", (e) => {
    if (e.target.classList.contains("decrease")) {
      lightValue.innerHTML++;
    } else if (e.target.classList.contains("increase")) {
      lightValue.innerHTML--;
    }
    controlDataObj.lightItensity = parseInt(lightValue.innerHTML);
  });
});

//------------------------------------------------------------------------------------------------------

tempButtons.forEach((i) => {
  i.addEventListener("click", (e) => {
    if (e.target.classList.contains("decrease")) {
      tempValue.innerHTML++;
    } else if (e.target.classList.contains("increase")) {
      tempValue.innerHTML--;
    }
    controlDataObj.temp = parseInt(tempValue.innerHTML);
  });
});

//------------------------------------------------------------------------------------------------------

wtrButtton.addEventListener("click", (e) => {
  wtrStatus.innerHTML = "Waiting for save to watering";
  controlDataObj.waterStatus = !controlDataObj.waterStatus;
});

//------------------------------------------------------------------------------------------------------
fnButtton.addEventListener("click", (e) => {
  fnStatus.innerHTML = "Waiting for save to watering";
  controlDataObj.fans = !controlDataObj.fans;
});

//------------------------------------------------------------------------------------------------------
ventButtton.addEventListener("click", (e) => {
  ventStatus.innerHTML = "Waiting for save to watering";
  controlDataObj.ventilation = !controlDataObj.ventilation;
});

//------------------------------------------------------------------------------------------------------
fertButtton.addEventListener("click", (e) => {
  fertStatus.innerHTML = "Waiting for save to watering";
  controlDataObj.fertilizer = !controlDataObj.fertilizer;
});

//------------------------------------------------------------------------------------------------------
slButtton.addEventListener("click", (e) => {
  slStatus.innerHTML = "Waiting for save to watering";
  controlDataObj.soil = !controlDataObj.soil;
});

//------------------------------------------------------------------------------------------------------

getDataFunc(
  tempValue,
  humValue,
  lightValue,
  wtrStatus,
  fnStatus,
  ventStatus,
  fertStatus,
  slStatus,
  "http://127.0.0.1:5000/getDataFunc"
);

//------------------------------------------------------------------------------------------------------

const saveButton = document.querySelector(".saveBtn");

saveButton.addEventListener("click", function () {
  postDataFunc(controlDataObj);
  setTimeout(
    getDataFunc(
      tempValue,
      humValue,
      lightValue,
      wtrStatus,
      fnStatus,
      ventStatus,
      fertStatus,
      slStatus,
      "http://127.0.0.1:5000/getDataFunc"
    ),
    1500
  );
});
