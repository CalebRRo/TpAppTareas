const process = require("process");
const { listar } = require("./funcionDeTareas");
//const { listar, otraFuncion } = require("./funcionDeTareas");

const tareas = require('./tareas.json')



const accion = process.argv[2]

switch (accion) {
    case "listar":
        listar(tareas)
        
        break;
    case "terminado" : 
    
        let tareasTerminadas = tareas.filter(function (estado) { 
           if (estado.estado === "terminado" ) {
               return estado
               
           }
           
        })
        
       listar(tareasTerminadas)
        break;
    case "pendiente" :
        tareas.filter(function (estado) {
            
            if (estado.estado !== "pendiente") {
                return estado
            }
            console.log(JSON.stringify(`${tareas.titulo} => ${tareas.estado}`));
        })   
        break;  
        case "en-proceso" :
            tareas.filter(function (estado) {
                if (estado.estado !== "en proceso") {
                    return  estado
                }
                console.log(JSON.stringify(estado));
            })   
            break;        
    case undefined :
        console.log("Atencion tienes que pasar una accion 🤔");
        break;     
  

    default: console.log("No entiendo que queres hacer 🙄");
        break;
}



//const proceso = [ jkfsahdfkj , ksajdfk, crear, esta, es , una, nueva, tarea]

//const texto = proceso.splice(3, proceso.length -1).join( ' ') // [crear, esta, es , una, nueva, tarea]

// crear esta es una nueva tarea
