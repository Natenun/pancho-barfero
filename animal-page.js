function getAnimalBySlug(slug) {
  return allAnimals.find(animal => animal.slug === slug);
}

function getTagClass(status) {
  if (status === "Disponible") return "tag tag-green";
  if (status === "En tratamiento") return "tag tag-amber";
  if (status === "Adoptado" || status === "Historia fundadora") return "tag tag-sky";
  return "tag tag-neutral";
}

function renderAnimalPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const container = document.getElementById("animal-content");
  const animal = getAnimalBySlug(slug);

  if (!container) return;

  if (!animal) {
    container.innerHTML = `
      <div class="card">
        <h2>No encontré esa historia</h2>
        <p>Revisa el enlace o vuelve a la página principal.</p>
        <a href="index.html" class="btn btn-primary" style="margin-top:16px;">Volver al inicio</a>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <article class="animal-detail-card">
      <img src="${animal.image}" alt="${animal.name}" class="animal-detail-image" />
      <div class="animal-detail-body">
        <div class="pet-top">
          <div>
            <h1>${animal.name}</h1>
            <p>${getAgeText(animal.birthday)}</p>
          </div>
          <span class="${getTagClass(animal.status)}">${animal.status}</span>
        </div>

        <p class="animal-category">${animal.category}</p>

        <div class="animal-story-box">
          <h2>Su historia</h2>
          <p>${animal.story}</p>
        </div>

        <div class="animal-story-box">
          <h2>Cómo puedes ayudar</h2>
          <p>Puedes escribir directamente a Patricia para apoyar, adoptar, compartir o preguntar más sobre ${animal.name}.</p>
        </div>

        <div class="pet-actions stacked-actions">
          <a class="btn btn-primary" href="https://wa.me/5218135049027?text=${encodeURIComponent(animal.whatsappText)}" target="_blank" rel="noopener noreferrer">Escribir por WhatsApp</a>
          <a class="btn btn-dark" href="index.html">Volver a la página principal</a>
        </div>
      </div>
    </article>
  `;
}

document.addEventListener("DOMContentLoaded", renderAnimalPage);
