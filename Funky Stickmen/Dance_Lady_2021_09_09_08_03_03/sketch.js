function setup() {
  let width = 600
  let height = 400
  createCanvas(width, height);
}

function draw() {
  let xc = mouseX
  let yc = mouseY
  let elbowleft = (xc/1.4)+(50,50)
  let elbowright = (xc*1.4)-(50,50)
  let head = xc/1.2
  
  background(xc, yc, 100);
  
  strokeWeight(1);
  stroke('black');
  fill(xc-70, yc+40, 179);
  circle(head, 100, 100);
  noFill()
  arc(head, 120, 40, 40, 0, 3.15, PI + QUARTER_PI, CHORD);
  line(head-5, 85, head-5, 115);
  line(xc/1.2-5, 115, xc/1.2+2, 115);
  
  strokeWeight(5)
  stroke('red')
  line(xc/1.2, 150, xc, yc);
  
  strokeWeight(4)
  stroke(59, 91, 161)
  line(xc, yc, (xc/1.2)-50, 300);
  line(xc, yc, (xc/1.2)+50, 300);
  
  strokeWeight(1)
  stroke('black')
  fill('white')
  circle((xc/1.2)-20, 85, xc*0.1);
  circle((xc/1.2)+20, 85, yc*0.1);
  fill('black')
  circle((xc/1.2)-20, 85, 10);
  circle((xc/1.2)+20, 85, 10);
  
  strokeWeight(5)
  stroke('red')
  line(xc/1.2, 150, elbowleft, yc-50);
  line(xc/1.2, 150, elbowright, yc-50);
  strokeWeight(1)
  stroke('black')
  line(elbowleft, yc-50, xc/1.4, yc/1.4);
  line(elbowright, yc-50, xc*1.4, yc/1.4);
  fill(xc, yc, 200);
  rect(0, 300, 600, 400);
  

}  