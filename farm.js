status= "";
img= "";

function preload() {
    img= loadImage("download.jpg");
}

function setup() {
    canvas.createCanvas(600, 500);
    canvas.center();
    objectdect= ml5.objectDetector("cocossd", modlod);
    document.getElementById("stst").innerHTML= "Status: Detecting Objects";
}

function modlod() {
    status= true;
    objectdect.detect(img, resu);
}

function resu(error, results) {
    if(error) {
        console.error(error);
    }
    console.log(results);
}