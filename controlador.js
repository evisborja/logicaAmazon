//necesito almacenar el precio en dolares
// ps5, xbox series x, nintendo switch

let preciosConsolas=Array(750,700,409);

// 2. Almacenar la cant. de consolas
let cantidad=1;

//3. calcular el costo del casillero
let pesosConsolas=Array(14.2,13.1,4.75);

let pesoTotal=pesosConsolas[0]*cantidad;

let costoCasillero=0;

if(pesoTotal>=0 && pesoTotal<=20){

    costoCasillero=85;

}
else{

    let diferenciaPeso=pesoTotal-20;
    costoCasillero=85+(diferenciaPeso*2);

}

//4. costos deenvios+impuestos
const IMPUESTO_PAIS=114;
const VALOR_SEGURO=7;

//5. CALCULO EL COSTO TOTAL DE LA COMPRA
let costoTotal=(preciosConsolas[0]*cantidad)+costoCasillero+IMPUESTO_PAIS+VALOR_SEGURO;

console.log(costoTotal);