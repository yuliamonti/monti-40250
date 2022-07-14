/*DESAFIO Agregando funciones
>> Consigna: Con los conocimientos vistos hasta el momento, empezarás a armar la estructura inicial de tu proyecto integrador. A partir de los ejemplos mostrados la primera clase, deberás:
Pensar el alcance de tu proyecto: ¿usarás un cotizador de seguros? ¿un simulador de créditos? ¿un simulador personalizado?
Armar la estructura HTML del proyecto.
Incorporar lo ejercitado en las clases anteriores, algoritmo condicional y algoritmo con ciclo.
Utilizar funciones para realizar esas operaciones.
*/
function cursos () {
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
}
    cursos();
