if (!localStorage.getItem("user")) {
  localStorage.setItem(
    "user",
    JSON.stringify({
      familya: "Ruziyev",
      tugilgan_kuni: "2011-09-14",
      id: "45680",
      parol: "56950",
      ustoz: "Akmal",
      Grupa: "F2-1275",
    })
  );
}

const idInput = document.querySelector(".number-input");
const parolInput = document.querySelector(".password-input");
const kirishBtn = document.querySelector(".enter");
kirishBtn.disabled = true;

function checkInputs() {
  let idValue = idInput.value.trim();
  let parolValue = parolInput.value.trim();
  kirishBtn.disabled = !(idValue && parolValue);
}

idInput.addEventListener("input", checkInputs);
parolInput.addEventListener("input", checkInputs);

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  let userData = JSON.parse(localStorage.getItem("user"));

  if (idInput.value === userData.id && parolInput.value === userData.parol) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "profile.html";
  } else {
    alert("ID yoki parol xato!");
  }
});

let user = JSON.parse(localStorage.getItem("user"));
document.getElementById("familya").textContent = user.familya;
document.getElementById("id").textContent = user.id;
document.getElementById("ustoz").textContent = user.ustoz || "N/A";
document.getElementById("Grupa").textContent = user.Grupa || "N/A";

