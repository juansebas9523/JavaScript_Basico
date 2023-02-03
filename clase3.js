//tipo de suscripcion
var tipoDeSuscripcion = "basica";

switch(tipoDeSuscripcion){

case "basica":
    console.log ("la suscripcion es basica");
    break;

    case "premium":
        console.log("todas las series son para ver");
        break;

        case "Experto":
            console.log("tiene 2 meses gratis");
            break;

            case"Duoexperto":
            console.log("tiene un año gratis");
            break;

}


var persmiso = 5;

if(permiso = 2){

    console.log("se le pagan los dias");
} else if(permiso > 4){

console.log("se le descuenta los dias");

} else{

    console.log("despedido");
}


let i = 0;

while(i <=5 ){

    console.log("el numero de i es: "+ i);
    i++;
}

let respuesta;

while(respuesta != '4' ){

    let pregunta = prompt ('cuanto es 2 + 2');
respuesta = pregunta;
}