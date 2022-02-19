function Lights(rgb)
{    
    var opacity = 0;
    this.adjustments;
    
    var directionChoise = [1,-1];
    this.speedX = random(1.0,5.0);
    this.speedY = random(0.1,1.5);
    this.spotsX = random(0,width);
    this.spotsY = random(0,height);
    this.directionX = random(directionChoise);
    this.directionY = random(directionChoise);
    this.movementX = 0;
    this.movementY = 0;
    this.sizeX = 15;
    this.sizeY = 15;
    
    this.move = function()
    {
        if(this.spotsX > width)
            {
                this.spotsX = this.speedX;
            }
        else if(this.spotsX < 0)
            {
                this.spotsX = width;
            }

        if(this.spotsY > height)
            {
                this.spotsY = this.speedY;
            }
        else if(this.spotsY < 0)
            {
                this.spotsY = height;
            }
        this.spotsX += this.speedX * this.directionX;
        this.spotsY += this.speedY * this.directionY;
        
        push();
        var glow = opacity;
        var rgbS = "a";
        noFill();
        
        if(opacity == 1)
            {
            image(rgb,this.spotsX,this.spotsY);
            }
        
        
/*
        for(var i = 60;i > 0;i-=4)
            {
                var m = map(glow,0,255,0.0,1.0)
                rgbS = rgb + m +")";
                strokeWeight(i);
                stroke(rgbS);
                point(this.spotsX,this.spotsY);
                glow *= 1.5;
            }
*/
        
//        fill(rgb[0],rgb[1],rgb[2],opacity);
//        ellipse(this.spotsX,this.spotsY,30,30);
        pop();
    }
    
    this.rhythm = function(freq)
    {
        this.frequency = freq;

        fft.analyze();
        
        if(this.frequency == 'bass')
            {
                adjustments = bassAdjustment;
                this.setOpacity();
            }
        else if(this.frequency == 'lowMid')
            {
                adjustments = lowMidAdjustment;
                this.setOpacity();
            }
        else if(this.frequency == 'mid')
            {
                adjustments = midAdjustment;
                this.setOpacity();
            }
        else if(this.frequency == 'highMid')
            {
                adjustments = highMidAdjustment;
                this.setOpacity();
            }
        else if(this.frequency == 'treble')
            {
                adjustments = trebleAdjustment;
                this.setOpacity();
            }
        else if(this.frequency == 'mapAmp')
            {
//                adjustments = 50;
                level();
                
            if(levelDifferentsB > levelDifferentsA + levelAdjustments)
                {
                    opacity = 1;
                }
                else
                {
                    opacity = 0;
                }
            }
    }  
    this.setOpacity = function()
    {
    if(fft.getEnergy(this.frequency) > adjustments)
        {
            opacity = 1;
        }
        else
        {
            opacity = 0;
        }
    }
}
