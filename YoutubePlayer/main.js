var player;
var currentPlay=0;

//當youtube API準備好時//
function onYouTubeIframeAPIReady(){
 
    player = new YT.Player("player",
      {
        height:"390",
        width:"640",
        videoId:playList[currentPlay],
        playerVars:{
           "autoplay":0,//是否自動撥放//
           "controls":0,//是否顯示控制項//
           "start":playTime[currentPlay][0],
           "end":playTime[currentPlay][1],
           "showinfo":0,
           "rel":0,
           "iv_load_policy":3 
      },
      events:{
          "onReady":onPlayerReady,
          "onStateChange":onPlayerStateChange
        }
    });
}
//當撥放器準備好時//
function onPlayerReady(event){   
  
    $("#playButton").click(function(){
        $("h2").text(player.getVideoData().title); 
        player.playVideo(); 
    });
}

//當撥放器撥放狀態改變時例如啟動撥放停止換歌等等//
function onPlayerStateChange(event){
    //當撥放到指定的最後一秒時//
    if(event.data == 1 &&
      (Math.floor(player.getCurrentTime())== playTime[currentPlay][1]))
    {  //如果還沒撥到最後一首//
        if(currentPlay < playList.length-1)
        {
            currentPlay++;
            player.loadVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }else //已經撥到最後一首//
        {
            currentPlay=0;
            player.cueVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }
    }
    if(player.getVideoLoadedFraction()>0)//避免影片還沒開始撥時抓不到標題
    { $("h2").text(player.getVideoData().title); }   
}
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        