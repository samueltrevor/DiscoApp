var input;
var button;

function InputFile()
{
    input = createFileInput(Helper);
}

function Helper(file)
{
    songSelector = file;
    preload();
}

/*function textButton(text)
{
    playButtonText = text;
//    if(!song.isPlaying())
//        {
//            playButtonText = 'Play';
//        }
//    else
//        {
//            playButtonText = 'Pause';
//        }
}*/
/*
function newButton()
    {
        playButton = createButton("l");
    }
*/
