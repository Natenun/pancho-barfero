
function getAnimalBySlug(slug){
  return allAnimals.find(a => a.slug === slug);
}

function renderGallery(images){
  return `
  <div class="animal-gallery">
    <img id="main-img" src="${images[0]}" class="main-img"/>
    <div class="thumbs">
      ${images.map(img => `<img src="${img}" class="thumb"/>`).join("")}
    </div>
  </div>`
}

function renderSection(title, text){
  if(!text) return "";
  return `
  <section class="story-section">
    <h3>${title}</h3>
    <p>${text}</p>
  </section>
  `
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
    ${renderGallery(animal.gallery)}
    <h1 class="animal-name">${animal.name}</h1>
    <p class="animal-age">${getAgeText(animal.birthday)} • ${animal.status}</p>

    ${renderSection("Historia", animal.story)}
    ${renderSection("Antes", animal.before)}
    ${renderSection("Diagnóstico / situación", animal.diagnosis)}
    ${renderSection("Plan de cuidado", animal.carePlan)}
    ${renderSection("Cómo va hoy", animal.today)}
    ${renderSection("Cómo ayudar", animal.helpMessage)}

    <a class="help-btn" href="https://wa.me/?text=${encodeURIComponent(animal.whatsappText)}" target="_blank">
      Ayudar a ${animal.name}
    </a>
  `;

  const main = document.getElementById("main-img");
  document.querySelectorAll(".thumb").forEach(t=>{
    t.addEventListener("click",()=>{
      main.src = t.src;
    });
  });
}

document.addEventListener("DOMContentLoaded", render);
