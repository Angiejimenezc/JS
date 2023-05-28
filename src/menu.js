// Genera un menú diario aleatorio
function generarMenu() {
  const menuContainer = document.getElementById("menu");
  menuContainer.innerHTML = ""; // Limpia el contenido del menú anterior

  const menu = document.createElement("ul");

  const proteinaDesayunoOptions = ['Jamón', 'Yogur', 'Huevos revueltos'];
    const carbohidratoDesayunoOptions = ['Tostadas', 'Avena', 'Cereales integrales'];
    const frutaDesayunoOptions = ['Zumo de naranja', 'Manzana', 'Plátano'];
    const colagenoDesayunoOptions = ['Salmón', 'Gelatina', 'Caldo de hueso'];

  // Obtén opciones aleatorias para el desayuno

  const proteinaDesayunoOption = obtenerOpcionAleatoria(proteinaDesayunoOptions);
  const carbohidratoDesayunoOption = obtenerOpcionAleatoria(carbohidratoDesayunoOptions);
  const frutaDesayunoOption = obtenerOpcionAleatoria(frutaDesayunoOptions);
  const colagenoDesayunoOption = obtenerOpcionAleatoria(colagenoDesayunoOptions);

    const proteinaComidaOptions = ['Pollo', 'Pescado', 'Tofu'];
    const carbohidratoComidaOptions = ['Arroz integral', 'Quinoa', 'Pasta integral'];
    const vegetalComidaOptions = ['Espinacas', 'Brócoli', 'Zanahorias'];
    const frutaComidaOptions = ['Piña', 'Sandía', 'Uvas'];
    const grasaSaludableComidaOptions = ['Aguacate', 'Aceite de oliva', 'Nueces'];
    const colagenoComidaOptions = ['Gelatina', 'Caldo de hueso', 'Papaya'];

  // Obtén opciones aleatorias para la comida
  const proteinaComidaOption = obtenerOpcionAleatoria(proteinaComidaOptions);
  const carbohidratoComidaOption = obtenerOpcionAleatoria(carbohidratoComidaOptions);
  const vegetalComidaOption = obtenerOpcionAleatoria(vegetalComidaOptions);
  const frutaComidaOption = obtenerOpcionAleatoria(frutaComidaOptions);
  const grasaSaludableComidaOption = obtenerOpcionAleatoria(grasaSaludableComidaOptions);
  const colagenoComidaOption = obtenerOpcionAleatoria(colagenoComidaOptions);

  const proteinaMeriendaOptions = ["Yogur griego","Queso cottage","Batido de proteínas"];
  const carbohidratoMeriendaOptions = ["Barra de granola","Manzana","Galletas integrales"];
  const frutaMeriendaOptions = ["Fresas", "Mango", "Kiwi"];
  const colagenoMeriendaOptions = ['Gelatina', 'Caldo de hueso', 'Piña'];

  // Obtén opciones aleatorias para la merienda
  const proteinaMeriendaOption = obtenerOpcionAleatoria(proteinaMeriendaOptions);
  const carbohidratoMeriendaOption = obtenerOpcionAleatoria(carbohidratoMeriendaOptions);
  const frutaMeriendaOption = obtenerOpcionAleatoria(frutaMeriendaOptions);
  const colagenoMeriendaOption = obtenerOpcionAleatoria(colagenoMeriendaOptions)

  const proteinaCenaOptions = ["Salmón","Tofu a la plancha","Pechuga de pollo"];
  const carbohidratoCenaOptions = ["Batata asada", "Cuscús", "Ensalada mixta"];
  const vegetalCenaOptions = ["Espárragos", "Calabacín", "Tomates"];
  const grasaSaludableCenaOptions = ["Aceite de coco", "Aguacate", "Aceitunas"];
  const colagenoCenaOptions = ['Gelatina', 'Caldo de hueso', 'Acelga'];

  // Obtén opciones aleatorias para la cena
  const proteinaCenaOption = obtenerOpcionAleatoria(proteinaCenaOptions);
  const carbohidratoCenaOption = obtenerOpcionAleatoria(carbohidratoCenaOptions);
  const vegetalCenaOption = obtenerOpcionAleatoria(vegetalCenaOptions);
  const grasaSaludableCenaOption = obtenerOpcionAleatoria(grasaSaludableCenaOptions);
  const colagenoCenaOption = obtenerOpcionAleatoria(carbohidratoCenaOptions);

  // Agrega el desayuno al menú
  const desayunoItem = crearItemMenu('Desayuno', `${proteinaDesayunoOption} con ${carbohidratoDesayunoOption} y ${frutaDesayunoOption}. Incluye colágeno: ${colagenoDesayunoOption}`);
  menu.appendChild(desayunoItem);

  // Agrega la comida al menú 
  const comidaItem = crearItemMenu('Comida', `${proteinaComidaOption} con ${carbohidratoComidaOption}, ${vegetalComidaOption}, ${frutaComidaOption} y ${grasaSaludableComidaOption}. Incluye colágeno: ${colagenoComidaOption}`);
  menu.appendChild(comidaItem);

  // Agrega la merienda al menú
  const meriendaItem = crearItemMenu(
    "Merienda",
    `${proteinaMeriendaOption} con ${carbohidratoMeriendaOption}, ${colagenoMeriendaOption} y ${frutaMeriendaOption}`
  );
  menu.appendChild(meriendaItem);

  // Agrega la cena al menú
  const cenaItem = crearItemMenu('Cena', `${proteinaCenaOption} con ${carbohidratoCenaOption}, ${vegetalCenaOption} y ${grasaSaludableCenaOption}. Incluye colágeno: ${colagenoCenaOption}`);
    menu.appendChild(cenaItem);
  menuContainer.appendChild(menu);
}

// Función auxiliar para obtener una opción aleatoria de un arreglo
function obtenerOpcionAleatoria(options) {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Función auxiliar para crear un elemento de menú
function crearItemMenu(nombreComida, descripcionComida) {
  const item = document.createElement("li");
  item.innerHTML = `${nombreComida}: <span>${descripcionComida}</span>`;
  return item;
}

// Agrega un evento click al botón para generar el menú
const generarMenuButton = document.getElementById("generar-menu");
generarMenuButton.addEventListener("click", generarMenu);
