let input = document.querySelector("input")
let container = document.querySelector('.container')
let botonAgregar = document.querySelector('.boton-agregar')


class Item {
    constructor(nuevaTarea){
        this.crearDiv(nuevaTarea);
    }
    crearDiv(nuevaTarea) {
        // Creacion de input
        let inputItem = document.createElement("input")
        inputItem.type ='Text'
        inputItem.disabled = true
        inputItem.classList.add(".item-input")
        inputItem.value = nuevaTarea

        // Creacion de newDiv
        let newDiv = document.createElement('div')
        newDiv.classList.add('item')
        
        // Botones Desactivados
            //Editar
            let botonEditar = document.createElement("button")
            botonEditar.innerHTML = '<i class="fas fa-lock"></i>'
            botonEditar.classList.add("boton-editar")

            // Remover
            let botonRemover = document.createElement("button")
            botonRemover.innerHTML = '<i class="fas fa-trash"></i>'
            botonRemover.classList.add("boton-remover")

        // Agregar Elementos a la lista

        newDiv.appendChild(inputItem)
        newDiv.appendChild(botonEditar)
        newDiv.appendChild(botonRemover)
        container.appendChild(newDiv)

        botonEditar.addEventListener('click',function () {
            switch (inputItem.disabled) {
                case true:
                    inputItem.disabled = false;
                    botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>'
                    break;
                
                case false:
                    inputItem.disabled = true
                    botonEditar.innerHTML = '<i class="fas fa-lock">'
                    break;
            
                default:
                    break;
            }
         })
        
        botonRemover.addEventListener('click',function () {
            newDiv.remove()
        })
    }
}

function chequearInput() {
    if (input.value == false) {
        alert("Rellene el campo")
    }
    else{
        let tarea = new Item(input.value)   
    }
}

botonAgregar.addEventListener("click", chequearInput)







