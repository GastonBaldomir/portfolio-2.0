let sectionProyects = document.querySelector (".proyectos")

class Proyecto {
    constructor(nombre, descripcion,link, id, img, ) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.link=link;
      this.id = id;
      this.img = img;     
    }
  }

  function crearHtml(arr) {
    let html = "";
    arr.forEach((el) => {
      const {nombre, descripcion,link,  img,  } = el;
        html += `<div class="col-sm-6 col-md-6 col-lg-3 d-flex mt-5" >
        <div class="cardsProyect ">
          
            <h3 class="fs-5 mb-3 mt-3">
             ${nombre}
            </h3>
            <div>
              <img src="${img}" class=" imgCards" height="" alt="...">
          </div>
            <p class="m-2 text-white"> ${descripcion}</p>
           
            <div>
            <a target="_blank" href="${link}" class=" btn btn-dark text-primary m-3">Ver aquí.</a>
            </div>
          </div>
      </div>`;
    });
    sectionProyects.innerHTML = html;
  }
  let listaProyects=[];
  const proyecto1= new Proyecto("Hospedaje ByC", "HTML,CSS y JS - Bootstrapp - Responsive.", "https://gastonbaldomir.github.io/HospedajeBYC/", 1, "imagenes/Captura de pantalla (10).png" )
  const proyecto2= new Proyecto("Presupuestos GB", "HTML,CSS y JS - Manejo del Dom.", "https://gastonbaldomir.github.io/Simulador-de-Presupuestos/", 2, "imagenes/Captura de pantalla (11).png" )
  const proyecto3= new Proyecto("App de Escritorio", "C# - .NetFramework - Base de datos.", "https://github.com/GastonBaldomir/MaxiProgramaNivel2", 3, "imagenes/Captura de pantalla (12).png" )
  const proyecto4= new Proyecto("Agenda de Tareas", "HTML,CSS y JS - Manejo de eventos.", "https://gastonbaldomir.github.io/agendaDeTareas/", 4, "imagenes/Mis Tareas - Google Chrome 31_7_2023 13_37_41 (2).png" )
  const proyecto5= new Proyecto("Articulos RM", "HTML,CSS y JS - Bootstrapp - Responsive.", "https://gastonbaldomir.github.io/tiendaWeb/", 5, "imagenes/Captura de pantalla Pw (10).png" )
  const proyecto6= new Proyecto("Tienda Web", "Sql - Web ASP - C# - .NetFramework", "http://tiendaweb.somee.com/", 6, "imagenes/Captura de pantalla (21).png" )
  const proyecto7= new Proyecto("Page Fan", "Wordepress - Hosting - Mobile", "https://dev-sanloretienda.pantheonsite.io/", 7, "imagenes/Captura de pantalla (27).png" )
  
  listaProyects.push(proyecto1, proyecto2, proyecto3, proyecto4, proyecto5, proyecto6, proyecto7) 
  crearHtml(listaProyects);
  console.log(listaProyects)