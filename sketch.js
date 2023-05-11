/*let x1, y1, x2, y2, x3, y3, x4, y4;
let t = 0;


function setup() {
  createCanvas(600,600);

  // declaramos puntos de control
 /* x1 = 63;
  y1 = 140;
  x2 = 249;
  y2 = 80;
  x4 = 340;
  y4 = 168;
  x3 = 281;
  y3 = 179;
}

function draw() {
  background(222,226,196);

  let bx1 = lerp(x1, y3, t);
  let by1 = lerp(x3, y2, t);
  let bx2 = lerp(x2, x3, t);
  let by2 = lerp(y2, y3, t);
  let bx3 = lerp(x3, x4, t);
  let by3 = lerp(y3, y4, t);
  
  noFill();
  bezier(x1,y1,bx1,by1,bx2,by2,bx3,by3);

//tiempo



t += 0.005;
if (t > 1) {
  t = 0;
}*/

/*bezier(63,140,249,80,281,175,340,268);
//bezier(63,140,124,240,281,89,340,168);
//bezier(63,140,100,260,281,250,300,250);



}*/

//el codigo qu estaba usando hasta recien

/*let x1, y1, x2, y2, x3, y3, x4, y4;

function setup() {
  createCanvas(400, 400);
  
  // Inicializa los valores de los puntos de control
  x1 = 63;
  y1 = 140;
  x2 = 249;
  y2 = 80;
  x3 = 281;
  y3 = 179;
  x4 = 340;
  y4 = 168;
}

function draw() {

  let minX = 100;
  let maxX = 300;
  
  background(220);
    let restrictedX = constrain(mouseX, minX, maxX);
    
  // Actualiza los valores de los puntos de control en función de mouseY
  
  y2 = mouseY-100;
  x2= mouseX+10,
  y3= mouseX+20, mouseY+20;

  // Dibuja la curva de Bézier con los nuevos parámetros
  noFill();
  stroke(0);
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
}*/



/*function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Define los límites del rango permitido para el movimiento del mouse en el eje X
  let minX = 100;
  let maxX = 300;
  
  // Restringe el valor de mouseX dentro del rango permitido
  let restrictedX = constrain(mouseX, minX, maxX);
  
  // Utiliza restrictedX en lugar de mouseX para el movimiento de la curva de Bézier
  let x1 = 50;
  let y1 = 100;
  //let x2 = restrictedX;
  let x2 = 150
  let y2 = 200;

  let x3 = 250;
  let y3 = 300;
  let x4 = 350;
  let y4 = 400;

  // Dibuja la curva de Bézier utilizando los puntos de control
  noFill();
  stroke(0);
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
}*/


/*let x1, y1, x2, y2, x3, y3, x4, y4;
let targetX, targetY;
let easing = 0.05;

function setup() {
  createCanvas(615, 498);

  // Define los puntos de control iniciales
  x1 = 120;
  y1 = height - 200 ;
  x2 = width ;
  y2 = height;
  x3 = width ;
  y3 = height ;
  x4 = width ;
  y4 = height;

  // Establece los puntos de destino en los que quieres que la curva se mueva
  targetX = height / 2;
  targetY = height / 2;
}

function draw() {
  background(222,226,196);

  // Interpola los puntos de control hacia los puntos de destino utilizando easing
  let dx = targetX - x2;
  let dy = targetY - y2;
  x2 += dx * easing;
  y2 += dy * easing;
  x3 += dx * easing;
  y3 += dy * easing;

  // Dibuja la curva de Bezier utilizando los puntos de control
  noFill();
  stroke(0);
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  //elipse comentada
  // Dibuja el punto de destino
  //noFill();
 // noStroke();
  //(targetX, targetY, 10, 10);
  bezier(118,249, 118, 249, 454, 92, 609, 498);
}

function mouseClicked() {
  // Actualiza los puntos de destino al hacer clic en un nuevo punto
  targetX = mouseY;
  targetY = mouseY;
}
*/
/*let x1, y1, x2, y2, x3, y3, x4, y4;
let targetX, targetY;
let easing = 0.05;

function setup() {
  createCanvas(615, 498);

  // Define los puntos de control iniciales
  x1 = 118;
  y1 = 249;
  x2 = 118;
  y2 = 249;
  x3 = 454;
  y3 = 92;
  x4 = 609;
  y4 = 498;

  // Establece los puntos de destino en los que quieres que la curva se mueva
  targetX = height / 2;
  targetY = height / 2;
}

function draw() {
  background(222,226,196);

  // Interpola los puntos de control hacia los puntos de destino utilizando easing
  let dx = targetX - x2;
  let dy = targetY - y2;
  x2 += dx * easing;
  y2 += dy * easing;
  x3 += dx * easing;
  y3 += dy * easing;

  // Dibuja la curva de Bezier utilizando los puntos de control
  noFill();
  stroke(0);
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  // Dibuja el punto de destino
  noFill();
  noStroke();
  ellipse(targetX, targetY, 10, 10);
}

function mouseMoved() {
  // Verifica si el mouse está dentro del rango permitido para mover la curva
  if (mouseX > 232 && mouseX < 240) {
    // Actualiza los puntos de control para mover la curva con el mouse
    x2 = mouseY;
    y2 = mouseY;
  }
  if (mouseX > 320 && mouseX < 368) {
    // Actualiza los puntos de control para mover la curva con el mouse
    x3 = mouseY;
    y3 = mouseY;
  }

}*/

let x1, y1, x2, y2, x3, y3, x4, y4;
let targetY1, targetY2, targetG1, targetG2;

function setup() {
  createCanvas(615, 498);

  // Define los puntos de control iniciales
  x1 = 118;
  y1 = 249;
  x2 = 118;
  y2 = 249;
  x3 = 454;
  y3 = 92;
  x4 = 609;
  y4 = 498;
  f1 = 0;
  g1 = 116;
  f2 = 8;
  g2 = 266;
  f3 = 80;
  g3 = 353;
  f4 = 387;
  g4 = 407;
  // Establece los puntos de destino iniciales en las coordenadas Y de los puntos de control
  targetY1 = x2, y2;
  targetY2=x3, y3;
  targetG1= f2,g2;
  targetG2= f3,g3;

}

function draw() {
  background(222,226,196);

  // Interpola los puntos de control Y hacia los puntos de destino utilizando easing
  let dy1 = targetY1 - y2;
  let dy2 = targetY2 - y3;
  y2 += dy1 * 0.05;
  y3 += dy2 * 0.05;
  let dy3 = targetG1 - g2;
  let dy4 = targetG2 + g3;
  g2 += dy3 * 0.05;
  g3 -= dy4 * 0.05;

  // Dibuja la curva de Bezier utilizando los puntos de control
  noFill();
  stroke(0);
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  bezier(f1, g1, f2, g2, f3, g3, f4, g4);
}

function mouseMoved() {
  // Actualiza los puntos de destino en función de la coordenada Y del mouse
  if (mouseX > 0 && mouseX < 615) {
    targetY1 = mouseY;
    targetG1 = mouseY;
  }
  if (mouseX > 420 && mouseX < 615) {
    targetY2 = mouseY;
    targetG2 = mouseY;
  }
  
} 

