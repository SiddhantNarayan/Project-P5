function preload()
{

}
function setup()
{
    Canvas = createCanvas(400,400);
    Canvas.position(110,250)
    video = createCapture(VIDEO);
    video.hide();

}

function draw()
{
    image(video,0,0,400,400);
}

function snapshot()
{
    save("My_framed_pic.png");
}