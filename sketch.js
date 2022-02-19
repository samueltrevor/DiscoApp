var song;
var fft;

var c;

var blue;
var yellow;
var red;
var green;
var purple;
var white;

var songSelector = 'assets/al.mp3';
var slider;

var frequencies;
var coloursArrays;

var opacitys;

var bassAdjustment;
var lowMidAdjustment;
var midAdjustment;
var highMidAdjustment;
var trebleAdjustment;
var levelAdjustments;
 
var presentText;

var lights;
var playButton;
var playButtonText;
var loading;

function preload()
{
    soundFormats('mp3','wav');
    
    song = loadSound(songSelector);
    
    blue = loadImage('assets/blue.png');
    yellow = loadImage('assets/yellow.png');
    red = loadImage('assets/red.png');
    green = loadImage('assets/green.png');
    purple = loadImage('assets/purple.png');
    white = loadImage('assets/white.png');
    
    console.log(songSelector);
}
function setup()
{    
    presentText = true;
    
    fft = new p5.FFT();
    
    c = createCanvas(window.innerWidth, window.innerHeight - 5);
    
    InputFile();
//    textButton();
    playButton = createButton('play');
    playButton.mousePressed(function(){buttonPreesed()
        playButton.html(playButtonText)});

    loading = new Loading();
//	createCanvas(screen.availWidth, screen.availHeight);
    
    opacitys = [255,205,155,105,55];
    frequencies = ['bass','lowMid','mid','highMid','treble','mapAmp'];
    
    coloursArrays = {
        blue:blue,
        yellow:yellow,
        red:red,
        purple:purple,
        green:green,
        white:white
    };
    
    bassAdjustment = 223;
    lowMidAdjustment = 175;
    midAdjustment = 118;
    highMidAdjustment = 135;
    trebleAdjustment = 166;
    levelAdjustments = 48;
    
    sliderRange(1,255,1);
    
    slider = createGui('Bass Adjust');
    slider.addGlobals('bassAdjustment');
    slider.addGlobals('lowMidAdjustment');
    slider.addGlobals('midAdjustment');
    slider.addGlobals('highMidAdjustment');
    slider.addGlobals('trebleAdjustment');
    slider.addGlobals('levelAdjustments');
    
    lights = [];
    
    for(var i = 0;i < 20;i++)
        {
            lights . push(new Lights(coloursArrays.blue));
            lights . push(new Lights(coloursArrays.yellow));
            lights . push(new Lights(coloursArrays.red));
            lights . push(new Lights(coloursArrays.purple));
            lights . push(new Lights(coloursArrays.green));
            lights . push(new Lights(coloursArrays.white));
        }
    
}

function draw()
{
    c = createCanvas(window.innerWidth, window.innerHeight - 30);

    background(50);
    fill(190);
    
    if(!song.isLoaded())
        {
            loading.reverseAr();
            presentText = false;
        }
    else if(!song.isPlaying())
        {
            presentText = true;
        }
    
    if(presentText)
        {
            textSize(32);
            textAlign(CENTER,CENTER);
            text('Click to play',width/2,height/2);
            
        }
    
    noStroke();    
    
    for(var i = 0;i < lights.length;i++)
        {
            lights[i].move();
            lights[i].rhythm(frequencies[i % 6]);
        }
    
 
    grade();
    
}

function grade()
{
    for(var i = 0;i < 10;i++)
        {
            line(i * 60,0,i * 60,height);
            line(0,i * 60,width,i * 60);
        }
}
function room()
{
    fill(200);
    noStroke();

    //draw the room
    beginShape();
    vertex(0,0);
    vertex(300,100);
    vertex(width,35);
    vertex(width,height - 35);
    vertex(300,500);
    vertex(0,height);
    endShape();
}


