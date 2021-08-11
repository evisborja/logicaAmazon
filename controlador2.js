//1. almaceno la informacion general de los productos
let consolas={
    nombres:Array("Play 5", "Xbox series X", "Nintendo switch"),
    precios:Array(750,700,409),
    pesos:Array(14.2,13.1,4.75)
}

//2. Calcular el costo del casillero 
function calCostoCasillero(pesoConsola, cantidad){

    let costoCasillero=0;

    let pesoTotalEnvio=pesoConsola*cantidad;

    if(pesoTotalEnvio<=20){

        costoCasillero=85;

    }
    else{

        let pesoExtra=pesoTotalEnvio-20;

        costoCasillero=85+(pesoExtra*2);

    }

    return costoCasillero;

}

//3. Calcular el costo del impuesto
function calcularCostoImpuestos(costoConsola, cantidad){

    const IMPUESTO_PAIS=114;
    const VALOR_SEGURO=7;

    let costoCompra=costoConsola*cantidad;
    let costoTotal=costoCompra+IMPUESTO_PAIS+VALOR_SEGURO;

    return costoTotal;

}

//4. Convertir dolares en pesos
function convertiraPesos(precioDolares){

    const TRM=3932; // 3932 pesos equivalen a 1 dolar
    let precioPesos=precioDolares*TRM;

    return precioPesos;


}


//1. OBTENER EL COSTO CASILLERO DE UNA COMPRA
// supone que elige el ps5
let pesoPs5= consolas.pesos[0];
let cantidad=1;
let costoCasillero=calCostoCasillero(pesoPs5,cantidad);
//console.log(costoCasillero);

//2. obtener el costo del producto+impuestos
let precioPs5=consolas.precios[0];
let costoProducImpuestos=calcularCostoImpuestos(precioPs5,cantidad);

//3. obtener el costo total de la compra
let totalCompra=costoCasillero+costoProducImpuestos;
console.log(`El costo total de la compra fue de $${totalCompra} USD`);

//4. obtener el totla en COP
let totalPesos=convertiraPesos(totalCompra);
console.log(`El costo total de la compra fue de $${totalPesos} COP`);
