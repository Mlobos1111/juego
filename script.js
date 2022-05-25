
function separateWords(words) {
    let word =words.split(" ");
    console.log(word[0]);
    console.log(word[1]);
}

let ArrayDimensional=[
[1,2,3,4],
[1,2,3,4],
[1,2,3,4],
[1,2,3,4],
[1,2,3,4]];
ArrayDimensional[0][0]="Entrada con llave verde y espada"
ArrayDimensional[0][1]="pasillo"
ArrayDimensional[0][2]="pasillo con monedas y carta negra"
ArrayDimensional[0][3]="pasillo oscuro,cuidado!"
ArrayDimensional[1][0]="pasillo con monedas y enemigos"
ArrayDimensional[2][0]="pasillo con monedas y enemigos"
ArrayDimensional[3][0]="cuarto con un objeto escondido(linterna)"
ArrayDimensional[4][0]="cuarto oscuro con llave verde"
ArrayDimensional[1][1]="pasillo"
ArrayDimensional[1][2]="Cuarto con enemigos y la masa escondida"
ArrayDimensional[1][3]="pasillo con monedas"
ArrayDimensional[2][1]="cuarto con carta roja,baul(mensaje) y muro verde"
ArrayDimensional[2][2]="cuarto con tarjeta verde"
ArrayDimensional[2][3]="pasillo con enemigos"
ArrayDimensional[3][1]="pasillo oscuro"
ArrayDimensional[3][2]="cuarto con llave roja"
ArrayDimensional[3][3]="cuarto con baul y mensaje"
ArrayDimensional[4][1]="pasillo con monedas y carta azul"
ArrayDimensional[4][2]="pasillo"
ArrayDimensional[4][3]="Salida"



console.table(ArrayDimensional)







separateWords("coger usar");
separateWords("usar llaves")

