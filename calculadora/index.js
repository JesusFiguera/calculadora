//Tomando los datos de los input del html
let operacion = document.getElementById('operacion')
let operacion2 = document.getElementById('operacion2')


//Validando que no se introduzcan letras.
function validar(evento){
    for(char in operacion.value){
        if(operacion.value[char].toUpperCase().charCodeAt() > 64 && operacion.value[char].toUpperCase().charCodeAt() < 91){
            let operacion_1 = operacion.value.substring(0,operacion.value.length-1)
            operacion.value = operacion_1
        }
        else if(operacion.value[char].toUpperCase().charCodeAt() === 209){
            let operacion_1 = operacion.value.substring(0,operacion.value.length-1)
            operacion.value = operacion_1
        }
    }
    if(evento["key"] === "Enter"){ //ejecutando la operacion si se presiona enter
        try{
            operacion.value = eval(operacion.value)  
            operacion2.value = eval(operacion.value)
        }catch(e){
            operacion2.value = 'NaN'
        }
    }
}

const botones = document.querySelectorAll('#num') //Seleccionando todos los elementos con el id num en el html
botones.forEach((boton,i)=>{
    boton.addEventListener('click',()=>{ //Añadiendo el evento a cada boton
        operacion.value+= boton.value
    })
})
const btn_borrar = document.getElementById('btn-borrar') //Añadiendo el evento para limpiar el input si se presiona la 'C'
btn_borrar.addEventListener('click',()=>{
    operacion.value = ''
})


const equal = document.getElementById('equal') //Realiza la operacion que se encuentre en el input
equal.addEventListener('click',()=>{
    try{
        operacion.value = eval(operacion.value)
        operacion2.value = eval(operacion.value)
    }catch(e){
        operacion2.value = 'NaN'
    }
})


const delete_1 = document.getElementById('X') //Otro evento para borrar 1 por 1 en vez de todos
delete_1.addEventListener('click',()=>{
    let operacion_1 = operacion.value.slice(0,operacion.value.length-1)
    operacion.value = operacion_1 
    console.log(operacion.value)
})
window.onload = () =>{ //Deshabilitando el form para que no refresque la pagina al presionar uno de los botones
    const form = document.getElementById('form')
    form.onsubmit = (e) =>{
        e.preventDefault()
    }
}
