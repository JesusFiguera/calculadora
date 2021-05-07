
let operacion = document.getElementById('operacion')
let operacion2 = document.getElementById('operacion2')



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
    if(evento["key"] === "Enter"){
        try{
            operacion.value = eval(operacion.value)
            operacion2.value = eval(operacion.value)
        }catch(e){
            operacion2.value = 'NaN'
        }
    }
}

const botones = document.querySelectorAll('#num')
botones.forEach((boton,i)=>{
    boton.addEventListener('click',()=>{
        operacion.value+= boton.value
    })
})
const btn_borrar = document.getElementById('btn-borrar')
btn_borrar.addEventListener('click',()=>{
    operacion.value = ''
})


const equal = document.getElementById('equal')
equal.addEventListener('click',()=>{
    try{
        operacion.value = eval(operacion.value)
        operacion2.value = eval(operacion.value)
    }catch(e){
        operacion2.value = 'NaN'
    }
})


const delete_1 = document.getElementById('X')
delete_1.addEventListener('click',()=>{
    let operacion_1 = operacion.value.slice(0,operacion.value.length-1)
    operacion.value = operacion_1 
    console.log(operacion.value)
})
window.onload = () =>{
    const form = document.getElementById('form')
    form.onsubmit = (e) =>{
        e.preventDefault()
    }
}