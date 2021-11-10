// example data
const exampleArray = [10, 4, 100, 35, 31, 23, 443, 221, 342, 10, 12, 42];
const shit = ["function", null, function() {}, () => {}, 10, 100, {}];
const exampleArray2 = [
    [10, 4, "100", 35, "31", "23", 443, "221", "342", 10, 12, 42]
];

//object
function Point(x, y) {
    this.x = x;
    this.y = y;
}

// La función cleanArray filtra un array dado y retorna un array solamente con los valores numéricos presentes en él
function cleanArray(array) {
    return array.filter(item => typeof(item) === "number");
}


/* EJERCICIO 1 */
// La función findNumber4 busca el número 4 en un array dado, utilizando programación Imperativa
const findNumber4 = (array) => {
    let cleanedArr = cleanArray(array);
    // La función recorre el array
    for(let i in cleanedArr){ 
        // Si un  valor del array es igual a 4
        if (cleanedArr[i] == 4) {
            // La función retorna el índice de ese valor
            return `El número 4 está en el index ${i}`;
        }
    }
    // De lo contrario, la función retorna que el número 4 no está en el array dado
    return "El número 4 no está presente en el array";
}
//console.log() para testa la función findNumber4
console.log(findNumber4(exampleArray))


// La función findNumFour hace lo mismo que la función findNumber4, pero utilizando Programación Declarativa
function findNumFour(array) {
    let cleanedArr = cleanArray(array);
    let index = 0;
    // El método map() recorre el array dado
    cleanedArr.map((value, i) => {
        // En caso de que un valor sea igual a 4, la función devuelve su índice y lo almacena en la variable index
        if (value == 4) index = i;
    })
    return `El número 4 está en el index ${index}`;
}
// console.log() para testar la función findNumFour
console.log(findNumFour(exampleArray))

// Propuesta de código más eficiente para buscar el número 4 en un array dado - Búsqueda Binária

// Primero hay que ordenar el array, en este caso utilizamos una función bubbleSort
function bubbleSort(array) {
    let cleanedArray = cleanArray(array);
    for (let i = 0; i < cleanedArray.length - 1; i++) {
        for (let j = 0; j < cleanedArray.length - 1; j++){
            if (cleanedArray[j] > cleanedArray[j+1]){
                let aux = cleanedArray[j];
                cleanedArray[j] = cleanedArray[j+1];
                cleanedArray[j+1] = aux;
            }
        }
    }
    return cleanedArray;
}

// La función binarySearch divide el array dado en mitades y compara el valor central con el valor buscado,
// se ejecuta mientras el índice inicial del primero elemento del array "partido" seas menor o igual que el índice del último elemento 
function binarySearch(array) {
    let orderedArray = bubbleSort(array);
    let start = 0;
    let end = orderedArray.length-1;
    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        // La función compara si el valor central del array dado es igual a 4
        if (orderedArray[mid] == 4){
            // Si es así, la función retorna en que índice el número 4 ha sido encontrado
            return `El número 4 está en el index ${mid}`;
        }
        // De no ser así, compara si el elemento central es menor que 4
        else if (orderedArray[mid] < 4) {
            // En el caso de que la sentencia sea verdadera, se ejecuta nuevamente la función
            // en la mitad del array que contiene los valores mayores que el valor central
            start = mid + 1;
        }
        // Sino se ejecuta la función en la otra mitad del array
        else {
            end = mid - 1;
        }
    }
    // Si ningún de los valores comparados es igual que 4, se retorna el aviso de que el array no contiene el número 4
    return "El número 4 no está presente en el array";
}
// console.log() para testar a función binarySearch
console.log(binarySearch(exampleArray))




/* EJERCICIO 2 */
// La función cleanShit filtra el array dado y retorna un array solamente con los valores tipo string
let cleanShit = shit.filter(str => typeof str === "string");
console.log(cleanShit);

/* EJERCICIO 3 */
// La función calculateDistance retorna un punto cuyas coordinadas (x, y) son el resultado de la resta de las coordinadas de otros dos puntos
function calculateDistance (pointA, pointB) {
    return new Point((pointB.x-pointA.x),(pointB.y-pointA.y))
}

//Las variables a y b son declaradas como nuevos puntos(x, y) y utilizadas para testar el funcionamiento de la función calculateDistance
let a = new Point(1, 2);
let b = new Point(4, 5);

let distance = calculateDistance(a,b);
// console.log( para testar la función calculate distance)
console.log(distance)

/*EJERCICIO 4 */
// Crear una función que compare los valores de exampleArray2 y exampleArray1 pero que se fije en el tipo

// La función flattenArray utiliza el método flat() para "aplanar" los arrays, dado que el array exampleArray2 es un array que contiene otro array
function flattenArray(array) {
    return array.flat();
}

// La función shorterArray compara las longitudes de los arrays dados y nos devulve la longitud del array más corto
function shorterArray(array1, array2){
    let flatArray1 = flattenArray(array1);
    let flatArray2 = flattenArray(array2);
    let shorter = 0;
    if (flatArray1.length <= flatArray2.length){
        shorter = flatArray1.length;
    }
    else {
        shorter = flatArray2.length;
    }
    return shorter;
}

// Por fin, la función arrayComparison llama a las dos funciones anteriores y hace una comparación de las versiones "planas" de los array
// y nos devuelve un array de Booleanos con los resultados de cada comparación
function arrayComparison(array1, array2){
    let arrayLength = shorterArray(array1, array2);
    let flatArray1 = flattenArray(array1);
    let flatArray2 = flattenArray(array2);
    let comparisonResult = [];
    // Función recorre cada array hasta el índice mayor del array de menor longitud
    for(let i = 0; i < arrayLength; i ++){
        // La función contiene un operador de estricta igualdad que compara cada elemento de mismo índice dentro de cada array
        //teniendo en cuenta el valor y el tipo
        if (flatArray1[i] === flatArray2[i]) { 
            comparisonResult.push(true);
        }
        else {
            comparisonResult.push(false);
        }
    }
    return comparisonResult;
}
// console.log() para testar la función arrayComparison
console.log(arrayComparison(exampleArray, exampleArray2))
