function getAnimalBySlug(slug){
  return allAnimals.find(a => a.slug === slug);
}

function renderGallery(images){
  if(!images || !images.length) return "";

  return `
    <div class="animal-gallery">
      <img id="main-img" src="${images[0]}" class="main-img" alt="Foto principal" />
      <div class="thumbs">
        ${images.map((img, i) => `
          <img
            src="${img}"
            class="thumb ${i === 0 ? "active" : ""}"
            data-full="${img}"
            alt="Foto ${i + 1}"
          />
        `).join("")}
      </div>
    </div>
  `;
}

function renderBeforeAfter(beforeImg, afterImg) {
  if(!beforeImg || !afterImg) return "";

  return `
    <section class="before-after">
      <h3>Antes y Después</h3>

      <div class="ba-container" id="ba-container">
        <img src="${afterImg}" class="ba-after" alt="Después">

        <div class="ba-before-wrapper" id="ba-before-wrapper">
          <img src="${beforeImg}" class="ba-before" alt="Antes">
        </div>

        <div class="ba-divider" id="ba-divider"></div>

        <input
          type="range"
          min="0"
          max="100"
          value="50"
          class="ba-slider"
          id="ba-slider"
        >
      </div>
    </section>
  `;
}

function renderSection(title, text){
  if(!text) return "";
  return `
    <section class="story-section">
      <h3>${title}</h3>
      <p>${text}</p>
    </section>
  `;
}

function bindGallery() {
  const main = document.getElementById("main-img");
  const thumbs = document.querySelectorAll(".thumb");

  if(!main || !thumbs.length) return;

  thumbs.forEach(t => {
    t.addEventListener("click", () => {
      main.src = t.dataset.full;
      thumbs.forEach(x => x.classList.remove("active"));
      t.classList.add("active");
    });
  });
}

function bindBeforeAfter() {
  const slider = document.getElementById("ba-slider");
  const wrapper = document.getElementById("ba-before-wrapper");
  const divider = document.getElementById("ba-divider");

  if(!slider || !wrapper || !divider) return;

  function updateSlider(value) {
    wrapper.style.width = value + "%";
    divider.style.left = value + "%";
  }

  updateSlider(slider.value);

  slider.addEventListener("input", (e) => {
    updateSlider(e.target.value);
  });
}

function render(){
  const params = new URLSearchParams(location.search);
  const slug = params.get("slug");
  const animal = getAnimalBySlug(slug);
  const container = document.getElementById("animal");

  if(!animal){
    container.innerHTML = "<p>Animal no encontrado</p>";
    return;
  }

  container.innerHTML = `
    <a href="index.html" class="back-btn">← Volver al inicio</a>

    ${renderGallery(animal.gallery)}
    <h1 class="animal-name">${animal.name}</h1>
    <p class="animal-age">${getAgeText(animal.birthday)} • ${animal.status}</p>

    ${renderBeforeAfter(animal.beforeImg, animal.afterImg)}

    ${renderSection("Historia", animal.story)}
    ${renderSection("Antes", animal.before)}
    ${renderSection("Diagnóstico / situación", animal.diagnosis)}
    ${renderSection("Plan de cuidado", animal.carePlan)}
    ${renderSection("Cómo va hoy", animal.today)}
    ${renderSection("Cómo ayudar", animal.helpMessage)}

    <a class="help-btn" href="https://wa.me/5218135049027?text=${encodeURIComponent(animal.whatsappText)}" target="_blank" rel="noopener noreferrer">
      Ayudar a ${animal.name}
    </a>
    <a class="donate-btn" href="index.html#donar">
  Donar para ayudar a ${animal.name}
</a>
  `;

  bindGallery();
  bindBeforeAfter();
}

document.addEventListener("DOMContentLoaded", render);
