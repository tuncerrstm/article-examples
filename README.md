<!-- # article-examples

javaScript Exercises

#Studiefrågor - Çalışma Soruları

// 1. Vilka datatyper finns det i JS? Svara i form av en array.

let datatypes = ['String','Boolean','Number','Array','Object','Function']

// 2. Är följande if sats true eller false?

let a = 1;
let b = '1';
if(a == b) {  // true
}

// 3. Vad är den tekniska skillnaden ( förutom var, let ) på dessa två deklarationer?

let name = 'Greta Thunberg';
var name2 = 'Greta Thunberg';

Cevap ==> ==>3 let är bara synlig i det scope den finns var är synlig i hela funktionen

// 4. Hur tar man reda på vad en variabel har för datatyp?

typeof(variable)

// 5. Vilken av följande tecken visar ett kodblock?

[] // A
() // B
{} // C

Cevap ===> {}//C

// 6. Vad i följande kod är blocket som exekveras?

el.on('click', () => {
    alert('Ariba!');
})

{
    console.log("Hello")
}

// 7. Vad kommer stå i console.log()?

var greeting = 'Good bye world!';

{
    let greeting = 'Hello World';
}

console.log(greeting);

Çıktısı ===>  Good bye world!

// Strings
// 8. Vilken av följande syntax är korrekt sätt att skriva strängar.

"Hello World" // A
'Hello World' // B
`Hello World` // C

Cevap ===> Alla är korrekta (Hepsi Doğru)

// 9. Räkna antal tecken i strängen nedan.

let sentence = "If you're having code problems I feel bad for you son. I got 99 problems, but a glitch ain't one."

a = sentence.length
console.log(a)   // ==>> (97 Karakter Çıkar!)

// 10. Gör en template string där N ersätts med variabeln name.

let name = '<Ditt namn>' 
`Hej N din gamle knasboll!`

Cevap ==>> `Hej ${name} din gamle knasboll!`


// Arrays - Diziler
// 11. Gör en array med 5 frukter i.

const fruits = ['tomato', 'dragon fruit', 'avocado', 'cucumber', 'olive']

// 12. Lägg till en frukt i början och en frukt i slutet på arrayen.

const fruits = ['tomato', 'dragon fruit', 'avocado', 'cucumber', 'olive']

fruits.push('corn')
fruits.unshift('pumpkin')

console.log(fruits)

// 13. I ovanstående fruktarray, plocka bort första och sista frukten.

const fruits = ['tomato', 'dragon fruit', 'avocado', 'cucumber', 'olive']

let last = fruits.pop()
let first = fruits.shift()

console.log(fruits)

Eller
fruits.splice(1, fruits.length-2)

// 14. I följande array, sätt in två nya frukter på index 2.

let fruits = ['apple', 'orange', 'pear', 'kiwi']

fruits.splice(2,0, 'chili pepper', 'zuccini')

console.log(fruits)

// Sonuç Alttaki Gibi Çıkar:
// 0: "apple"
// 1: "orange"
// 2: "chili pepper"
// 3: "zuccini"
// 4: "pear"
// 5: "kiwi"

// 15. Klona följande array och ändra första frukten till pineapple.

let fruits = ['apple', 'orange', 'pear', 'kiwi']

let clone = [...fruits]
clone[0] = 'pine apple'

console.log(clone)

// 16. Sortera följande array i fallande ordning.

let num = [1,5,78,7,122,3,4,65,40,2,8]
 // Callback-trolleri
num.sort( (a,b) => b - a)
console.log(num)  // Cevap ==> Azalan şekilde sıralama yapar!

// 17. Lägg ihop följande arrayer.

let a = [1,2,3];
let b = [4,5,6];

// Alternativ 1
// let c = [...a, ...b];
// Alternativ 2
let d = a.concat(b)
console.log(d) // ==> Diziyi birleştirdi. 
Çıktı: [1, 2, 3, 4, 5, 6]


// 18. Mixa följande arrayer där varannan är från array a och varanan från array b.

let a = ['My', 'has', 'many', 'open'];
let b = ['brain', 'to', 'tabs', '!'];

let zipped = []
let largest = Math.max(a.length, b.length)
for(let i = 0; i < largest; i++){
  if(a[i]){ 
    zipped.push(a[i]) 
  } 
  if(b[i]){ 
    zipped.push(b[i]) 
  } 
}
// console.log(zipped) // Çıktısı : ---> My', 'brain', 'has', 'to', 'many', 'tabs', 'open', '!'

// 19. Merga in array a i array b på index 2.

// let a = [1,2,7,8,9,10];
// let b = [3,4,5,6];
// c = b.splice(2,0, ...a)

// console.log(c)
// --------------------

// 2. Çözüm : 
let a = [1,2,7,8,9,10];
let b = [3,4,5,6];
let array3 = a.concat(b);

console.log(array3)  ===> İki diziyi birleştirir ve Ekrana ==> [1, 2, 7, 8, 9, 10, 3, 4, 5, 6] ' bu şekilde basar! 


20. Gör alla namn i array names till versaler.
let names = ['sixten', 'Eva', 'Ali', 'Kim', 'Greger', 'Alicia'];

let arrToUp = String.prototype.toUpperCase.apply(names).split(",");

console.log(arrToUp)

21. Filtrera fram samtliga personer som är 30 år eller äldre.
let names = [
    { name: 'sixten', age: 32 },
    { name: 'Eva',    age: 19 },
    { name: 'Ali',    age: 67 },
    { name: 'Kim',    age: 13 },
    { name: 'Greger', age: 30 },
    { name: 'Alicia', age: 82 }
    ];

let filtered = []
for(let person of names){
    if(person.age >= 30){
        filtered.push(person)
    }
}

console.log(filtered)


// 22. Skriv koden för att undersöka om arrayen names innehåller namnet Ewa. Ditt svar ska vara true eller false.

let names = ['sixten', 'Eva', 'Ali', 'Kim', 'Greger', 'Alicia'];

a = names.includes('Ewa') // false

console.log(a);  // false

// 23. Skapa en for-loop som itererar 1000 varv. För varje iteration ska du console.log() vilket varv du är på.

for(let i = 0; i < 1000; i++){
    console.log(i)
}

// 24. Skapa en for-loop som räknar ner från 100 till 0. För varje varv ska du console.log() vilket varv du är på.

for(let i = 100; i >= 0; i--){
    console.log(i)
  }

// 25. Loopa ut följande array med console.log().

let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];

for(let fruit of fruits){
    console.log(fruit)
  }


// 26. Loopa ut föjande array med console.log(). Sätt vilket index varje frukt har framför. Ex. 0. apple, 1. orange osv.

let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];

for(let i=0; i < fruits.length;i++){
  console.log(i,fruits[i])
}

// 27. Generera en kortlek med 52 kort där varje kort innehåller en färg ( suite ) och ett värde mellan 2 och 14 ( ess ). Ex.

let cards = []
const SUITES = ['hjärter', 'spader', 'ruter', 'klöver']
for(let i = 0; i < SUITES.length; i++){
  let suite = SUITES[i]
  for(let j = 1; j <= 13; j++){
    let card = `${suite} ${j}`
    console.log(card)
  }
}
-------------------------
Üstteki Cevap Doğru ---- >>> Alltaki AS KRAL VALE VE KIZ için!!

function getCardValue(num){
  switch(num){
    case 1: return 'Ass';
    case 11: return 'Knäckt';
    case 12: return 'Damm';
    case 13: return 'Knug';
    default: return num
  }
}

let cards = []
const SUITES = ['hjärter', 'spader', 'ruter', 'klöver']
for(let i = 0; i < SUITES.length; i++){
  let suite = SUITES[i]
  for(let j = 1; j <= 13; j++){
    let card = `${suite} ${getCardValue(j)}`
    console.log(card)
  }
}
-----------------------------

28. Skapa en ett objekt som heter book och som har egenskaperna title, author och genres. De två första egenskaperna ska vara strängar och den sista en array.

let book = {
  title: 'Tolv sätt att glömma nycklarna',
  author: 'Povel Ramel',
  genres: ['vetenskap', 'baskunskap']
}

console.log(book)


// 29. console.log() endast egenskapen city i följande objekt.

let person = {
  name: 'Sixten Faceplant',
  email: 'sixten.faceplant@zocom.se',
  role: 'ninjah',
  adress: {
      street: 'Karatevägen 3',
      zip: '41477',
      city: 'Kablam City'
  }
}

console.log(person.adress.city)


// 30. Klona ett objekt.

let obj = {}
let clone = {...obj} // Shallow clone

let deepClone = JSON.parse(JSON.stringify(obj))

console.log(deepClone)

 // 31. Skapa objektet dog med egenskaperna name, breed och metoden bark som ska returnera "Woff, jag heter N!" där N ska ersättas med egenskapen name i samma objekt.

 let dog = {
   name: 'Snoopy',
   breed: 'beagle',
   woff: function(){
     return `Woff, jag heter ${this.name}`
   }
 }
 console.log(dog)


// 32. Loopa ut följande objekt där key och value ska console.log(). Ex. "name - Sixten".

let person = {
  name: 'sixten',
  email: 'sixten@zocom.se',
  role: 'ninjah',
  age: 32
  }

let keys = Object.keys(person)
for(let key of keys){
  console.log(key, " - ", person[key])
}

Functions - Fonksiyonlar

// 33. Skriv en funktion som adderar två numeriska argument (x och y ) och returnerar.

function add(a,b){
  return a+b
}
console.log(add)

// 34 Skriv en anonym funktion som returnerar en sträng som förklarar skillnaden på namnade- och anonyma funktioner.

 function skriva(){
   return 'Jag har inget namn, för jag är en anonym funktion. Du borde skicka mig som argument till en annan funktion annars är jag förlorad för evigt.'
 }
 a = skriva.apply()
 console.log(a)


35. Skriv en funktion som plockar ut året från en sträng i datumformat. Funktionen ska ta ett argument, som ska vara en sträng.
Strängen ska alltid ha 10 tecken och följa mönstret 'YYYY-MM-DD'.

function getYear(dateString){
  return Number(dateString.substring(0,4))
}
a = getYear('2019-10-14')
console.log(a)  === Sonuç Çıktısı =>  // 2019

// 36. Skriv en funktion som tar tre parametrar. De första två är två tal och den sista är en aritmetisk operator d.v.s antingen '+', '-', '/', '*'.

function calcThis(num1, num2, operator){
  if(operator == '+'){
    return num1 + num2;
  }else if(operator == '-'){
    return num1 - num2;
  }else if(operator == '*'){
    return num1 * num2;
  }else if(operator == '/'){
    return num1 / num2;
  }
}
a = calcThis(7,2,'*')

console.log(a)  == > Sonuç // 14


// Conditionals - Şartlar

// 37. Skriv en funktion som jämför om två tal är likadana och returnerar true / false.

function compareThis(num1,num2){
  return num1 == num2
}
console.log(compareThis(1,1)) // true
console.log(compareThis(3,1)) // false

// 38. Skriv en funktion som kollar om ett tal är mellan 20 och 40 och returnerar true / false.

function between(num){
  return num >= 20 && num <= 40
}
 console.log(between(30))// true
 console.log(between(50)) // false

// 39. Skriv en funktion som jämför längden på två arrayer och returnerar den längsta.

 function getMeTheLongestArr(arr1, arr2){
  if(arr1.length > arr2.length){
    return arr1
  }else{
    return arr2
  }
}
say = getMeTheLongestArr([1,2], ['A','B','C'])
console.log(say) //   ===> Çıktı ['A','B','C']


// 40. Arunda talet 1337.51 nedåt till närmaste heltal med hjälp av Math object.

a = Math.floor(1337.41)
console.log(a)

// 41. Arunda talet 1337.48 uppåt till närmaste heltal med hjälp av Math object.

a = Math.ceil(1337.41)
console.log(a)

// 42. Arunda talet 1337.497 till närmaste heltal med hjälp av Math object.

a = Math.round(1337.41)
console.log(a)

// 43. Skriv en funktion ( random(max) ) som tar ett numerisk argument ( max ). Funktionen ska returnera ett slumpat tal mellan 0 och argumentet.

 function random(max){
   return Math.floor(Math.random()*max)
 }
 a = random(10000)
 console.log(a)


// 44. Skriv en funktion ( randomPassword(n) ) som tar ett numerisk argument ( n ). Funktionen ska returnera ett slumpat lösenord bestående av bokstäver och siffor med längden n.

var generatePassword = (
  length = 20,
  wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
) =>
  Array.from(crypto.getRandomValues(new Uint32Array(length)))
    .map((x) => wishlist[x % wishlist.length])
    .join('')

a = generatePassword(7)
console.log(a) // Çıktı Örnek ==> sYdK~uG

// 45. Skriv en funktion ( randomName(names) ) som tar en array som argument ( names ). Funktionen ska returnera ett slumpat namn från arrayen.

const names = ['sixten', 'Eva', 'Ali', 'Kim', 'Greger', 'Alicia']

function randomName(names){
  return names[random(names.length)]
}

a = randomName(names)
console.log(a) // Greger

---------------------------
Üstteki Kod Çalışmadı Alttaki Gibi Yaptığımda Çalıştı..

let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
  let random=names[Math.floor(Math.random()*names.length)]
console.log(random)


// Program flow - Program Akışı
// 46. Vad är skillnaden på följande två funktioner?

let getData = function(url) {};
function getData() {};
// ==> Den ena har en parameter, annars ingen skillnad!!
// Birinde parametre var yoksa ikiside aynıdır farkı yok!!


// 47. I vilken ordning kommer följande funktioner att exkveras?
// Execute

HelloAgainAgain();

function hello(){
    console.log('Hello!')
};

function helloAgain(){
    console.log('Hello Again!')
    hello();
};

function HelloAgainAgain(){
    console.log('Hello Again Again!')
    helloAgain();
}

// ===> Çıktısı:
1. Hello Again Again!
2. Hello Again!
3. Hello!

// 48. Ordna programmet i rätt ordning så alla pokemons printas ut. All kod som behövs finns med.

let pokemons = ['Pikachu', "Charmander", "Bulbasaur", "Squirtle"];

function printPokemons() {
  let pokemons = ['Pikachu', "Charmander", "Bulbasaur", "Squirtle"];
  for(let i=0;i<pokemons.length;i++) {
    console.log("One awesome pokemon is " + pokemons[i]);
  }
}
printPokemons();
// Çıktısı:
One awesome pokemon is Pikachu
One awesome pokemon is Charmander
One awesome pokemon is Bulbasaur
One awesome pokemon is Squirtle

// 49. Ordna programmet i rätt ordning så att det går att skicka in en sträng och få tillbaka den baklänges.

function reverseString(str) {
  let newString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
a = reverseString('hello');
console.log(a)

DOM Manipulation - DOM Manipülasyonu
DOM (Document Object Module) HTML dökümanları içerisinde bulunan nesnelere kolaylıkla erişim sağlamak ve üzerinde işlemler yapabilmek için tasarlanan bir modeldir.
DOM ile HTML dosyamızda bulunan her şeye erişim sağlayabiliriz.
HTML dosyasında bulunan bütün öğeler, DOM üzerinde bir nesne olarak görülür.

// Single selector
// 56. Hämta innehållet i h2 från följande kod.
{/* <article>
    <h2>Cowabunga!</h2>
    <p>Some interesting text.</p>
</article> */}

const heading = document.querySelector("article h2")
console.log(heading)
// ==> Çıktısı: ==> <h2>Cowabunga!</h2>

// 57. Hämta innehållet från 3:e li från följande kod.

// <ul>
//     <li>Gold</li>
//     <li>Silver</li>
//     <li>Bronze</li>
// </ul>

 const listItem = document.querySelector("ul li:nth-of-type(3)")
console.log(listItem)  // = 3. Elemanı seçer yani, <li>Bronze</li>

// Select All (node list)
// 58. Gör om innehållet alla li i nedanstående punktlista till versaler.
// <ul>
//     <li>Gold</li>
//     <li>Silver</li>
//     <li>Bronze</li>
// </ul>

const listItems = document.querySelectorAll("li")
for(let item of listItems){
  item.innerText = item.innerText.toUpperCase()
}
//  ==> Çıktısı: <li> içindeki tüm değerleri "BÜYÜK HARF" olarak yazdırır!!

 // Value from input - Girişten Gelen Değerler
 // 59. Hämta värdet från nedanstående input-fält.
// <input type="email" id="email">

const email = document.querySelector("#email")
const theEmail = email.value

// 60. Hämta det valda alternativet från nedanstående select-lista.
// <select id="options">
//     <option value="a">A</option>
//     <option value="b">B</option>
//     <option value="c">C</option>
// </select>

const options = document.querySelector("#options")
const value = options.value

// Attributes - Öznitelikler
// 61. Hämta bildlänken i följande kod.
// <img src="img/awesome.jpg" alt="awesome stuff" class="awesome" />

const img = document.querySelector("img.awesome")
const imageLink = img.getAttribute("src")


// 62. Kika om följande checkbox är iklickad eller ej.

// <input type="checkbox" id="gdpr-ok" checked />

const checkbox = document.querySelector("#gdpr-ok")
if(checkbox.checked){
  // Yes.. it is
}

// CSS
// 63. Lägg på classen .show på följande element.
// <nav id="main-nav"></nav>

// Cevap =>
const nav = document.querySelector("#main-nav")
nav.classList.add("show")


// 64. Toggla classen .active på följande element.

// <a id="home" href="#">Home</a>

const homeLink = document.querySelector("#home")
homeLink.classList.toggle("active")


// 65. Lägg till classen .shadow på alla bilder i följande kod.

// <figure class="gallery">
//     <img src="img/image-1.jpg" alt="1">
//     <img src="img/image-2.jpg" alt="2">
//     <img src="img/image-3.jpg" alt="3">
// </figure>

// ==> Cevap:

const images = document.querySelectorAll(".gallery img")
for(let image of images){
  image.classList.add("shadow")
}

// Create content
// 66. Skapa upp en h1-tagg och lägg till en rubrik och appenda den sedan på body.

// ==> Cevap:
const heading = document.createElement("h1")
heading.innerText = "Awesome headline!"
document.body.append(heading)

hint
Använd createElement, .innerHTML och append() för denna uppgift.
67. Anropa följande API const url = `https://api.chucknorris.io/jokes/random`; med fetch() och spara svaret i en variabel och console.log(). Skapa en section-tagg som kommer agera som en wrapper. Kolla hur objektet ser ut och skapa en img-tagg för icon_url. En h2-tagg för value och till sist en a-tagg för url. Append() alla dessa taggar på section och sedan append() på body.

Events
68.
<button>Lets go!</button>
69. Lyssna efter ett click event på samtliga li i följande lista. Vid klick ska en alert() dyka upp där det står Jag älskar N!!! Ex. "Jag älskar äpple!!!"

<ul>
    <li>Päron</li>
    <li>Äpple</li>
    <li>Kiwi</li>
    <li>Keso</li>
    <li>Frystorkad mört</li>
</ul>

70. Följande input-fält ska console.log() innehållet när man trycker enter.

<input type="password" id="password" placeholder="password" />
hint
här är "keyup"-eventet väldigt användbart.
