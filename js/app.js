/*
  Please add all Javascript code to this file.
*/

// Mashable Begin
var Mashable = {};

Mashable.baseEndpoint = 'https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json';

//Handlebars
Mashable.createArticle = function(item) {
  var source = $('#MashableArticleTemplate').html();
  var template = Handlebars.compile(source);
  return template(item);
}

//Handlebars
Mashable.createPopup = function(item) {
  var popupTemplate = $('#PopupTemplate').html();
  var popupHB = Handlebars.compile(popupTemplate);
  return popupHB(item);
}

// This is the same as document ready btw.
$(function() {


  
  getMashable();
});

 var getMashable = function () { 
        var request = $.ajax({
              url: Mashable.baseEndpoint,
              //upon success, exucate the anonymous function
            success: function(result){
              //to see all results, just print result. to get the specific "new" object, do result.new
            var newsMashable = result.new;
            console.log(newsMashable);

            //loop through the new array. Create an object for below datapoints in the array
                for (var i=0; i<newsMashable.length; i++){
                  var articleMashable = {
                    //{{words}}:movie[place in loop].value
                      title: newsMashable[i].display_title,
                      channel: newsMashable[i].channel,
                      image: newsMashable[i].feature_image,
                      impressions: newsMashable[i].formatted_shares,
                      description: newsMashable[i].excerpt
                  }
                //Input content to handlebars
                console.log(articleMashable);
                var MashableHTML = Mashable.createArticle(articleMashable)
                $('#articleInfo').append(MashableHTML);
                }

            //click on title to get popup
            $('#articleInfo').on("click", "h3", "function(event){
              //prevent reload of the page due to <a></a> in the html
              event.preventDefault();
              $('#popUp').removeClass("hidden");
              var popupHTML = Mashable.createPopup(articleMashable)
              console.log(popupHTML);
              $('#popUp .container').append(popupHTML)
              $('#popUp').removeClass("loader");
               });


            $('.closePopUp').click(function(event){
              //prevent reload of the page due to <a></a> in the html
              event.preventDefault();
              $('#popUp').addClass("hidden");
               });
            }
      });
    }
// Mashable End

/*
//Reddit begin
var Reddit = {};

Reddit.baseEndpoint = 'https://accesscontrolalloworiginall.herokuapp.com/https://www.reddit.com/top.json';

//Handlebars
Reddit.createArticle = function(item) {
  var source = $('#ReddittArticleTemplate').html();
  var template = Handlebars.compile(source);
  return template(item);
}

// This is the same as document ready btw.
$(function() {

  
  getReddit();
});

    var getReddit = function (){
        var request = $.ajax({
            url: Reddit.baseEndpoint,
              //upon success, exucate the anonymous function
            success: function(result){
              //to see all results, just print result. to get the specific object, cascade down through with .
       			var newsReddit = result.data.children;
   				console.log(newsReddit);

   				for (var i=0; i<newsReddit.length; i++){
               		console.log(newsReddit);
               		var articleReddit = {
                   		title: newsReddit[i].data.title,
                      channel: newsReddit[i].data.subreddit,
                      image: newsReddit[i].data.thumbnail,
                      impressions: newsReddit[i].data.score,
               		}
                  //input content to handlebars
                	console.log(articleReddit);
                	var RedditHTML = Reddit.createArticle(articleReddit)
                  console.log(RedditHTML)
                  $('#articleInfo').append(RedditHTML);
                }
            }
      });
    }
//Redditt end
*/

/*
//Digg Begin
var Digg = {};

Digg.baseEndpoint = 'https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json';


//Handlebars
Digg.createArticle = function(item) {
  var source = $('#DiggArticleTemplate').html();
  var template = Handlebars.compile(source);
  return template(item);
}

// This is the same as document ready btw.
$(function() {

  
  getDigg();
});

 var getDigg = function () { 
        var request = $.ajax({
              url: Digg.baseEndpoint,
              //upon success, exucate the anonymous function
            success: function(result){
              //to see all results, just print result. to get the specific "new" object, do result.new
            var newsDigg = result.data.feed;
           console.log(newsDigg);


            //loop through the new array. Create an object for below datapoints in the array
                for (var i=0; i<newsDigg.length; i++){
                  var articleDigg = {
                    //{{words}}:movie[place in loop].value
                      title: newsDigg[i].content.title,
                      channel: newsDigg[i].content.domain_name,
                      // I can't find an image in the object
                     // image: newsMashable[i].feature_image,
                      impressions: newsDigg[i].digg_score,
                  }
                //Input content to handlebars
                console.log(articleDigg);
                var DiggHTML = Digg.createArticle(articleDigg)
                console.log(DiggHTML);
                $('#articleInfo').append(DiggHTML);
                }
            }

      });
    }
//Digg End
*/


//If drop selection occurs, then append html with proper source articles. I think I've done this wrong. Also think I have some global variable issues bc the variables are created in other functions.
//use an event handled "ex: .onclick"

//https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript
//http://www.dyn-web.com/tutorials/forms/select/selected.php
/*
var sourceList = $('#sourceList');
console.log(sourceList.value)
var listValue = sourceList.options[sourceList.selectedIndex].value;
console.log(listValue)
*/

/*
if($('#Mashable') {
	 getMashable();

}
else if {
	 $('#articleInfo').append(RedditHTML);
}

else {}
*/