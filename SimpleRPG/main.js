var mapArray, ctx, currentImgMainX, currentImgMainY;
var imgMountain, imgMain, imgEnemy;

//一開始網頁載入後要做的事情
$(document).ready(function() {
mapArray=[0,1,1,0,0,0,3,1,2];
    ctx=$("#myCanvas")[0].getContext("2d");
          
    imgMain=new Image();
    imgMain.src= "SimpleRPG/images/spriteSheet.png"
    currentImgMainX=0;
    currentImgMainY=0;
    imgMain.onload=function()
    { 
  ctx.drawImage(imgMain,0,0,80,130,currentImgMainX,currentImgMainY,200,200);
    };
    
    //擺上障礙物與敵人
    imgMountain= new Image();
    imgMountain.src = "SimpleRPG/images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "SimpleRPG/images/Enemy.png";
    imgMountain.onload = function(){
            imgEnemy.onload = function(){
            for(var x in mapArray)
            { 
                if(mapArray[x]==1)
                {
                   //放上山       
                    ctx.drawImage(imgMountain,32,65,32,32,x%3*200,Math.floor(x/3)*200,200,200);            
                }else if(mapArray[x]==3)
                {
                  //放上壞蛋
                    ctx.drawImage(imgEnemy,7,40,104,135,x%3*200,Math.floor(x/3)*200,200,200);
                }//(x/3)餘數*200為x，(x/3)取商數*200為y
            }
        };   
    };
    
});

//有人按按鍵後要處理的動作寫在這
$(document).keydown(function(event){
  var targetImgMainX, targetImgMainY, targetBlock, cutImagePositionX;
    //targetImgMain, targetImgmainY:主角即將要移動過去的目標位置
    //targetBlock:主角即將要移動過去的那一格編號
    //cutImagePositionX:依據主角朝向什麼方向而決定的圖片
    event.preventDefault();
    //避免點集鍵盤出現瀏覽器其他行為，如捲動、放大、換頁...
    //依據使用者點擊按鍵，計算出目標位置以及設定新的圖片 
    //alert(event.which);
    
      switch(event.which){
         case 37: //往左走
              targetImgMainX = currentImgMainX-200;
              targetImgMainY = currentImgMainY;
              cutImagePositionX = 175;
              break;
         case 38: //往上走
              targetImgMainX = currentImgMainX;
              targetImgMainY = currentImgMainY-200;
              cutImagePositionX = 355;
              break;
         case 39: //往右走
              targetImgMainX = currentImgMainX+200;
              targetImgMainY = currentImgMainY;
              cutImagePositionX= 540;
              break;      
         case 40: //往下走
              targetImgMainX = currentImgMainX;
              targetImgMainY = currentImgMainY+200;
              cutImagePositionX= 0;
              break;    
          default:
             return;  
                         }  //全長減掉那格子的寬
              
      if(targetImgMainX<=400 && targetImgMainX>=0 && 
         targetImgMainY<=400 && targetImgMainY>=0)//為何要&&??           
      {
         targetBlock =targetImgMainX/200 + targetImgMainY/200*3;
      }
      else
      {
         targetBlock = -1;  
      }
              
      ctx.clearRect(currentImgMainX, currentImgMainY, 200,200);
      if(targetBlock==-1 || mapArray[targetBlock]==1 || mapArray[targetBlock]==3)//為何要==?? 
      {
              //異常，有山，有人=>不移動   
      }else
      {
          $("#talkBox").text("");
          currentImgMainX = targetImgMainX;
          currentImgMainY = targetImgMainY;
      }
      ctx.drawImage(imgMain,
      cutImagePositionX,0,80,130, currentImgMainX, currentImgMainY, 200, 200);
    
    switch(mapArray[targetBlock]) 
    {
        case undefined:
            $("#talkBox").text("到邊界囉");
            break;
        case 1:
            $("#talkBox").text("前面有山啦");
            break;
        case 2:
            $("#talkBox").text("終於抵達終點了!!");
            break;    
        case 3:
            $("#talkBox").text("哈囉你好嗎~");
            break;      
    }
    
    
});   





































        