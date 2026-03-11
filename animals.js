
const animalsData = {
  adoption: [
    {
      slug: "nawi",
      name: "Ñawi",
      birthday: "2025-06-10",
      status: "Disponible",
      category: "busca hogar",
      beforeImg: "img/animalitos/nawi-antes.png",
      afterImg: "img/animalitos/nawi-ahora.png",
      gallery: [
        "img/animalitos/nawi-1.png",
        "img/animalitos/nawi-2.png",
        "img/animalitos/nawi-3.png"
      ],
      shortStory: "Llegó con bajo peso y necesitó apoyo para alimento.",
      story: "Ñawi apareció débil y con signos de descuido. Fue recibido y comenzó su proceso de recuperación.",
      before: "Llegó con bajo peso, poco apetito y una infección ocular.",
      diagnosis: "Se detectó desnutrición y una infección en el ojo que requería seguimiento.",
      carePlan: "Se inició un plan de alimentación natural, monitoreo constante y cuidado emocional.",
      today: "Hoy Ñawi tiene más energía, juega y se acerca con confianza a las personas.",
      helpMessage: "Puedes ayudar con alimento, donación o compartiendo su historia.",
      whatsappText: "Hola Patricia, quiero ayudar a Ñawi"
    }
  ]
};

const allAnimals = [...animalsData.adoption];

function getAgeText(birthday) {
  if (!birthday) return "Edad no disponible";
  const birth = new Date(birthday);
  const now = new Date();
  let months = (now.getFullYear() - birth.getFullYear()) * 12;
  months += now.getMonth() - birth.getMonth();
  if (months < 12) return months + " meses";
  const years = Math.floor(months / 12);
  return years + " años";
}
