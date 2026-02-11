const container = document.getElementById("dolls");
const search = document.getElementById("search");
const yearFilter = document.getElementById("yearFilter");
const collectionFilter = document.getElementById("collectionFilter");

function fillFilters() {
  [...new Set(dolls.map(d => d.year))].forEach(y => {
    yearFilter.innerHTML += `<option value="${y}">${y}</option>`;
  });
  [...new Set(dolls.map(d => d.collection))].forEach(c => {
    collectionFilter.innerHTML += `<option value="${c}">${c}</option>`;
  });
}

function render(list) {
  container.innerHTML = "";
  list.forEach(d => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div style="position:relative">
        <img src="${d.image}">
        <div class="overlay">${d.year} • €${d.price}</div>
      </div>
      <h4>${d.name}</h4>
    `;
    card.onclick = () => {
      localStorage.setItem("doll", JSON.stringify(d));
      location.href = "doll.html";
    };
    container.appendChild(card);
  });
}

function apply() {
  let list = dolls;
  if (search.value)
    list = list.filter(d => d.name.toLowerCase().includes(search.value.toLowerCase()));
  if (yearFilter.value)
    list = list.filter(d => d.year == yearFilter.value);
  if (collectionFilter.value)
    list = list.filter(d => d.collection == collectionFilter.value);
  render(list);
}

search.oninput = apply;
yearFilter.onchange = apply;
collectionFilter.onchange = apply;

fillFilters();
render(dolls);
