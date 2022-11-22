const tarea_input=document.querySelector(".tarea_input");
const boton_tarea=document.querySelector(".boton_tarea");
const contenedor_tareas=document.querySelector(".contenedor_tareas");

document.addEventListener("DOMContentLoaded",guardarTareas)
boton_tarea.addEventListener("click",agregarTarea);
contenedor_tareas.addEventListener("click",borrar_tarea);

function agregarTarea(event){

    event.preventDefault();

    if(!tarea_input.value) return;

    const tarea_div=document.createElement("div");
    tarea_div.classList.add("tarea");

    const nuevaTarea=document.createElement("li");
    nuevaTarea.innerText=tarea_input.value;
    nuevaTarea.classList.add("item");
    tarea_div.appendChild(nuevaTarea);

    checkTareas(tarea_input.value);

    const boton_tarea_completada = document.createElement("button");
    boton_tarea_completada.innerHTML= '<i class="fas fa-check"></i>';
    boton_tarea_completada.classList.add("boton_tarea_completada");
    tarea_div.appendChild(boton_tarea_completada)

    const boton_eliminar_tarea = document.createElement("button");
    boton_eliminar_tarea.innerHTML='<i class="fas fa-trash"></i>';
    boton_eliminar_tarea.classList.add("boton_eliminar_tarea");
    tarea_div.appendChild(boton_eliminar_tarea)
    
    contenedor_tareas.appendChild(tarea_div);

    tarea_input.value="";
}


function borrar_tarea(event){
    const item=event.target;

    if (item.classList[0] === "boton_eliminar_tarea"){
        const tarea=item.parentElement;
        borrarTareasMemoria(tarea);
        tarea.remove();
    }

    if (item.classList[0] ==="boton_tarea_completada"){
        const tarea= item.parentElement;
        tarea.classList.toggle("tarea_completada")
    }
}

function checkTareas(tarea){
    let tareas;
    if(localStorage.getItem("tareas") ===null){
        tareas=[];
    }else{
        tareas=JSON.parse(localStorage.getItem("tareas"));
    }
    tareas.push(tarea);
    localStorage.setItem("tareas",JSON.stringify(tareas));
}

function guardarTareas(){
    let tareas;
    if(localStorage.getItem("tareas") ===null){
        tareas=[];
    }else{
        tareas=JSON.parse(localStorage.getItem("tareas"));
    }
    tareas.forEach(function(tarea){
      const tarea_div=document.createElement("div");
    tarea_div.classList.add("tarea");

    const nuevaTarea=document.createElement("li");
    nuevaTarea.innerText=tarea;
    nuevaTarea.classList.add("item");
    tarea_div.appendChild(nuevaTarea);

    const boton_tarea_completada = document.createElement("button");
    boton_tarea_completada.innerHTML= '<i class="fas fa-check"></i>';
    boton_tarea_completada.classList.add("boton_tarea_completada");
    tarea_div.appendChild(boton_tarea_completada)

    const boton_eliminar_tarea = document.createElement("button");
    boton_eliminar_tarea.innerHTML='<i class="fas fa-trash"></i>';
    boton_eliminar_tarea.classList.add("boton_eliminar_tarea");
    tarea_div.appendChild(boton_eliminar_tarea)
    
    contenedor_tareas.appendChild(tarea_div);

    })
}

function borrarTareasMemoria(tarea){
  let tareas;
    if(localStorage.getItem("tareas") ===null){
        tareas=[];
    }else{
        tareas=JSON.parse(localStorage.getItem("tareas"));
    }
    const index = tarea.children[0].innerText;
    tareas.splice(tareas.indexOf(index),1);
    localStorage.setItem("tareas",JSON.stringify(tareas));
}