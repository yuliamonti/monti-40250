/*Imperfecta Cosmética Natural; Página creada por Yulia Monti 
para implementar lo aprendido en los diferentes cursos.
La página está basaba en Cosmética natural realizada por Yulia Monti, Fotografía realizada por Yulia Monti,
maquetación Web diseñada por Yulia Monti.*/

//Nuestros Cursos
//Creá tu propio Champú Sólido
//Creá tu propio Acondicionador Sólido
//Creá tu propia Máscarilla Facial Sólida

// DESAFÍO 1

/*Crear un algoritmo con un condicional

Imperfecta Cosmética Natural tiene 3 cursos para realizar:
1°Curso de Champú Sólido
2°Curso de Acondicionador Sólido
3° Curso de Mascarilla Facial Sólida
Elija el curso que mas le interese*/ 

let curso = prompt('Te interesa el curso de Champú, de Acondicionador o de Mascarilla');

switch (curso) {
    case "Champú":
    case "champu":
    case "shampoo":
        alert("Usted seleccionó el Curso de Champú Sólido");
        break;
    case "Acondicionador":
    case "acondicionador":
        alert("Usted seleccionó el Curso de Acondicionador Sólido");
        break;
    case "Mascarilla":
    case"mascarilla":
        alert("Usted seleccionó el Curso de Mascarilla Facial Sólida");
        break;
    default:
        alert("Algunos de los datos ingresados no son correctos");
}

/*Crear un algoritmo utilizando un ciclo (FOR - WHILE)*/
let cantidad = Number (prompt("¿Cantidad de cursos adquiridos?"))
let valor = 500
let total = cantidad * valor

for (let i = cantidad; i<=3; i++ ) {
    alert (`Usted adquirió ${i} cursos, tiene un valor de $${total}`);
    }

/*DESAFIO 2 Agregando funciones
>> Consigna: Con los conocimientos vistos hasta el momento, empezarás a armar la estructura inicial de tu proyecto integrador. A partir de los ejemplos mostrados la primera clase, deberás:
Pensar el alcance de tu proyecto: ¿usarás un cotizador de seguros? ¿un simulador de créditos? ¿un simulador personalizado?
Armar la estructura HTML del proyecto.
Incorporar lo ejercitado en las clases anteriores, algoritmo condicional y algoritmo con ciclo.
Utilizar funciones para realizar esas operaciones.
*/ 
function gracias () {
    alert ('Muchas gracias por su compra!')
}
    gracias ();

