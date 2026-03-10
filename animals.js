const animalsData = {
  adoption: [
    {
      slug: "nawi",
      name: "Ñawi",
      birthday: "2025-06-10",
      status: "Disponible",
      category: "busca hogar",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80",
      shortStory: "Llegó con bajo peso, necesitó apoyo para alimento y tenía infección en un ojo. Hoy forma parte de la manada.",
      story: "Ñawi llegó con bajo peso y con infección en un ojo. Poco a poco ha ido recuperando fuerza, confianza y alegría. Hoy forma parte de la manada y está esperando una familia que lo reciba con amor y paciencia.",
      whatsappText: "Hola Paty, quiero ayudar a Ñawi"
    }
  ],
  rescue: [
    {
      slug: "zack",
      name: "Zack",
      birthday: "2023-10-10",
      status: "En tratamiento",
      category: "resguardo",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80",
      shortStory: "Llegó con sobrepeso y con problemas renales. Necesita apoyo para alimento y hoy forma parte de la manada.",
      story: "Zack llegó con sobrepeso y con problemas renales. Su proceso ha sido de seguimiento, nutrición y cuidado constante. Hoy sigue en resguardo y continúa evolucionando paso a paso.",
      whatsappText: "Hola Paty, quiero ayudar a Zack"
    },
    {
      slug: "prit",
      name: "Prit",
      birthday: "2024-01-15",
      status: "Manada Pat",
      category: "resguardo",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=80",
      shortStory: "Literalmente cayó del cielo. Cayó de una barda, estaba lastimada y mal de un ojo. Hoy está muy sana y forma parte de mi manada.",
      story: "Fui a visitar a mi abuelo y Prit cayó de una barda. Venía lastimada y con problemas en un ojo. Con atención, nutrición y cariño, hoy está sana y ya es parte de mi manada.",
      whatsappText: "Hola Paty, quiero conocer la historia de Prit"
    }
  ],
  adopted: [
    {
      slug: "pancho",
      name: "Pancho",
      birthday: "2015-01-01",
      status: "Historia fundadora",
      category: "adoptado",
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1200&q=80",
      shortStory: "Pancho apareció lastimado en el estacionamiento de Cross248. Su rescate inspiró todo este proyecto.",
      story: "Pancho llegó maltratado por otros perros al estacionamiento de Cross248. Atenderlo y acompañar su proceso llevó a Patricia a estudiar nutrición para pequeñas especies y descubrir la alimentación BARF. Hoy Pancho está sano y su historia es el corazón de Pancho Barfero.",
      whatsappText: "Hola Patricia, quiero conocer más sobre Pancho"
    }
  ]
};

const allAnimals = [
  ...animalsData.adoption,
  ...animalsData.rescue,
  ...animalsData.adopted
];

function getAgeText(birthday) {
  if (!birthday) return "Edad no disponible";
  const birth = new Date(birthday + "T00:00:00");
  const now = new Date();
  let months = (now.getFullYear() - birth.getFullYear()) * 12;
  months += now.getMonth() - birth.getMonth();
  if (now.getDate() < birth.getDate()) months -= 1;

  if (months < 1) return "Menos de 1 mes";
  if (months < 12) return `${months} ${months === 1 ? "mes" : "meses"}`;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (remainingMonths === 0) return `${years} ${years === 1 ? "año" : "años"}`;
  return `${years} ${years === 1 ? "año" : "años"} y ${remainingMonths} ${remainingMonths === 1 ? "mes" : "meses"}`;
}
