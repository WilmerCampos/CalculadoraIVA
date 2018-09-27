console.log("Hola mundo");   /* imprime información por consola*/


/*Valores numericos*/
var numero1=52.5;  		/*para definir una variable debo usar la palabra reservada var*/
var numero2=45;			/*Define la variable - es sencible al uso de mayusculas */
console.log(numero1+numero2);


/*Variables de texto*/
var nombre='Wilmer';
var apellido="Campos";
console.log(nombre);
console.log(apellido);


/*Variables booleanas*/
var tiene_mascota=true;
tiene_mascota=false;


/*Arrays*/
var frutas=["manzana","pera","lulo",25,true];
console.log(frutas[3]);


/*Objetos*/
var persona={
	nombre:"Wilmer",
	edad:26,
	tiene_mascota:true,
	mascota:{
		raza:'Dalmata',
		nombre:'Bigotes'
	}
};
console.log(persona['nombre']);
console.log(persona.nombre);
console.log(persona.mascota.raza);



/*Objeto date*/
var fecha= new Date();
console.log(fecha);



/*Operadores logícos*/
console.log(!true);	//negacion
console.log(true && true); //and
console.log(true || false);	//or

/*Operadores matematicos*/
console.log(5+4); //suma
console.log(5-4); //resta
console.log(5*4); //multiplicacion
console.log(5%4); //mod


/*Operadores de comparacion*/
console.log(3>6); //mayor que
console.log(6>=6); //mayor o igual
console.log(6<=6); //menor o igual
console.log(3<6); //menor que
console.log(6==6); //igualdad
console.log(6!=6); //diferencia



/*Estructua de flujo*/

/*If-Else*/
var edad=15;

if (edad>=18){
	console.log("Eres mayor de edad")
}else{
	console.log("No eres mayor de edad")
}


/*For*/
for(var i=0;i<5;i++){
	console.log(i);
}

var dias=['lunes','mertes','miercoles','jueves','viernes','sabado','domingo']
for(var i=0;i<7;i++){
	console.log(dias[i]);
}


/*Funciones*/
function suma(n1,n2){
	var res=n1+n2;
	return res;
}

alert(suma(8,4)); /*Metodo para imprimir y generar mensajes*/




/*Ejercicio*/
/*Hacer una funcion que reciba como parametro el valor de un producto y que retorne el IVA correspondiente*/
function iva(precio_producto){
	var ivat=precio_producto*0.19;
	return ivat;
}

alert(iva(10000));


function calcular_iva(precio_prod){
	var iva= 0.19;
	var resultado= precio_prod * iva;
	return resultado;
}
console.log(calcular_iva(10000));
