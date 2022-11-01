/*let cc_1 = document.querySelectorAll('.circ-4 > svg circle');

cc_1[1].style.strokeDashoffset = 'calc(155px - (155px * 70) / 100)'
*/

let url = 'https://sheets.googleapis.com/v4/spreadsheets/11MAgtqWkPDoBiMXjusu2RNUefhHYejvxC69DHSxbmm4/values/probabilidades!A2:D39?key=AIzaSyDnn1QkpAhLOI1U07nm29jYQPKOUxE10Xo';

fetch(url)
   .then(response => {

      return response.json();

   })
   .then(data => {

      let cc_tex1 = document.querySelectorAll('.circ-text-1 span')
      
      let cc_1 = document.querySelectorAll('.circ-4 > svg circle');

      let name_ani = document.querySelectorAll('.cont-2 .text-2')

      

  //      cc_1[1].style.strokeDashoffset = `calc(155px - (155px * ${animalito_v}) / 100)`;

  //    cc_tex1[0].innerText = data.values[0][1];

      
 // convirtiendo de nodelist a aarray y luego obteniendo la posicion del array
 // console.log(Array.from(cc_1).indexOf(cc_1[(i*2)+1]))  
 //       console.log(cc_1[(i*2)+1])   

      for(var i = 0; i < data.values.length; i++){

         let img_ani = document.querySelectorAll('.cir-1 img');
         let animalito_v = data.values[i][2]; 
         cc_tex1[i].innerText = data.values[i][1];  
         cc_1[(i*2)+1].style.strokeDashoffset = `calc(155px - (155px * ${animalito_v}) / 100)`;
         name_ani[i*2].innerText = data.values[i][0];

         img_ani[i].src = `img/${data.values[i][3]}.jpg`;

          console.log(img_ani)
         if(animalito_v >= 85){

            cc_1[(i*2)+1].style.stroke = "rgb(46, 236, 9)";

         } else if(animalito_v >= 50 && animalito_v <= 84 ){
             
            cc_1[(i*2)+1].style.stroke = "rgb(235, 220, 20)";

         } else {
            
            cc_1[(i*2)+1].style.stroke = "red";

         }
 
      }

   })




/*
var cars = 23;
var moto = 'cars'+ 1
var bici = 'soy bicicleta' 

eval("var "+moto+" =  '"+bici+" ';")
console.log(cars+1)

for(var i = 1; i<2; i++){

    let uno_1 = 23
    let tratar = 'uno_'+i;
    eval(uno_(i))

    uno_1 = 332

    console.log(uno_1)
}*/

// fecha

let fechas = document.querySelector('#data-fe');
let data_new = new Date()

fechas.innerHTML = data_new.getDate() + '/' + (data_new.getMonth() + 1) + '/' + data_new.getFullYear();