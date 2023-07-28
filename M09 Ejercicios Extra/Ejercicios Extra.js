/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   
   return Object.entries(objeto);

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var nuevoArray = string.split('');
   nuevoArray.sort();
   var nuevoObj = {};
   var tamanoString = string.length;
   var contador =0;
   while (contador < tamanoString){
      suma =0;
      for(var i=0;i<nuevoArray.length;i++){
         if(nuevoArray[contador] == nuevoArray[i] ){
         suma = suma +1;
      }
   }
   nuevoObj[nuevoArray[contador]] = suma;
   contador = contador +1;
   }

   return nuevoObj;

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var nuevoArray = string.split('');
   var mayusArray=[];
   var minusArray=[];
   for(var i = 0;i<nuevoArray.length;i++){
      if(nuevoArray[i] === nuevoArray[i].toUpperCase()){
         mayusArray.push(string[i]);
      }else{
         minusArray.push(string[i]);
      }
   }
   var resultado = mayusArray.concat(minusArray);
   
   return resultado.join('');

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var nuevoArray = frase.split(' ');
   var arrayFinal = [];
   for(var i=0;i<nuevoArray.length;i++){
      var palabraArray = nuevoArray[i].split('');
      var nuevoOrdenArray = [];
      for(var y=0;y<palabraArray.length;y++){
         nuevoOrdenArray.unshift(palabraArray[y]);
      }
      arrayFinal.push(nuevoOrdenArray.join(''));
   }
   return arrayFinal.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numeroString = numero.toString();
   var nuevoArray = numeroString.split('');
   if(nuevoArray.length === 1){
      return "Es capicua";
   }else if(numero % 11 === 0){  
      return "Es capicua";
   }else if(nuevoArray.length >= 2){
      var contador = 0;
      var ultimo = nuevoArray.length-1;
      var respuesta;
      while(contador < nuevoArray.length){
         if(nuevoArray[contador] === nuevoArray[ultimo-contador]){
            respuesta = "Es capicua";
         }else{
            respuesta = "No es capicua";
         }
         contador = contador + 1;
      }
      return respuesta;
   }
   
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var prohibidas = /[a-c]/g;
   var nuevoString = string.replace(prohibidas,"");
   return nuevoString;
   
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var arrayFinal = [];
   for(var i=0;i<arrayOfStrings.length;i++){
      var nuevoObj = {};
      nuevoObj["nombre"] = arrayOfStrings[i];      
      nuevoObj["longitud"] = arrayOfStrings[i].length;
      arrayFinal.push(nuevoObj);
   }
        
   arrayFinal.sort((x, y) => x.longitud - y.longitud);

   arraySorted = []; 
   for(var i =0;i<arrayFinal.length;i++){
      arraySorted.push(arrayFinal[i].nombre);
   }
   

   return arraySorted;

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var nuevoArray = [];
   for(var i = 0; i<array1.length;i++){
      for(y = 0; y<array2.length;y++){
         if(array1[i] === array2[y]){
            nuevoArray.push(array1[i]);
         }
      }
   }
   return nuevoArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
