var list = [];
function Objeto(name, coment, date) {
  this.name = name;
  this.coment = coment;
  this.date = date;
}

var button = document.getElementById("boton");
button.onclick = function () {
  var name = document.getElementById("name").value.toString();
  var coment = document.getElementById("coment").value.toString();
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;

  var c = new Objeto(name, coment, today);

  if (name.length<4 || coment == "" || coment.length > 200) {
    alert("Error en enviar, ingrese nombre de usuario mayor a 3 caracteres y mensaje menor a 200 caracteres");
  } else {
    if (list.length < 4) {
      list.unshift(c);
    } else {
      list.pop();
      list.unshift(c);
    }
    
  }

  drawApp();
};

const drawApp = () => {
  document.getElementById("app").innerHTML = `
    <div class="container">
    ${list
      .map((msj) => {
        return `

        <div class="card ">
        <div class="card-header">${msj.date}</div>
        <div class="card-body">
        <h5 class="card-title">${msj.name}</h5>
        <p class="card-text">${msj.coment}</p>
     
        </div>
       </div>
        `;
      })
      .join("")}
 
  </div>
    `;
};
