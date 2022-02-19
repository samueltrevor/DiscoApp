var amplitude = new p5.Amplitude;
var mapAmp;

var levelDifferentsA = 0;
var levelDifferentsB = 0;

var fc = 6;

function level()
{
    
    mapAmp = map(amplitude.getLevel(),0.0,0.4,0,255);
    
    if(frameCount % fc == 0)
        {
            levelDifferentsA = mapAmp;
//            console.log(levelDifferentsA);
        }
    else if(frameCount % (fc / 2) == 0)
        {
            levelDifferentsB  = mapAmp;
//            console.log(levelDifferentsB);
        }
//    console.log(levelDifferentsA);
//    console.log(levelDifferentsB);
}