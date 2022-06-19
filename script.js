const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')
const slider = document.querySelector('.slide')
const imagen = document.getElementById('imagen-slider')
const titulo = document.getElementById('slide-titulo')
const parrafo = document.getElementById('slide-parrafo')



let index = 0;


function izquierda()  {
        index--
        if(index < 0){
            index = 2
        }    
        mostrarSlider()
}
    
function derecha(){
    index++   
    if(index > 2){
        index = 0
    }

    mostrarSlider()
}  



function mostrarSlider(){


    if(index === 0){
       imagen.setAttribute("src", "images/logo-slide1-1.webp")
       imagen.classList.add('animate__animated', 'animate__backInDown')
       titulo.textContent="Making mobility greener"
       titulo.classList.add('animate__animated', 'animate__backInUp')
       
    }
    else if(index === 1){
        imagen.setAttribute("src", "images/appaloosa_slider_2.webp")
        imagen.classList.add('animate__animated', 'animate__fadeIn')
        titulo.textContent="Appalossa"
        titulo.classList.add('animate__animated', 'animate__backInUp')    
        parrafo.textContent = "Scooter de estilo vintage y a su vez con una apariencia moderna y aerodinámica. Es una scooter con un motor Bosch de 4000w que equivale a una moto de 125cc"
     }
    
     else if(index === 2){
        imagen.setAttribute("src", "images/moto_slider_babieca.webp")
        imagen.classList.add('animate__animated', 'animate__backInDown')
        titulo.textContent="Babieca"
        titulo.classList.add('animate__animated', 'animate__backInUp')
        parrafo.textContent = "Scooter de estilo vintage y a su vez con una apariencia moderna y aerodinámica. Es una scooter con un motor Bosch de 4000w que equivale a una moto de 125cc"
     }

     
}


mostrarSlider()

console.log(index)