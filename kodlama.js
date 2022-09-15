//Görev metni text içeriğini alma
let yeniGorevMetni = document.querySelector("#task");
//Liste'yi değişkene atama
let liste = document.querySelector("#list");
//Boş dizi tanımlandı
let yeniDizi = [];
//kontrol degiskeni tanımlandı
let atama;

allStorage();

//Başlangıçta gelen liste elementleri diziye aktarıldı
/*for(let i= 0; i<liste.children.length;i++){
    yeniDizi.push(liste.children[i].textContent);
}*/

//localStorage id değişkeni tanımlandı
let lsId = yeniDizi.length;

//Başlangıçtaki verileri localStorage'e ekleme
/*for(let i = 0; i < yeniDizi.length; i++){
    localStorage.setItem(i,yeniDizi[i]);
}*/

let dizi1 = [];
dizi1.push(allStorage());
for(let i=0;i<dizi1.length;i++){
    let yeniLi = document.createElement("li");
    yeniLi.textContent=dizi1[i];
    newLi(dizi1[i],dizi1.length);
    //liste.appendChild(newLi(5));
    liste.appendChild(yeniLi);
    console.log(dizi1[i]);
}

//Listedeki her elemana "close" butonu eklendi
for (let i = 0; i < liste.children.length; i++) {
    let clsBtn = document.createElement("SPAN");
    clsBtn.textContent="\u00D7";
    clsBtn.className = "close";
    liste.children[i].appendChild(clsBtn);
    //clsBtn(span) üzerindeki x'e tıklayınca sil fonskiyonunu çalıştır
    clsBtn.onclick = sil;
    //kontrol fonksiyonunu başlangıçtaki öğeler için çalıştır
    liste.children[i].onclick = kontrol;
}

//Ekle fonksiyonu
function ekleTikla(){
    //BOŞLUK KARAKTERİ İLE GİRDİ YAPILMAYACAK
    if(yeniGorevMetni.value==""){
        console.log("Boş girdi yapılamaz...")
    }else{
    //createElement ile yeni bir listItem (li) oluşturuyoruz
    let yeniListeElemani = document.createElement("li");
    //task(input)'tan gelen veriyi "yeniListeElemani" içerisine metin olarak giriyoruz
    yeniListeElemani.textContent = yeniGorevMetni.value;
    //span ve "close" class'ı ekleme
    let clsBtn = document.createElement("SPAN");
    clsBtn.textContent=("\u00D7");
    clsBtn.className = "close";
    yeniListeElemani.appendChild(clsBtn);
    //appendChild ile oluşturduğumuz elementi "liste" içerisine ekliyoruz
    liste.appendChild(yeniListeElemani);
    //diziye ekleme
    atama = liste.lastChild.textContent;
    yeniDizi.push(atama.slice(0, atama.length - 1));
    console.log(yeniDizi);//silinebilir
    //localStorage'e ekler
    atama=yeniListeElemani.textContent;
    localStorage.setItem(lsId,atama.slice(0, atama.length - 1));
    lsId++;
    //task inputu içerisindeki metni siliyoruz
    yeniGorevMetni.value="";
    //clsBtn(span) üzerindeki x'e tıklayınca sil fonskiyonunu çalıştır
    clsBtn.onclick = sil;
    //kontrol fonksiyonunu her yeni öğre için çalıştır
    yeniListeElemani.onclick=kontrol;
    }
}

//Sil fonksiyonu
function sil(){
    this.parentElement.remove();
    //dizi güncelleniyor
    yeniDizi = [];
    for(let i= 0; i<liste.children.length;i++){
        atama = liste.children[i].textContent;
        yeniDizi.push(atama.slice(0, atama.length - 1));
    }
    console.log(yeniDizi);//silinecek
    //localStorage güncelleniyor
    localStorage.clear();
    for(let i = 0; i < yeniDizi.length; i++){
        localStorage.setItem(i,yeniDizi[i]);
    }
    lsId = yeniDizi.length;
}

//Kontrol fonksiyonu, yapıldı işaretlenmesi
function kontrol(){
    this.classList.toggle("checked");
}

function allStorage() {

    let values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}

function newLi(liText,a) {
    for( i = 0; i <= a; i = i + 1 ){
        let li1 = document.createElement( 'li' );               // create a new li element
        li1.textContent = liText;               // .textContent is mush shorter than creating a textNode
        liste.appendChild( li1 );                           // every time append a new item
      }
}