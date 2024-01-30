function preload(){
    
}

function setup(){
    canvas=createCanvas(500,500)
    canvas.position(100,250)
    video=createCapture(VIDEO)
    video.hide();
   
}

function draw(){
    image(video,70,70,350,350);
    fill(255,0,0)
    circle(30,30,70)
    circle(450,30,70)
    circle(30,450,70)
    circle(450,450,70)

    fill(0,255,0)
    rect(40,25,420,20)
    rect(40,25,20,420)
    rect(440,25,20,420)
    rect(40,440,420,20)

    
}


