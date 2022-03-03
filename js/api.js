import * as UI from './interfaz.js';

class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }


    consultarApi(){

        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => {

                if(resultado.lyrics){

                
                    const { lyrics} = resultado;
                    UI.divresultado.textContent = lyrics;
                    UI.headingResultado.textContent =` Letra de la cancion ${this.cancion} de ${this.artista}`
                    UI.formularioBuscar.reset();
                } else {
                    UI.divMensaje.textContent = 'La Cancion No Existe, Prueba Otra Busqueda';
                    UI.divMensaje.classList.add('error')

                    setTimeout(()=>{
                            UI.divMensaje.textContent= '';
                            UI.divMensaje.classList.remove('error')
                            UI.formularioBuscar.reset()
                    },3000)
                }
            })
        console.log('desde consultar api')
    }


}


export default API;