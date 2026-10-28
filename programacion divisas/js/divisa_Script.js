
const euroFr = 700, dollarFr = 700,
      libraFr = 741, dollarEuro = 1.21,
      libraEuro = 1.12, libraDollar = 1.37;


let origen = document.transF.origenF,
      destino = document.transF.destinoF,
      input = document.transF.inputF,
      output = document.transF.outputF;


origen.addEventListener("change",function() {
   let money = parseFloat(input.value);
   if (! isNaN(money)) {
      input.value = money+" "+origen.value;
      output.value = "";
   }
});

destino.addEventListener("change",function() {
   output.value = "";
});


input.addEventListener("change",function() {
   if (output.value.length>0)
      setTimeout(function(){output.value = "";},200);
});

input.addEventListener("focus",function() {
   let money = parseFloat(this.value);
   if (! isNaN(money)) this.value = money;
   output.value = "";
});

input.addEventListener("blur",function() {
   let money = parseFloat(this.value);
   if (! isNaN(money))
     this.value = money+" "+origen.value;
});


let transform = document.querySelector("button[type='button']");
transform.addEventListener("click",function() {
   let money = parseFloat(input.value);
   operate(origen.value,destino.value,money,output);
   if (! isNaN(money))
      input.value = money+" "+origen.value;
});



function operate(origen,destino,money,output) {
   switch (true) {
      case isNaN(money):
         output.value = "";
         break;
      // franco y euro
      case (origen=="€")&&(destino=="XAF"):
         output.value = notac(money*euroFr)+" "+destino;
         break;
      case (origen=="XAF")&&(destino=="€"):
         output.value = notac(money/euroFr)+" "+destino;
         break;
      // franco y dollar
      case (origen=="$")&&(destino=="XAF"):
         output.value = notac(money*dollarFr)+" "+destino;
         break;
      case (origen=="XAF")&&(destino=="$"):
         output.value = notac(money/dollarFr)+" "+destino;
         break;
      // franco y libra
      case (origen=="£")&&(destino=="XAF"):
         output.value = notac(money*libraFr)+" "+destino;
         break;
      case (origen=="XAF")&&(destino=="£"):
         output.value = notac(money/libraFr)+" "+destino;
         break;
      // euro y dollar
      case (origen=="$")&&(destino=="€"):
         output.value = notac(money*dollarEuro)+" "+destino;
         break;
      case (origen=="€")&&(destino=="$"):
         output.value = notac(money/dollarEuro)+" "+destino;
         break;
      // euro y libra
      case (origen=="£")&&(destino=="€"):
         output.value = notac(money*libraEuro)+" "+destino;
         break;
      case (origen=="€")&&(destino=="£"):
         output.value = notac(money/libraEuro)+" "+destino;
         break;
      // dollar y libra
      case (origen=="£")&&(destino=="$"):
         output.value = notac(money*libraDollar)+" "+destino;
         break;
      case (origen=="$")&&(destino=="£"):
         output.value = notac(money/libraDollar)+" "+destino;
         break;
      default:
         output.value = notac(money)+" "+destino;
   }
}


function decim(num) {
   var absol = Math.abs(num);
   if (Number.isInteger(num)) num = num;
   else if (num==num.toFixed(1)) num = num;
   else if ((absol<1e-2)&&(absol>=1e-4)) num = num.toFixed(4);
   else if (absol<1e-4) num = num.toExponential(4);
   else num = num.toFixed(2);
   return num;
}

function notac(num) {
   num = decim(num);
   var numString = num.toString();
   if (numString.length<=10) num = num;
   else num = num.toExponential(4);
   return num;
}


class Probar {
   #nombre;
   #apellido;
   constructor(nombre,apellido) {
      this.#nombre = nombre;
      this.#apellido = apellido;
   }
   get getNombre() {
      return this.#nombre;
   }
}


const objeto = new Probar("Moises","Lopeo Locoja");

const numeros = [1,2,3,4,5,6,8,2,6,7];
numeros.splice(1,numeros.length);
console.log(numeros);
