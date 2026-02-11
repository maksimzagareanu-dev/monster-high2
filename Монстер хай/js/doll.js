const doll = JSON.parse(localStorage.getItem("doll"));
const page = document.getElementById("page");

page.classList.add("theme-" + doll.theme);

document.getElementById("info").innerHTML = `
  <h1>${doll.name}</h1>
  <img src="${doll.image}" width="300">
  <p>${doll.shortInfo}</p>
  <p><b>Характер:</b> ${doll.character}</p>
  <p><b>Коллекция:</b> ${doll.collection}</p>
`;

if (doll.animation === "bats") {
  for (let i = 0; i < 5; i++) {
    const bat = document.createElement("img");
    bat.src = "assets/effects/bat.png";
    bat.className = "bat";
    bat.style.top = Math.random() * 80 + "vh";
    document.body.appendChild(bat);
  }
}
