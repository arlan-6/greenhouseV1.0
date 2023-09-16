import { getDataFunc } from "./getDataFunc.js";

const scrollContainer = document.querySelector(".main-info");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  if (evt.deltaY > 0) {
    var q = 90;
  } else {
    var q = -90;
  }
  scrollContainer.scrollLeft += q;
});

const temperatureValue = document.querySelector("span.temperature"),
  humidityValue = document.querySelector("span.humidity"),
  lightIntensityValue = document.querySelector("span.lightI"),
  waterStatus = document.querySelector("span.waterStatus"),
  fanStatus = document.querySelector("span.fanStatus"),
  ventilationStatus = document.querySelector("span.ventilationStatus"),
  fertilizerStatus = document.querySelector("span.fertilizerStatus"),
  soilStatus = document.querySelector("span.soilStatus");

getDataFunc(
  temperatureValue,
  humidityValue,
  lightIntensityValue,
  waterStatus,
  fanStatus,
  ventilationStatus,
  fertilizerStatus,
  soilStatus,
  "http://127.0.0.1:5000/getDataFunc"
);
