status = "";
function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}
function modelLoaded(){
    console.log("modelLoaded");
    status = true;
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting objects";

}
function draw(){
    image(video, 0, 0, 480, 380);
    

}