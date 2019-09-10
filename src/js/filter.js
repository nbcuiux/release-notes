
$("#filters :checkbox").click(function() {
  $(".grid__item").hide();
  $("#filters :checkbox:checked").each(function() {
  $("." + $(this).val()).show();
    });
 });
$("#searchInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();

    if ($('#card1').css('display') == 'flex' && $('#card2').css('display') == 'flex' && $('#card3').css('display') == 'flex'
      && $('#card4').css('display') == 'flex' && $('#card5').css('display') == 'flex' && $('#card6').css('display') == 'flex'
      && $('#card7').css('display') == 'flex' && $('#card8').css('display') == 'flex' && $('#card9').css('display') == 'flex'
      && $('#card10').css('display') == 'flex') {
    $("#search .grid__item").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  }
 
    if ($('.CloudPathAccessServices').hasClass('visible')) {
    $("#search .CloudPathAccessServices").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
      }
    if ($('.LiveAuthKillSwitch').hasClass('visible')) {
    $("#search .LiveAuthKillSwitch").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
      }
    if ($('.Media').hasClass('visible')) {
    $("#search .Media").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
      }
      if ($('.CloudPathAndroid').hasClass('visible')) {
    $("#search .CloudPathAndroid").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
      }
     
 });

$( "#searchInput" ).blur(function() {
     $(this).val('')
  if($('#submenu-1').css('visibility') == 'visible') {
    setTimeout(function() {
   $("#card1, #card2, #card7, #card8").show();
   }, 100);
  }

  if($('#submenu-1-1').css('visibility') == 'visible') {
    setTimeout(function() {
   $("#card3, #card4").show();
   }, 100);
  }

   if($('#submenu-1-2').css('visibility') == 'visible') {
    setTimeout(function() {
   $("#card5, #card6").show();
   }, 100);
  }

   if($('#submenu-2-1').css('visibility') == 'visible') {
    setTimeout(function() {
   $("#card9, #card10").show();
   }, 100);
  }


   if($('#main').css('visibility') == 'visible') {
    setTimeout(function() {
   $("#card1, #card2, #card3, #card4, #card5, #card6, #card7, #card8, #card9, #card10").show();
   }, 100);
  }
  
});





$('.readMore').click(function(){

  $(this).parent().find('.postDescription').toggleClass("expanded");
   $(this).parent().parent().find('.blogImg').toggleClass("slide-out");
   $(this).parent().parent().find('.postText').toggleClass("wide-text");
  if ( $(this).parent().find('.postDescription').hasClass("expanded")) {
            $(this).html("<a>Read Less</a>");
           

        } else {
            $(this).html("<a>Read More</a>");
             $(".scroll-wrap").animate({ scrollTop: 0 }, "slow");
        } 
});



function ChangeUrl(page, url) {
        if (typeof (history.pushState) != "undefined") {
            var obj = { Page: page, Url: url };
            history.pushState(obj, obj.Page, obj.Url);
        } else {
            alert("Browser does not support HTML5.");
        }
    }
    $(function () {
        $("#card1, #menu1").click(function () {
            ChangeUrl('Page1', 'cloud-path-access-services/free-episode-trial.html');
        });
        $("#card2, #menu2").click(function () {
            ChangeUrl('Page2', 'cloud-path-access-services/cpc-access-service.html');
        });
        $("#card3, #menu3").click(function () {
            ChangeUrl('Page3', 'cloud-path-access-services/live-auth-kill-switch/auth-kill-switch-live.html');
        });
        $("#card4, #menu4").click(function () {
            ChangeUrl('Page4', 'cloud-path-access-services/live-auth-kill-switch/auth-kill-switch-live-2.html');
        });
        $("#card5, #menu5").click(function () {
            ChangeUrl('Page5', 'cloud-path-access-services/media-endpoint/channels-avaliable.html');
        });
        $("#card6, #menu6").click(function () {
            ChangeUrl('Page6', 'cloud-path-access-services/media-endpoint/overview.html');
        });
        $("#card7, #menu7").click(function () {
            ChangeUrl('Page7', 'cloud-path-access-services/cp-services-configuration.html');
        });
        $("#card8, #menu8").click(function () {
            ChangeUrl('Page8', 'cloud-path-access-services/access-services-current-pi3.html');
        });
        $("#card9, #menu9").click(function () {
            ChangeUrl('Page9', 'cloud-path-client-android/android-sdk/android-upcoming-sprint.html');
        });
        $("#card10, #menu10").click(function () {
            ChangeUrl('Page3', 'cloud-path-client-android/android-sdk/cpc-android-business-priority.html');
        });
    });

window.onbeforeunload = function(){
 
      if(window.location = "/cloud-path-access-services/free-episode-trial.html") {
    setTimeout(function() {
        var temp=" ";
$(location).attr('href','/'+temp);
}, 5);
      }

   }

 
$('#cloud').click(function(ev, itemName){
$('#card1, #card2, #card7, #card8').removeClass('hidden').addClass('visible');
$('#card3, #card4, #card5, #card6, #card9, #card10').addClass('hidden').removeClass('visible');
});
 
$('#live').click(function(ev, itemName){
$('#card3, #card4').removeClass('hidden').addClass('visible');

$('#card1, #card2, #card5, #card6, #card9, #card10,#card7, #card8').addClass('hidden').removeClass('visible');
});
 
 $('#media').click(function(ev, itemName){
$('#card5, #card6').removeClass('hidden').addClass('visible');
$('#card1, #card2, #card3, #card4, #card9, #card10,#card7, #card8').addClass('hidden').removeClass('visible');
});

  $('#android').click(function(ev, itemName){
$('#card9, #card10').removeClass('hidden').addClass('visible');
$('#card1, #card2, #card3, #card4, #card5, #card6,#card7, #card8').addClass('hidden').removeClass('visible');
});


$(document).ready(function(){
    $(".menu__breadcrumbs").click(function(){
   
        if($(this).text() == "all") {
          $('#card1, #card2, #card3, #card4, #card5, #card6, #card7, #card8, #card9, #card10').addClass('visible').removeClass('hidden');
        }
        if($(this).text() == "allCloud Path Access Services") {
          $('#card1, #card2, #card7, #card8').removeClass('hidden').addClass('visible');
          $('#card3, #card4, #card5, #card6, #card9, #card10').addClass('hidden').removeClass('visible');
        }
        if($(this).text() == "allCloudPath Client Android, FireTV & AndroidTV") {
          $('#card1, #card2, #card3, #card4, #card5, #card6, #card7, #card8, #card9, #card10').addClass('hidden').removeClass('visible');
        }
    });

});

