function Loading()
{
    var e = 10;
    this.reverseAr = function()
    {
        push();
        noFill(0);
        stroke(190);
        strokeWeight(3);
        ellipse(width / 2,height / 2 - 50,e,e);
//        if(frameCount % 1 == 0)
        if(e > 40)
            {
                e = 10;
            }
        noStroke();
        fill(190);
        textAlign(CENTER,CENTER);
        textSize(32);
        text('Loading...',width / 2,height / 2);
        e += 1;
        pop();
    }
    
}