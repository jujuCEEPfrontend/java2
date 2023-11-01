var titulo = document.querySelector(".titulo");
titulo.textContent = "Julia nutricionista";

var pacientes = document.querySelectorALL(".paciente");

for(var i = 0; i < paciente.length ; i++){

var paciente = paciente[i];

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".into-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if(peso <= 0 || peso >= 100){
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
}

if(Altura <= 0 || Altura >= 3000){
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido");
}

if( alturaEhValida && pesoEhValido){
 var imc = peso / (altura * altura);
  tdImc.textContent = imc.toFixed(2);
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
   
    var form = document.querySelector("#form-adiciona");

   var nome = form.nome.value;
   var peso = form.peso.value;
   var altura = form.altura.value;
   var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

var nomeTd = document.createElemente("td");
var pesoTd = document.createElemente("td");
var alturaTd = document.createElemente("td");
var gorduraTd = document.createElemente("td");
var imcTd = document.createElemente("td");

nomeTd.textContent = nome;
nomeTd.textContent = peso;
nomeTd.textContent = altura;
nomeTd.textContent = gordura;

pacienteTr.appendChild(nomeTd);
pacienteTr.apenedChild(pesoTd);
pacienteTr.apenedChild(alturaTd);
pacienteTr.apenedChild(gorduraTd);

var tabela = document.querySelector("#tabela-pacientes");

tabela.appendChild(pacienteTr);


});

titulo.addEventListener("click", mostraMensagem);

//

titulo.addEventListener("click", function () {
    console.log("fui clicado");

});


