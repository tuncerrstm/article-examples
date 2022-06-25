Dizi Nedir?

Dizi, mantıksal olarak ilişkili olabilecek veya olamayacak bir değişken adı altında bir öğe koleksiyonu depolamanıza olanak tanıyan bir veri yapısıdır. Genellikle, dizinleri veya anahtarları ile erişilirler.

JavaScript Dizisi Sözdizimi
const dizi_adi = [oge1,oge2,...]

JavaScript Dizisinin Özellikleri
Diziler yeniden boyutlandırılabilir ve herhangi bir türe sahip olabilir.
["Tuncer",5,true]
Sıfırdan indekslenirler.
["birinci","ikinci","ucuncu","dorduncu"]
// 0 1 2 3 <- Index
Dizi öğelerine, dizinlerine göre erişebiliriz.
diziadi[0] // dizideki ilk öğeyi döndürür.
diziadi[1] // dizideki ikinci öğeyi döndürür.
Yeni Dizi Oluşturma
Dizileri iki şekilde oluşturabilirsiniz:
const dizi_adi = [oge1,oge2,...]

veya

const dizi_adi = new Array(oge1,oge2,...)

Yararlı Dizi Yöntemleri ve İşlemleri
1.Bir Dizinin Uzunluğu:
const billionaries =["Mustafa Kemal Atatürk","Jeff Bezos"," Elon Musk ","Tundzher"]
billionaries.length // 4
2. Dizide Döngü Yapmak:
const billionaries =["Mustafa Kemal Atatürk","Jeff Bezos","Elon Musk","Tundzher"]
for(let i=0;i<billionaries.length;i++){console.log(billionaries[i])
}

//Çıktı:
Mustafa Kemal Atatürk
Jeff Bezos
Elon Musk
Tundzher

3. Sondan Yeni Bir Öğe Ekleme:
Yöntem: push()
const billionaries = ["Mustafa Kemal Atatürk","Jeff Bezos","Elon Musk","Tundzher"]

billionaries.push("Muzi")

//Çıktı:

["Mustafa Kemal Atatürk ","Jeff Bezos","Elon Musk","Tundzher","Muzi"]

4. En Sondaki Öğeleri Kaldırma:
Yöntem: pop()

billionaries.pop()

// Son elemanı döndürür ve diziden kaldırır.

5. Baştaki Öğeleri Kaldırmak:
Yöntem: shift()

const billionaries =["Jeff Bezos","Mustafa Kemal Atatürk","Elon Musk"]
billionaries.shift() 
// Sonuç: Jeff Bezos diziden kaldırır.

6. Baştan Öğe Ekleyin:
Yöntem: unshift()

const billionaries = ["Jeff Bezos","Mustafa Kemal Atatürk","Elon Musk"]

billionaries.unshift("Tundzher")

// Dizi uzunluğunu döndür ve diziye Tundzher ‘i ekler..

7. İki Diziyi Birleştirin:
Yöntem: concat()

var dizi1 = [1, 2, 3];
var dizi2 = [4, 5, 6];
var dizi3 = dizi1.concat(dizi2);
console.log(dizi3);
// Çıktı: [1,2,3,4,5,6]

8. Öğeleri Belirli Bir Konuma Ekleyin:
Yöntem: splice(start,end,...items)

const meyveler = ["Muz", "Portakal", "Elma", "Mango"];

meyveler.splice(2, 0, "Limon", "Kivi");

console.log(meyveler)

//Çıktı: ['Muz', 'Portakal', 'Limon', 'Kivi', 'Elma', 'Mango']


9. Dizinin Bir Bölümünü Silin:
Yöntem: slice()
const test = ["Toni", "Muzi", "Müge", "Hakan", "Tuncer"];
const test2 = test.slice(1);

//test Çıktı: ["Toni", "Muzi", "Müge", "Hakan", "Tuncer"]
//test2 Çıktı: ["Muzi", "Müge", "Hakan", "Tuncer"]

10. Dizilerde Sıralama:
Yöntem: sort()

const kelime_ve_harf=["a","e","b","c","alfa","beta","gamma"]
kelime_ve_harf.sort()
const numara=[1,33,2,44,54,13,4,23,11]
numara.sort() // Sayısal olarak değil, alfabetik olarak..
console.log(kelime_ve_harf)
console.log(numara)
// Çıktı : ['a', 'alfa', 'b', 'beta', 'c', 'e', 'gamma']
// Çıktı : [1, 11, 13, 2, 23, 33, 4, 44, 54]

11. Diziyi Ters Çevirin:
Önce sort() kullanarak sıralayın, ardından reverse() kullanarak bunu tersine çevirin.

const liste=["Ahmet","Mehmet","Ayşe","Fatma"]

liste.sort().reverse()

console.log(liste)

// Çıktı: ["Mehmet", "Fatma", "Ayşe", "Ahmet"]


12. Bir Sayı Dizisini Ters Çevirin:
const num=[1,33,2,44,54,13,4,23,11]

num.sort((a,b)=>{return a-b}).reverse()

console.log(num)

// Çıktı: [54, 44, 33, 23, 13, 11, 4, 2, 1]


13. Tek Yönlü Çok Boyutlu Dizi:
Yöntem: flat()
const a = [1, [2, [3, 4], 5], 6, [7, 8]].flat(Infinity)

console.log(a)


// Çıktı: [1, 2, 3, 4, 5, 6, 7, 8]

14. Array Map Kullanımı: 
method: map()
[1, 2, 3, 4, 5, 6, 7, 8].map(a=>console.log(a))

15. Spread Operatörünün Kullanımı:

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


16. Filter Method() Kullanımı:
Bu durumda filter() method, her elemanı bir diziden alır ve ona karşı bir koşullu ifade uygular.
let num1 = [1,2, 3, 4, 5, 6, 7, 8];

let data = num1.filter((value)=> return value%2==0) 

// Çıktı: data = [2,4,6,8]

Bu konu buraya kadardı. Hemen hemen, tüm dizi yöntemlerini ele aldık ve JavaScript'teki diziler hakkında bir fikir edindik.
Umarım bu ayrıntılı içerik faydalı olmuştur. JavaScript, web geliştirme ve daha fazlası hakkında daha çok içerik için beni Medium'da ve Twitter ‘da takip ederseniz mutlu olurum. 
