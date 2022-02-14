// var nome = "Pedro Paulo";
// var idade = "22";
// var idade2 = "10"

//var lista = ["maça", "pera", "laranja"];
// lista.push("uva");
// lista.pop();


//console.log(lista.toString());
//console.log(lista.join(" "));
// alert(nome + " tem " + idade + " anos ")  

// var carro = [{ nome:"GOL", cor:"AZUL"}, {nome :"UNO", cor:"BRANCO"}];

// console.log(carro);

// alert(carro[0].nome);

// var idade = prompt("Qual sua idade" );

// // var idade = 18;
// if ( idade >= 18){
//     alert("maior de idade");
// }else{
//     alert("menor de idade");
// }

// var count = 0;
// while(count <= 10){
   
//     console.log(count);
//     count = count + 1;
// };

// var x;

// for( x = 0; x <= 5; x++){

//     //alert(x);
//     console.log(x);

// };

//var d = new Date();
//alert(d.getDate());

// alert(d.getHours());
// alert(d.getMinutes());
// alert(d.getSeconds());

//var validar = 0;


// function validaIdade(idade)
// {

//     if( idade >= 18 ){
//         validar = true
//     }
//     else {
//         validar = false;
//     }
//     return validar;
// }

// var idade = prompt("Qual sua idade");
// validaIdade(idade);
// console.log(validar);


// function clicou(){

//     alert("Você Clicou");
// }

function clicou(){
  //  document.getElementById("agr");  //  pega a id com esse nome na index.html
   
  document.getElementById("agr").innerHTML = "Obrigado"; // insere um texto no h3
}

//function redirecionar(){
  //  window.open("https://web.digitalinnovation.one/track/html-web-developer?tab=path"); // abre uma nova pagina com esse endereço.
  //  window.location.href = "https://web.digitalinnovation.one/track/html-web-developer?tab=path" // abre esse endereço de pagina na atual.
//

// function trocar (){

//    document.getElementById("mouseover").innerHTML ="Obrigado por passar aqui"
//    // alert("trocar texto");
// }

// function voltar(){

//         document.getElementById("mouseover").innerHTML ="Passe o mouse aqui";

// }


function trocar (elemento){            //    pega o elemento que foi passado como paramentro
    
    elemento.innerHTML ="Obrigado por passar aqui"
    // alert("trocar texto");
 }
 
 function voltar(elemento){
 
        
         elemento.innerHTML="Passe o mouse aqui";
 
 }

 function load(){

    alert("Pagina carregada");
 }

 function funcaochange(elemento){             // onchance pega o valor

    console.log(elemento.value);

 }

 function botao3(elemento){
     elemento.innerHTML = "sla";
     
 }

 function botao4(elemento){
    elemento.innerHTML = "BOTÃO";
    
}