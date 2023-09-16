export function getDataFunc(
  temperatureValue,
  humidityValue,
  lightIntensityValue,
  waterStatus,
  fanStatus,
  ventilationStatus,
  fertilizerStatus,
  soilStatus,
  url
) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((res) => res.controlData)
    .then((res) => {
      temperatureValue.innerHTML = res.temp;
      humidityValue.innerHTML = res.humidity;
      lightIntensityValue.innerHTML = res.lightItensity;

      if (res.waterStatus) {
        waterStatus.innerHTML = "Watered";
      } else {
        waterStatus.innerHTML = "Not Watered";
      }

      fanStatus.innerHTML = res.fans ? "on" : "off";
      ventilationStatus.innerHTML = res.ventilation ? "open" : "closed";
      fertilizerStatus.innerHTML = res.fertilizer ? "added" : "not added";
      soilStatus.innerHTML = res.soil ? "changed" : "not changed";
    });
}
export async function postDataFunc(obj) {
  fetch("http://127.0.0.1:5000/postDataFunc", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer ",
    },
    method: "POST",
    body: JSON.stringify(obj),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

export function getDataFuncObj(url) {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((res) => res.controlData);
}
