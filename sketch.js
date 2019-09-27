function preload(){
  // put preload code here
}


function keyPressed() {
if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}

function setup() {

createCanvas(windowWidth,windowHeight);
angleMode(DEGREES);
frameRate(50);
background(0);



}

function draw() {

  strokeWeight(0.5);
  stroke(
    lerpColor(
      color("tomato"),

      color("slateBlue"),
      frameCount /50
    )
  );
  line(windowWidth / 2 + 250, windowHeight / 2,windowWidth / 2 + cos(frameCount * 3) * 250, windowHeight / 2 + sin(frameCount * 3) * 250);

  if (frameCount == 240) {
    noLoop();
  }

  line(windowWidth / 2 - 250, windowHeight / 2,windowWidth / 2 + cos(frameCount * 3) * 250, windowHeight / 2 + sin(frameCount * 3) * 250);

  if (frameCount == 240) {
    noLoop();
  }

}
