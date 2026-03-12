function getTagClass(status) {
  if (status === "Disponible") return "tag tag-green";
  if (status === "En tratamiento") return "tag tag-amber";
  if (status === "En resguardo") return "tag tag-purple";
  if (status === "Urgente") return "tag tag-red";
  if (status === "Adoptado") return "tag tag-sky";
  if (status === "Historia fundadora") return "tag tag-blue";
  if (status === "En memoria") return "tag tag-gray";
  return "tag tag-neutral";
}

function createAnimalCard(animal, mode = "help") {
  const article = document.createElement("article");
  article.className = "pet-card";

  const imageSrc = (animal.gallery && animal.gallery.length)
    ? animal.gallery[0]
    : (animal.afterImg || animal.beforeImg || "");

  article.innerHTML = `
    <img src="${imageSrc}" alt="${animal.name}" />
    <div class="pet-body">
      <div class="pet-top">
        <div>
          <h3>${animal.name}</h3>
          <p>${getAgeText(animal.birthday)}</p>
        </div>
        <span class="${getTagClass(animal.status)}">${animal.status}</span>
      </div>
      <p>${animal.shortStory || ""}</p>
      <div class="pet-actions">
        <a class="btn btn-dark" href="animal.html?slug=${animal.slug}">Ver su historia</a>
        <a class="btn btn-light" href="https://wa.me/5218135049027?text=${encodeURIComponent(animal.whatsappText || `Hola Patricia, quiero ayudar a ${animal.name}`)}" target="_blank" rel="noopener noreferrer">
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

  if (adoptionList) {
    adoptionList.innerHTML = "";
    animalsData.adoption.forEach(animal => {
      adoptionList.appendChild(createAnimalCard(animal, "help"));
    });
  }

  if (rescueList) {
    rescueList.innerHTML = "";
    animalsData.rescue.forEach(animal => {
      rescueList.appendChild(createAnimalCard(animal, "help"));
    });
  }

  if (adoptedList) {
    adoptedList.innerHTML = "";
    animalsData.adopted.forEach(animal => {
      adoptedList.appendChild(createAnimalCard(animal, "contact"));
    });
  }
}

function renderStats() {
  const adoption = animalsData.adoption.length;
  const rescue = animalsData.rescue.length;
  const adopted = animalsData.adopted.length;
  const total = adoption + rescue + adopted;

  const adoptionEl = document.getElementById("stat-adoption");
  const rescueEl = document.getElementById("stat-rescue");
  const adoptedEl = document.getElementById("stat-adopted");
  const totalEl = document.getElementById("stat-total");

  if (adoptionEl) adoptionEl.textContent = adoption;
  if (rescueEl) rescueEl.textContent = rescue;
  if (adoptedEl) adoptedEl.textContent = adopted;
  if (totalEl) totalEl.textContent = total;
}

document.addEventListener("DOMContentLoaded", () => {
  renderAnimals();
  renderStats();
});
