import * as UI from './interfaz.js';
import API from './api.js';
//console.log a UI para ver que trae


UI.formularioBuscar.addEventListener('submit', buscarCancion);
//console.log('1')



function buscarCancion(e){
    //por que es submmit traemos el eveneto y ponemos prevent default
    e.preventDefault();
    

    //opbtner datos del formumlario
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;


    if( artista === '' || cancion === ''){

        //el usuario o la cancion no pueden ir vasio
        UI.divMensaje.textContent = 'Error todos los campos son obligarotios';
        UI.divMensaje.classList.add('error');

        setTimeout(()=>{
                UI.divMensaje.textContent='';
                UI.divMensaje.classList.remove('error');
        },3000)

        
        return;
    }
    



    //consultar api

    const busqueda =  new API(artista, cancion);
    busqueda.consultarApi();

    //console.log(busqueda)

}