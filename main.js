nosex= 0
nosey= 0
difference= 0
leftwristx= 0
rightwristx= 0

function setup(){
    canvas= createCanvas(550, 550)
    canvas.position(560,150)
    video= createCapture(VIDEO)
    video.size(550,500)
    posenet= ml5.poseNet(video, modelloaded)
    posenet.on('pose', gotposes)
}

function modelloaded(){
    console.log("model is loaded")
}

function gotposes(results){
    if(results.length>0){
        console.log(results)
        nosex= results[0].pose.nose.x
        nosey= results[0].pose.nose.y
        leftwristx= results[0].pose.leftWrist.x
        rightwristx= results[0].pose.rightWrist.x
        difference= floor(leftwristx-rightwristx)
    }
}

function draw(){
    background("cyan")
    document.getElementById("square_side").innerHTML= "width and hieght of the square is "+difference+"px"
    fill("pink")
    stroke("pink")
    textSize(difference)
text("navya",nosex, nosey)
}



