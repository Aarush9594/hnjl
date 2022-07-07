function setup() {
 var canvas = createCanvas(1400,640)
 canvas.center()
  video = createCapture(VIDEO) 
  video.hide()
  posenet=ml5.poseNet(video,modelloaded)
 // Initializing Posenet
 posenet.on('pose',gotposes)
}

var NoseX = 0
var NoseY = 0

function draw() {
  image(video,0,0,1400,640) 
//   fill("Red")
//   circle(NoseX+400,NoseY+50,50) 
image(nose,NoseX+400,NoseY+50,60,50)
}

function preload() {
nose = loadImage("https://i.postimg.cc/vB7MwhPh/1201411-middle-removebg-preview.png")
}

function take_snapshot() {
    save("my-clown-nose.png")
}

function modelloaded() {
    console.log("PoseNet model is loaded")
}

function gotposes(result) {
    if (result.length>0) {
       console.log(result) 
       NoseX = result[0].pose.nose.x
       NoseY = result[0].pose.nose.y
       console.log("Nose X = "+ result[0].pose.nose.x)
       console.log("Nose Y = "+ result[0].pose.nose.y)
    }
}

