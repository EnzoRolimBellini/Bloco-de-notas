

export default  class ArrayNotas {
     constructor(){
        this.notas = [];
     }

     adicionarNota(titulo, texto, categoria){
         const nota = new Nota(titulo, texto, categoria);
         console.log(this.notas);
         this.notas.push(nota);
        
     }

     apagarNota(indice){
        this.notas.splice(indice, 1);
     }


}


class Nota  {
    constructor(titulo,texto, categoria){
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}   