

const propiedades_venta = [
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
        habitaciones: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: "Apartamento acogedor en la montaña",
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
        ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
        habitaciones: 2,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: "Penthouse de lujo con terraza panorámica",
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
        habitaciones: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: "Loft moderno en barrio artístico",
        src: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1470&q=80",
        descripcion: "Un loft con diseño industrial y amplios espacios en un barrio lleno de vida cultural",
        ubicacion: "202 Art District, Downtown, CA 12345",
        habitaciones: 1,
        costo: 1800,
        smoke: true,
        pets: false
    }
];

const ventaSection = document.querySelector("#venta");

for (let propiedad of propiedades_venta) {
    ventaSection.innerHTML += `
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
