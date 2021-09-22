//Sergio Matamoros Delgado
// Fecha: 22-09-2021

'use strict';

//console.log("JS cargado");

class Pelicula {

    constructor() {
        //console.log("Se ha creado una pelicula");

        //This es el objeto que ejecuta el código.
        this.titulo = "Tiroteo en Mississippi";
        this.introduccion = '';

        this.pueblo = new Pueblo('TodoPolvo','muy polvoriento en mitad del desierto de Arizona y a donde nadie querría llegar');

        this.narrador = new Narrador();
        this.paco = new PersonajeBueno('Paco');
        this.maria = new PersonajeBueno('Maria');
        this.morgan = new PersonajeMalo('Morgan');
        this.oso = new PersonajeMalo('Oso');
        

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
        this.morgan.arma.disparar();
        this.morgan.arma.disparar();
        this.morgan.arma.disparar();
        this.narrador.hablar(`Morgan al ver que se quedó sin balas empezó a buscar rapidamente otro cargador mientras intentaba escapar del oso`);
        this.morgan.arma.disparar();
        this.morgan.arma.disparar();
        this.morgan.arma.disparar();
        this.morgan.arma.disparar();
        this.morgan.arma.disparar();
        this.morgan.arma.disparar();
        this.morgan.arma.disparar();
        this.morgan.arma.disparar();
        this.morgan.arma.disparar();
        this.morgan.arma.disparar();

    }
}

class Pueblo {
    constructor(nombre, descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}

class Personaje {
    constructor(nombre) {
        this.nombre = nombre;
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
        document.write(`<p><span class="malo">${this.nombre}</span>:GRRRRR... ${texto}</p>`);
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
            this.balas--;
            console.log(`Al arma le quedan ${this.balas} balas y ${this.cargador} cargadores`);
        }
        else {
            if(this.cargador > 0){
                this.cargar();
                this.balas = 5;
                document.write('<p class="disparo">¡**CLACK CLACK**!</p>')
            } else {
                console.error("No puedes disparar más el arma!")
                document.write('<p class="disparo">¡**CLICK CLICK**!</p>')
            }
            console.log(`Al arma le quedan ${this.balas} balas y ${this.cargador} cargadores`);
        }
    } 
    cargar() {
        this.cargador--;
    }
}


//Instancio un objeto.
new Pelicula();