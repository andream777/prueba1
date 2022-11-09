/*let cc_1 = document.querySelectorAll('.circ-4 > svg circle');

cc_1[1].style.strokeDashoffset = 'calc(155px - (155px * 70) / 100)'
*/

let url = 'https://sheets.googleapis.com/v4/spreadsheets/11MAgtqWkPDoBiMXjusu2RNUefhHYejvxC69DHSxbmm4/values/probabilidades!A2:J39?key=AIzaSyDnn1QkpAhLOI1U07nm29jYQPKOUxE10Xo';

fetch(url)
   .then(response => {

      return response.json();

   })
   .then(data => {

  // HORA DE ACTUALIZACION

 let dt_actual = document.querySelector('.inf-dates span');

 dt_actual.innerText = data.values[0][6];



 //fin    
 
 // fecha

let fechas = document.querySelector('#data-fe');
let data_new = new Date()

fechas.innerHTML = data_new.getDate() + '/' + (data_new.getMonth() + 1) + '/' + data_new.getFullYear();

//FIN DE FECHA

 //contenido

 let main_inf = document.querySelector('#cards-t');

 
//valor
 let valor_she = data.values[2][9];

 

 
 //if (main_inf.className === 'cargando') {
 if (valor_she < 100) {  

    let favoritos_new = document.querySelector('#fav');
    

    main_inf.className = data.values[1][7];
    main_inf.innerHTML = data.values[0][8];

    //valores de carga
    let num_per = document.querySelectorAll('.carg-por span');

    num_per[0].innerText = data.values[0][9];
    num_per[1].innerText = data.values[1][9];
    num_per[2].innerText = data.values[2][9] + '%';
    console.log(main_inf)
    console.log(num_per)

    favoritos_new.innerHTML = '';



 } else {

   main_inf.className = data.values[0][7];
   main_inf.innerHTML = data.values[1][8];
    
   let cc_tex1 = document.querySelectorAll('.circ-text-1 span')
      
   let cc_1 = document.querySelectorAll('.circ-4 > svg circle');

   let name_ani = document.querySelectorAll('.cont-2 .text-2');

   for(var i = 0; i < data.values.length; i++){

         let img_ani = document.querySelectorAll('.cir-1 img');
         let animalito_v = data.values[i][2]; 
         cc_tex1[i].innerText = data.values[i][1];  
         cc_1[(i*2)+1].style.strokeDashoffset = `calc(155px - (155px * ${animalito_v}) / 100)`;
         name_ani[i*2].innerText = data.values[i][0];

         img_ani[i].src = `img/${data.values[i][3]}.jpg`;
  
         //informacion extra

         let infor_i = document.querySelectorAll('.inf-1');
         let modal = document.querySelector('.modal-1');
         let salir = document.querySelector('.salir span');
         let vari = i
         

         infor_i[i].addEventListener('click', () => {

            let data_inf = document.querySelectorAll('.mod-2 p')[1];
            let num_inf = document.querySelector('.mod-num');
  
            modal.style.display = 'flex';

            data_inf.innerText = data.values[vari][0];
            num_inf.innerText = data.values[vari][4];

            

         });
         
         //salir del modal

         salir.addEventListener('click', () => {
            
            modal.style.display = 'none'

         });

         // fin
          
         if(animalito_v >= 85){

            cc_1[(i*2)+1].style.stroke = "rgb(46, 236, 9)";

         } else if(animalito_v >= 50 && animalito_v <= 84 ){
             
            cc_1[(i*2)+1].style.stroke = "rgb(235, 220, 20)";

         } else {
            
            cc_1[(i*2)+1].style.stroke = "red";

         }
 
      }

      //FAVORITOS

      let cont_fav = document.querySelector('#fav');

      cont_fav.innerHTML = data.values[2][8];
 
      let favoritos = document.querySelectorAll('.fav-1 img')

       for(var f = 0; f < favoritos.length; f++){
                  
         favoritos[f].src = `img/${data.values[f][5]}.jpg`;
      

       }
  


 }

   

      

      
   
});
















