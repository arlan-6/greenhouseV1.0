const login_kiru = document.querySelector(".login-kiru"),
  modalW = document.querySelector(".modalW"),
  info_box3 = document.querySelector(".info-box2"),
  formKiru = document.querySelector(".kiru form"),
  kiruSub = document.querySelector(".kiruSub"),
  inputKiru = document.querySelectorAll(".kiru input");

let panelControl = false;

// if (panelControl) {
//   info_box3.classList.remove("none");
// } else info_box3.classList.add("none");

// inputKiru.forEach((i) => {
//   i.addEventListener("click", (e) => {
//     e.target.classList.remove("qate");
//   });
// });

login_kiru.addEventListener("click", (e) => {
  if (e.target.innerHTML == "Kiry") {
    modalW.classList.add("activee");
    modalW.classList.remove("none");
    document.querySelector("body").classList.add("h");
  } else if (e.target.innerHTML == "Shygu") {
    e.target.innerHTML = "Kiry";
    panelControl = false;
    if (panelControl) {
      info_box3.classList.remove("none");
    } else info_box3.classList.add("none");
  }
});

modalW.addEventListener("click", (e) => {
  if (e.target === modalW) {
    document.querySelector("body").classList.remove("h");
    modalW.classList.remove("activee");
    modalW.classList.add("none");
  }
});

kiruSub.addEventListener("click", (e) => {
  e.preventDefault();
  const dataform = new FormData(formKiru);
  funcKiru(Object.fromEntries(dataform.entries()));
});

const funcKiru = function (dataForm) {
  fetch("http://127.0.0.1:5000/kiru", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(dataForm),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        alert("something is wrong");
      }
    })
    .then((jsonResponse) => {
      console.log(jsonResponse);
      if (jsonResponse == "1") {
        alert("sucsess");
        formKiru.reset();
        document.querySelector("body").classList.remove("h");
        inputKiru.forEach((i) => {
          i.classList.remove("qate");
        });
        modalW.classList.remove("activee");
        modalW.classList.add("none");
        panelControl = true;
        if (panelControl) {
          info_box3.classList.remove("none");
        } else {
          info_box3.classList.add("none");
        }
        login_kiru.innerHTML = "Shygu";
      } else {
        formKiru.reset();
        inputKiru.forEach((i) => {
          i.classList.add("qate");
        });
      }
    })
    .catch((err) => console.error(err));
};
