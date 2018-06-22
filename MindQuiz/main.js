$(document).ready(function() {
    //alert("hello");
    //建立currrentQuiz，儲存目前做達到第幾題
    var currentQuiz=null;
    //當按下按鈕後，要做的事情放這裡面，currentquiz記錄使用者做到第幾題，要顯示啥麼
    $("#startButton").click(function()
    { 
        //alert("hi");
       //如果還沒開始作答就從這裡開始
        if(currentQuiz==null)
        {    
           //設定目前做達到第0題，即一般邏輯的第一題
           currentQuiz=0;
           //顯示項目
           $("#question").text(questions[0].question); //顯示第0題中的問題內容
           //每次顯示選項前先將該區域清空(可以試著先不做這一步)
           $("#options").empty();
           //將一個一個選項內容，添加至選項區塊
           for(var x=0;x<questions[0].answers.length;x++)
           {
               $("#options").append("<input name='options' type='radio' value="+x+">"+"<label>"+questions[0].answers[x][0]+"</label><br><br>");//name為同類別，type為單選
           }
           //將按紐上的文字換成Next或下一題
            $("#startButton").attr("value","Next");
        }
        else //如果已經開始作答就從這裡繼續
        {   
            //巡訪每個選項是否有被選取
            $.each($(":radio"),function(i,val){
                if(val.checked)//i為第幾個，$代表jQuery的迴圈，checked使有選這個選項然後????
                {
                 //兵分兩路:通往最終結果/跳往下一提
                 //使用者所選取的項目是否已產生最終結果(A~D)
                  if(isNaN(questions[currentQuiz].answers[i][1]))//isNAN表這非一個數字
                  { 
                    //alert("顯示最終結果囉~")
                     var finalResult=questions[currentQuiz].answers[i][1];
                     $("#question").text(finalAnswers[finalResult][0]);
                     $("#options").empty()
                     $("#options").append(finalAnswers[finalResult][1]+"<br><br>");
                      currentQuiz=null;
                     $("#startButton").attr("value","重新開始")
                  }
                  else
                  { 
                    //alert"顯示下一題~"
                      currentQuiz=questions[currentQuiz].answers[i][1]-1;
                     $("#question").text(questions[currentQuiz].question);
                     $("#options").empty();
                     for(var x=0;x<questions[currentQuiz].answers.length;x++)
                     {
                        $("#options").append(
                        "<input name='options' type='radio' value="+x+">"+"<label>"+questions[currentQuiz].answers[x][0]+"</label><br><br>");//<br>為斷行讓畫面不壅擠
                     }
                      
                      
                  }
                 //完成後就可跳離迴圈    
                }
            });
}
        
    });
});
                             
        
        
        
        