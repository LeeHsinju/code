var questions = [
    {
        "question":"你會把自己最喜歡的電影介紹給別人嗎？",
        "answers":[
            ["不加思索地大力推薦 ",6],
            ["最喜歡的電影不會推薦",2],
        ]
    },
    {
        "question":"你討厭哪種類型的男生？",
        "answers":[
            ["用欣賞的電影來判斷別人的人",10],
            ["給電影評價時，是看女演員漂亮與否來決定的",5],
        ]
    },
    {
        "question":"如果你是導演，要設計一幕女人突然發射一槍的畫面，而後面剛好有一個小孩子，因為怕槍聲所以便提前把耳朵摀了起來。假如你是導演的話，你會怎麼做?",
        "answers":[
            ["有發現的話，當然重拍這鏡頭",7],
            ["因為很可愛，留著也沒差",9],
        ]
    },
    {
        "question":"即使有一部電影佷吸引你，也會先看遍大部分的雜誌或媒體報導，真的覺得不錯時才會去看。",
        "answers":[
            ["是的 ","C"],
            ["不我不會這樣做",8],
        ]
    },
    {
        "question":"以下哪一個情節比較讓你覺得感傷呢？",
        "answers":[
            ["「時光機器」當中，為了改變未婚妻已死的事實，男主角製造了時光機器，讓自己可以回到過去，阻止未婚妻死掉，但一直都未能成功…",3],
            ["「我的野蠻女友」當中，男女主角埋下了時空蛋之後，分手過各自的生活，一直到多年後才相聚",4],
        ]
    },
    {
        "question":"你覺得哪一種男人比較令人感動？",
        "answers":[
            ["吵架過後，馬上飛奔到你家樓下，一直守夜到天明，並買好早餐等你",5],
            //前為選項內容，後為跳轉的題號
            ["冷戰期間怎麼樣也不肯道歉，但是幫你偷偷完成了你一直想完成的心願",2],
        ]
    },
    {
        "question":"在「珍珠港」電影當中，因為從軍而跟女友分開的男主角，在回鄉之後心想終於可以與女友重逢。結果女友表示自己已經和他最好的朋友在一起，你覺得？",
        "answers":[
            ["一點都沒錯",4],
            ["男主角好可憐","B"],
        ]
    },
    {
        "question":"跟男朋友一起看電影，當你想跟男朋友說「好有趣」時，男朋友卻搶先說了一句「好無聊喔～」，這時你會怎麼想？",
        "answers":[
            ["很失望地覺得「興趣不合」","D"],
            ["心想「還好沒有先說出自己的想法」","E"],
        ]
    },
    {
        "question":"在「新娘不是我」當中，女主角在聽到自己認識九年的男性朋友，要跟別的女生結婚寺，才發現原來自己深愛著對方。你有這種經驗嗎？",
        "answers":[
            ["有 ","A"],
            ["沒有",7],
        ]
    },
    {
        "question":"某部電影裡主角覺得每天都過同樣的生活很不可思議。原本對男主角來說是最糟的一天，在電影中變成了最好的一天，假如同樣的事情發生在你身上的話？",
        "answers":[
            ["生活可以重來很棒啊!",9],
            ["不,我討厭重覆的生活",3],
        ]
    }  
];

var finalAnswers={
        "A":["(A) 你容易陷入的愛情煩惱是…老是愛上名草有主的他在戀愛初期就會發生問題囉！因為對方通常身邊都是有伴的啦!"],
        "B":["(B) 你容易陷入的愛情煩惱是…自我推銷做得不夠與對方發生親蜜關係時，特別容易發生問題，盡量展現優點吧!"],
        "C":["(C) 你容易陷入的愛情煩惱是…快看到結果時便逃走愛情將獲得結果時，通常無法享受甜蜜的成就感，只想逃跑!"],
        "D":["(D) 你容易陷入的愛情煩惱是…交往總是不持久愛情的持續力有問題，不擅於轉變自己的心情來讓戀情持久。"],
        "E":["(E) 你容易陷入的愛情煩惱是…同時愛上好幾個人還沒開始談戀愛之前就產生煩惱了，因為你一次愛太多人啦!"]
};

