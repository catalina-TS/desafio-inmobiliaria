/* Crear un arreglo con todas las propiedades en alquiler. cada objeto incluye los atributos necesarios para ser mostrados en la página*/

const propiedades_alquiler = [
    {
        nombre: "Apartamento en el centro de la ciudad",
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=700&q=60",
        descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
        ubicacion: "123 Main Street, Anytown, CA 91234",
        habitaciones: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: "Apartamento luminoso con vista al mar",
        src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?auto=format&fit=crop&w=1470&q=80",
        descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar",
        ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
        habitaciones: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: "Condominio moderno en zona residencial",
        src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1000&q=60",
        descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        ubicacion: "789 Tranquil Street, Quiet Town, CA 12345",
        habitaciones: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        nombre: "Estudio pequeño ideal para estudiantes",
        src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1470&q=80",
        descripcion: "Estudio funcional y económico, perfecto para estudiantes o profesionales jóvenes",
        ubicacion: "321 College Road, University City, CA 65432",
        habitaciones: 1,
        costo: 1100,
        smoke: true,
        pets: false
    }
];

/*Seleccionar la sección del HTML donde irán las tarjetas. Recorrer arreglo y utilizar interpolación y condicionales para el estilo según su tipo*/

const alquilerSection = document.querySelector("#alquiler");

for (let propiedad of propiedades_alquiler) {
    alquilerSection.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento" />
          <div class="card-body">
            <h5 class="card-title">${propiedad.nombre}</h5>
            <p class="card-text">${propiedad.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
            <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
              <i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> 
              ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
            </p>
            <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
              <i class="${propiedad.pets ? 'fas fa-paw' : 'fa-solid fa-ban'}"></i> 
              ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
            </p>
          </div>
        </div>
      </div>
    `;
}
