function getTagClass(status) {
  if (status === "Disponible") return "tag tag-green";
  if (status === "En tratamiento") return "tag tag-amber";
  if (status === "Adoptado" || status === "Historia fundadora") return "tag tag-sky";
  return "tag tag-neutral";
}

function createAnimalCard(animal, mode = "help") {
  const article = document.createElement("article");
  article.className = "pet-card";

  article.innerHTML = `
    <img src="${animal.image}" alt="${animal.name}" />
    <div class="pet-body">
      <div class="pet-top">
        <div>
          <h3>${animal.name}</h3>
          <p>${getAgeText(animal.birthday)}</p>
        </div>
        <span class="${getTagClass(animal.status)}">${animal.status}</span>
      </div>
      <p>${animal.shortStory}</p>
      <div class="pet-actions">
        <a class="btn btn-dark" href="animal.html?slug=${animal.slug}">Ver su historia</a>
        <a class="btn btn-light" href="https://wa.me/5218135049027?text=${encodeURIComponent(animal.whatsappText)}" target="_blank" rel="noopener noreferrer">
          ${mode === "help" ? "Quiero ayudar" : "Escribir a Patricia"}
        </a>
      </div>
    </div>
  `;

  return article;
}

function renderAnimals() {
  const adoptionList = document.getElementById("adoption-list");
  const rescueList = document.getElementById("rescue-list");
  const adoptedList = document.getElementById("adopted-list");

  if (adoptionList) animalsData.adoption.forEach(animal => adoptionList.appendChild(createAnimalCard(animal, "help")));
  if (rescueList) animalsData.rescue.forEach(animal => rescueList.appendChild(createAnimalCard(animal, "help")));
  if (adoptedList) animalsData.adopted.forEach(animal => adoptedList.appendChild(createAnimalCard(animal, "contact")));
}

document.addEventListener("DOMContentLoaded", renderAnimals);
