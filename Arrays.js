
const dizi_adi = [oge1,oge2,...]

                  
["Tuncer",5,true]


["birinci","ikinci","ucuncu","dorduncu"]
// 0 1 2 3 <- Index

diziadi[0] // dizideki ilk öğeyi döndürür.
diziadi[1] // dizideki ikinci öğeyi döndürür.



const dizi_adi = [oge1,oge2,...]



const dizi_adi = new Array(oge1,oge2,...)


const billionaries =["Mustafa Kemal Atatürk","Jeff Bezos"," Elon Musk ","Tundzher"]
billionaries.length // 4

const billionaries =["Mustafa Kemal Atatürk","Jeff Bezos","Elon Musk","Tundzher"]
for(let i=0;i<billionaries.length;i++){console.log(billionaries[i])
}

//Çıktı:
Mustafa Kemal Atatürk
Jeff Bezos
Elon Musk
Tundzher


Yöntem: push()
const billionaries = ["Mustafa Kemal Atatürk","Jeff Bezos","Elon Musk","Tundzher"]

billionaries.push("Muzi")

//Çıktı:

["Mustafa Kemal Atatürk ","Jeff Bezos","Elon Musk","Tundzher","Muzi"]


Yöntem: pop()

billionaries.pop()

// Son elemanı döndürür ve diziden kaldırır.


Yöntem: shift()

const billionaries =["Jeff Bezos","Mustafa Kemal Atatürk","Elon Musk"]
billionaries.shift() 
// Sonuç: Jeff Bezos diziden kaldırır.


Yöntem: unshift()

const billionaries = ["Jeff Bezos","Mustafa Kemal Atatürk","Elon Musk"]

billionaries.unshift("Tundzher")

// Dizi uzunluğunu döndür ve diziye Tundzher ‘i ekler..


Yöntem: concat()

var dizi1 = [1, 2, 3];
var dizi2 = [4, 5, 6];
var dizi3 = dizi1.concat(dizi2);
console.log(dizi3);
// Çıktı: [1,2,3,4,5,6]


Yöntem: splice(start,end,...items)

const meyveler = ["Muz", "Portakal", "Elma", "Mango"];

meyveler.splice(2, 0, "Limon", "Kivi");

console.log(meyveler)

//Çıktı: ['Muz', 'Portakal', 'Limon', 'Kivi', 'Elma', 'Mango']



Yöntem: slice()
const test = ["Toni", "Muzi", "Müge", "Hakan", "Tuncer"];
const test2 = test.slice(1);

//test Çıktı: ["Toni", "Muzi", "Müge", "Hakan", "Tuncer"]
//test2 Çıktı: ["Muzi", "Müge", "Hakan", "Tuncer"]


Yöntem: sort()

const kelime_ve_harf=["a","e","b","c","alfa","beta","gamma"]
kelime_ve_harf.sort()
const numara=[1,33,2,44,54,13,4,23,11]
numara.sort() // Sayısal olarak değil, alfabetik olarak..
console.log(kelime_ve_harf)
console.log(numara)
// Çıktı : ['a', 'alfa', 'b', 'beta', 'c', 'e', 'gamma']
// Çıktı : [1, 11, 13, 2, 23, 33, 4, 44, 54]


Önce sort() kullanarak sıralayın, ardından reverse() kullanarak bunu tersine çevirin.

const liste=["Ahmet","Mehmet","Ayşe","Fatma"]

liste.sort().reverse()

console.log(liste)

// Çıktı: ["Mehmet", "Fatma", "Ayşe", "Ahmet"]


const num=[1,33,2,44,54,13,4,23,11]

num.sort((a,b)=>{return a-b}).reverse()

console.log(num)

// Çıktı: [54, 44, 33, 23, 13, 11, 4, 2, 1]


Yöntem: flat()
const a = [1, [2, [3, 4], 5], 6, [7, 8]].flat(Infinity)

console.log(a)


// Çıktı: [1, 2, 3, 4, 5, 6, 7, 8]


method: map()
[1, 2, 3, 4, 5, 6, 7, 8].map(a=>console.log(a))


const dizi1 = [1, 2, 3]
const dizi2 = [4, 5, 6]
const newArray = [...dizi1, ...dizi2]

console.log(newArray)
// [1, 2, 3, 4, 5, 6]
const array = ['A', 'B', 'C', 'D', 'E']
const [birinci, ikinci, ...gerikalan] = array

console.log(birinci)
// A
console.log(ikinci)
// B
console.log(gerikalan)
// ["C","D","E"]


Bu durumda filter() method, her elemanı bir diziden alır ve ona karşı bir koşullu ifade uygular.
let num1 = [1,2, 3, 4, 5, 6, 7, 8];

let data = num1.filter((value)=> return value%2==0) 

// Çıktı: data = [2,4,6,8]
