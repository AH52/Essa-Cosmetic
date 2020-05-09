
// Timer Code

var timer;

var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 7); //just for this demo today + 7 days

timer = setInterval(function() {
  timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
  var dateEntered = toDate;
  var now = new Date();
  var difference = dateEntered.getTime() - now.getTime();

  if (difference <= 0) {

    // Timer done
    clearInterval(timer);
  
  } else {
    
    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    $("#days").text(days);
    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);
  }
}

function bigImg(x) {
    x.style.height = "310px";
    x.style.width = "250px";
}

function normalImg(x) {
    x.style.height = "260px";
    x.style.width = "170px";
}

$(document).ready(function() {
    $('#Carousel').carousel({
        interval: 5000
    })

    // NiceScroll Code of JQuery //
    // $("body").niceScroll({
    //   cursorcolor:"#ba3465",
    // cursorwidth:"12px",
    // cursoropacitymin:0.4,
    // background:"rgba(20,20,20,0.3)",
    // cursorborder:"1px solid #ba3465",
    // autohidemode:'leave'    
    // 
    // });

    $("body").niceScroll({
    cursorwidth:12,
    cursoropacitymin:0.4,
    cursorcolor:'#ba3465',
    cursorborder:"1px solid #ba3465",
    background:"rgba(20,20,20,0.3)",
    cursorborderradius:2,
    autohidemode:'leave'
     });

});
