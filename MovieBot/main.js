var accessToken = "f4db519d900347b2b119039a9e6dfe85";//此為專案識別符
		var baseUrl = "https://api.api.ai/v1/";

		$(document).ready(function() {
			$("#input").keypress(function(event) {
				if (event.which == 13) {
					event.preventDefault();
                    setResponse("You :"+$("#input").val()+"\n");
					send();
				}
			});
			$("#rec").click(function(event) {
				switchRecognition();
			});
		});

		var recognition;

		function startRecognition() {
			recognition = new webkitSpeechRecognition();
			recognition.onstart = function(event) {
				updateRec();
			};
			recognition.onresult = function(event) {
				var text = "";
			    for (var i = event.resultIndex; i < event.results.length; ++i) {
			    	text += event.results[i][0].transcript;
			    }
			    setInput(text);
				stopRecognition();
			};
			recognition.onend = function() {
				stopRecognition();
			};
			recognition.lang = "en-US";
			recognition.start();
		}
	
		function stopRecognition() {
			if (recognition) {
				recognition.stop();
				recognition = null;
			}
			updateRec();
		}

		function switchRecognition() {
			if (recognition) {
				stopRecognition();
			} else {
				startRecognition();
			}
		}

		function setInput(text) {
			$("#input").val(text);
			send();
		}

		function updateRec() {
			$("#rec").text(recognition ? "Stop" : "Speak");
		}

		function send() {
			var text = $("#input").val();
			$.ajax({
				type: "POST",
				url: baseUrl + "query?v=20150910",
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				headers: {
					"Authorization": "Bearer " + accessToken
				},
				data: JSON.stringify({ query: text, lang: "en", sessionId: "somerandomthing" }),

				success: function(data) {
					//setResponse(JSON.stringify(data, undefined, 2));
                    var result =JSON.stringify(data,undefined, 2);
                    var jsonData =JSON.parse(result);
                    setResponse("Bot : "+jsonData.result.fulfillment.speech+"\n");   $("#input").val("");   
                    if(!jsonData.result.actionIncomplete)	
                        {
                            getMovieData(jsonData.result.parameters);
                        }
                },
                error: function() {
					setResponse("Internal Server Error");
				}
			});
			//setResponse("Loading...");
		}

		function setResponse(val) {
			//$("#response").text(val);
            $("#response").prepend(val);
		}
function getMovieData(movieInfo){
    var url="http://api.themoviedb.org/3/search/movie?";
    var myAPIKey="8c0eb2967c89ce2dd87aa908892bdc56";
    var data=$.getJSON(url,
        {
            query:movieInfo["MovieName"],
            api_key:myAPIKey,
            language:"zh-TW"    
        }
 );
   data.success(
        function(msg)
   {
       if(msg.results.length!=0)
       {    
       setResponse("Bot : 最相關的電影是 "+msg.results[0].title+" 劇情簡介"+msg.results[0].overview+"\n");
       }else
       {
        setResponse("Bot: 很抱歉，系統裡沒有這部電影\n") 
       }
   }
   );     
     data.error(
          function(msg)
          {
              console.log("Error!");
          }
    );
}