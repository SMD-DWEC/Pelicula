//Sergio Matamoros Delgado
// Fecha: 22-09-2021

'use strict';

class Pelicula {

    constructor() {
        //This es el objeto que ejecuta el código.
        this.titulo = "Tiroteo en Mississippi";
        this.introduccion = '';

        this.pueblo = new Pueblo('TodoPolvo','muy polvoriento en mitad del desierto de Arizona y a donde nadie querría llegar');

        this.narrador = new Narrador();
        this.paco = new PersonajeBueno('Paco');
        this.maria = new PersonajeBueno('Maria');
        this.morgan = new PersonajeMalo('Morgan');        

        this.iniciar();
    }
    iniciar() {
        document.write(`<h1> ${this.titulo} </h1>`);
        document.write(`<p>${this.pueblo.nombre} era un pueblo ${this.pueblo.descripcion}</p>`)

        this.paco.hablar(`Hola ${this.maria.nombre} hace un día esplendido`);
        this.maria.hablar(`Hola ${this.paco.nombre} la verdad es que sí`);
        this.narrador.hablar(`Ambos se miraron y siguieron su camino...`);
        this.morgan.hablar(`Vaya pueblo más... polvoriento`);
        this.morgan.hablar(`¡Eh tú! ¡Pringao! Dame tu caballo y la cartera`);
        this.morgan.arma.disparar();
        this.morgan.arma.disparar();
        this.narrador.hablar(`Morgan disparó al aire y todo el mundo en la calle salió corriendo`);
        this.narrador.hablar(`Uno de los disparos impactó cerca de un oso y el mismo empezó a atacar a Morgan`);
        this.morgan.arma.disparar();
        this.morgan.hablar(`¡NOoO!`);

        //El oso le quitará una vida aleatoria (entre un 1 y un 80%)
        this.morgan.vida = Math.floor(Math.random() * 80)+1;

        //Morgan disparará 4 veces (quedandose sin balas y teniendo que recargar.)
        for(let i=0;i<3;i++)
            this.morgan.arma.disparar();

        this.narrador.hablar(`Morgan al ver que se quedó sin balas empezó a buscar rapidamente otro cargador mientras intentaba escapar del oso`);
        this.narrador.hablar(`Mientras tanto Paco y María están observando todo desde una ventana a unos pocos metros.`);

        this.maria.hablar(`¡Hay que hacer algo!`);
        this.narrador.hablar(`Paco y María salieron del edificio y comenzaron a disparar al oso.`);

        this.paco.arma.disparar();
        this.maria.arma.disparar();

        /*/ DEBUG | Hacer que Morgan gaste TODA su munición
        for(let i=0;i<6;i++)
            this.morgan.arma.disparar();
        */

        //Elegirá automaticamente una escena (1 ó 2).
        let escenaRnd = Math.floor(Math.random() *2)+1;

        console.info(`Sucedió la escena ${escenaRnd}`);

        if(escenaRnd == 1) this.osoMuerto();
        else this.morganMuerto();

        console.log(`La vida de Morgan es de ${this.morgan.vida}`);
    }
    osoMuerto() {
        this.narrador.hablar(`Paco y María dispararon contra el oso y el mismo murió, salvando a Morgan`);
        this.morgan.hablar(`¡Gracias!`);

        if(this.morgan.vida > 50)
            this.narrador.hablar(`Paco y María se acercaron a la escena, mientras tanto Morgan huyó.`);
        else 
            this.narrador.hablar(`Paco y María se acercaron a la escena, mientras tanto Morgan huyó con dificultad debido a sus heridas.`);

    }
    morganMuerto() {
        this.narrador.hablar(`Paco y María dispararon contra el oso pero fallaron y dispararon a Morgan`);
        this.morgan.hablar(`Ay!`);
        this.narrador.hablar(`Al cabo de unos minutos Morgan murió.`);
        this.morgan.vida = 0;
    }
}

class Pueblo {
    constructor(nombre, descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}

// -- Cambiar arma a las clases de personaje bueno y malo, para que cada uno tenga una distinta y con 
//diferente munición
class Personaje {
    constructor(nombre) {
        this.nombre = nombre;
        this.vida = 100;
        this.arma = new Arma("Colt",1,5);//Todos tienen un arma.
    }
    hablar(texto) {
        document.write(`<p><span class="negrita">${this.nombre}</span>: ${texto}</p>`);
    }
}

//Herencias
class PersonajeBueno extends Personaje{
    hablar(texto) {
        document.write(`<p><span class="bueno">${this.nombre}</span>: ${texto}</p>`);
    }
}
class PersonajeMalo extends Personaje{
    hablar(texto) {
        document.write(`<p><span class="malo">${this.nombre}</span>: GRRRRR... ${texto}</p>`);
    }
}

class Narrador {
    hablar(texto) {
        document.write(`<p class="narrador">** ${texto}.</p>`);
    }
}

class Arma {
    constructor(nombre, cargador, balas) {
        this.nombre = nombre;
        this.cargador = cargador;
        this.balas = balas;
    }
    disparar() {
        if(this.balas > 0) {
            document.write('<p class="disparo">¡¡PUM!!</p>');
            this.balas--; //Resta balas.
            console.log(`Al arma le quedan ${this.balas} balas y ${this.cargador} cargadores`);
        }
        else if(this.balas <=0) {
            if(this.cargador > 0){
                document.write('<p class="disparo">¡**CLACK CLACK**!</p>')
                this.cargar(); //Recarga el arma con un nuevo cargador de 5 balas.
            } else {
                console.error("No puedes disparar más el arma!")
                document.write('<p class="disparo">¡**CLICK CLICK**!</p>')
            }
            console.log(`== Sin balas, siguiente acción == Al arma le quedan ${this.balas} balas y ${this.cargador} cargadores`);
        }
    } 
    cargar() {
        this.cargador--;
        this.balas = 5;
    }
}


//Instancio un objeto.
new Pelicula();