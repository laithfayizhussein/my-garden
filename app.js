'use strict'

let allData = [];

function Flower ( img , name , season){
    this.img = img ;
    this.name = name ;
    this.season = season ;
    allData.push(this)
}

Flower.prototype.getImg = function (){
    if (this.img = 'Alstroemerias' ){
        img.src = "./img/Alstroemerias.jpeg";
}
else if (this.img = 'Gardenias' ){
    img.src = "img/Gardenias.jpeg";
}
else if (this.img = 'Orchids' ){
    img.src = "img/Orchids.jpeg";
}
else if (this.img = 'Peonies' ){
    img.src = "img/Peonies.jpeg";
}
else if (this.img = 'Roses' ){
    img.src = "img/Roses.jpeg";
}
else if (this.img = 'Sunflowers' ){
    img.src = "img/Sunflowers.jpeg";
}

else {
    img.src = "img/Tulips.jpeg";

}
}



let cont = document.getElementById('cont')
let table = document.createElement('table')
cont.appendChild(table)




Flower.prototype.fillData = function () {

    let index = allData.length -1 ;

    let tr = document.createElement('tr')
    table.appendChild(tr)
   

    let td = document.createElement ('td')
    tr.appendChild(td)
    td.textContent = allData[index].img

    td = document.createElement ('td')
    tr.appendChild(td)
    td.textContent = allData[index].name

    td = document.createElement ('td')
    tr.appendChild(td)
    td.textContent = allData[index].season

    setLocal ()
}

let form = document.createElement('form')
form.addEventListener('submit' , handleUser)
function handleUser (event){

    event.preventDefault();


    let imgF = event.target.imageFlower.value;
    let folwern = event.target.flowerName.value;
    let seasonn = event.table.season.value;

    let newFlower = new Flower (folwern , imgF , seasonn)
    newFlower.getImg();
    newFlower.fillData();
}

function setLocal (){
    localStorage.setItem ('info' , JSON.stringify (allData))

}

function getLocal (){
    let data = localStorage.getItem ('info')
    let dataParse = JSON.parse (data)

    if (dataParse){
        for (let i = 0; i < dataParse.length; i++) {

            let reinst = new Flower (dataParse[i].img , dataParse[i].name , dataParse[i].season )
            reinst.fillData();
            
        }
    }
}

getLocal ();