//CONCAT
const arr1 = [1, 2];
const arr2 = [3, 4];

const juntos = arr1.concat(arr2);// juntar os dois arrays
console.log (juntos);

//SLICE
const arr = [1, 2, 3, 4, 5];
const slicedArr = arr.slice(1, 3)// copia do indice 1 até o 3 (não inclui 3 )
console.log(slicedArr);

//SPLICE
const arr =[1, 2, 3, 4,];
arr.splice(1,2);//remove 2 elementos apartir do indice 1
console.log(arr);

//indexOf
const arr = [1, 2, 3, 4];
console.log(arr.indexOf(3)); // 2
console.log(arr.indexOf(5)); // -1
//retorna o primeiro indice no qual um determinado elemento pode ser encontrado no array, ou -1 se o elemento nao estiver presente

//INCLUDES


//REVERSE