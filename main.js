function preload()
{

}

function setup() {
    canvas = createCanvas(500, 400);
    canvas.position(70, 200);
    video = createCapture(VIDEO);
    video.hide();

tint_color = "";
}

function draw() {
    image(video, 100, 80, 300, 250);
    stroke(168, 10, 10);
    Fill(168, 10, 10);

    circle(40,40,50);
    circle(460,40,50);
    cirlce(40,360,50);
    circle(460,360,50);

    stroke(50, 168, 82);
    Fill(50, 168, 82);

    Rect(63, 27, 375, 25);
    Rect(63, 347, 375, 25);
    Rect(27, 63, 25, 275);
    Rect(448, 63, 25, 275);
}

function take_snapshot(){
    save('frame.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}
