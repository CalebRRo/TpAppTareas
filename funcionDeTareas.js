//const fs = require("fs")

/* const archivoTareas = {
    archivo : "tareas.json",
    leerArchivo : function(){
        let tareas = fs.readFileSync(this.archivo,"utf-8");
        return JSON.parse(tareas)
    }

} */
const listar =(tareas)=> {
    for (let i = 0; i < tareas.length; i++) {
        console.log(`(${i+1})- ${tareas[i].titulo} -> ${tareas[i].estado}`);
        console.log(".......................................................");
    }
}

const otraFuncion = ()=>{

}


module.exports ={ 
    listar,
    otraFuncion
}