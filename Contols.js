
function buttonPreesed()
{
        if(!song.isPlaying())
            {
                playButtonText = 'Pause';
                song.loop();
                presentText = false;
            }
        else
            {
                playButtonText = 'Play';
                song.pause();
                presentText = true;
            }
}
