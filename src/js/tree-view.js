
$(".tree-view").click(function(){
  var Folder = $(this).find(".is-folder");
  $.each(Folder, function(i, item){
    if($(this).find("> ul input[checked]")) {
      
    }
  });
});

$("a.folder-toggle, .fa-folder-o, strong").click(function(){
  var toggleTarget = $(this).closest(".is-folder")
  if(toggleTarget.hasClass("open")) {
      toggleTarget.removeClass("open");
  } else {
      toggleTarget.addClass("open");
  }
});

var FreeEpisodeTrialHandler = function() {
    $("input#filter2, input#filter3, input#filter4, input#filter5, input#filter6").prop("disabled", true);
    $(".FreeEpisodeTrial").css('color', '#197319')
    $(".all-notes").css('color', '#7b7b7b')
};

var CPCAccessServiceHandler = function() {
    $("input#filter2, input#filter3, input#filter4, input#filter5, input#filter6").prop("disabled", true);
    $(".CPCAccessService").css('color', '#197319')
    $(".all-notes").css('color', '#7b7b7b')
};

var AuthKillSwitchv1Handler = function() {
    $("input#filter2, input#filter3, input#filter4, input#filter5, input#filter6").prop("disabled", true);
    $(".AuthKillSwitchv1").css('color', '#197319')
    $(".all-notes").css('color', '#7b7b7b')
};

var AuthKillSwitchv2Handler = function() {
    $("input#filter2, input#filter3, input#filter4, input#filter5, input#filter6").prop("disabled", true);
    $(".AuthKillSwitchv2").css('color', '#197319')
    $(".all-notes").css('color', '#7b7b7b')
};

var ChannelsHandler = function() {
    $("input#filter2, input#filter3, input#filter4, input#filter5, input#filter6").prop("disabled", true);
    $(".Channels").css('color', '#197319')
    $(".all-notes").css('color', '#7b7b7b')
};

var OverviewHandler = function() {
    $("input#filter2, input#filter3, input#filter4, input#filter5, input#filter6").prop("disabled", true);
    $(".Overview").css('color', '#197319')
    $(".all-notes").css('color', '#7b7b7b')
};

var CPServicesHandler = function() {
    $("input#filter2, input#filter3, input#filter4, input#filter5, input#filter6").prop("disabled", true);
    $(".CPServices").css('color', '#197319')
    $(".all-notes").css('color', '#7b7b7b')
};

var AcessServicesHandler = function() {
    $("input#filter2, input#filter3, input#filter4, input#filter5, input#filter6").prop("disabled", true);
    $(".AcessServices").css('color', '#197319')
    $(".all-notes").css('color', '#7b7b7b')
};

var AndroidHandler = function() {
    $("input#filter2, input#filter3, input#filter4, input#filter5, input#filter6").prop("disabled", true);
    $(".Android").css('color', '#663096')
    $(".all-notes").css('color', '#7b7b7b')
};

var CPCAndroidHandler = function() {
    $("input#filter2, input#filter3, input#filter4, input#filter5, input#filter6").prop("disabled", true);
    $(".CPCAndroid").css('color', '#663096')
    $(".all-notes").css('color', '#7b7b7b')
};

var closseButtonHandler = function() {
    $("input#filter2, input#filter3, input#filter4, input#filter5, input#filter6").prop("disabled", false);
    $(".FreeEpisodeTrial").css('color', '#7b7b7b')
    $(".CPCAccessService").css('color', '#7b7b7b')
    $(".AuthKillSwitchv1").css('color', '#7b7b7b')
    $(".AuthKillSwitchv2").css('color', '#7b7b7b')
    $(".Channels").css('color', '#7b7b7b')
    $(".Overview").css('color', '#7b7b7b')
    $(".CPServices").css('color', '#7b7b7b')
    $(".AcessServices").css('color', '#7b7b7b')
    $(".Android").css('color', '#7b7b7b')
    $(".CPCAndroid").css('color', '#7b7b7b')
    $(".all-notes").css('color', '#E85D75')
};

    $(".close-button").click(closseButtonHandler)
    $(".FreeEpisodeTrialContent").hover(FreeEpisodeTrialHandler);
    $(".CPCAccessServiceContent").hover(CPCAccessServiceHandler);
    $(".AuthKillSwitchv1Content").hover(AuthKillSwitchv1Handler);
    $(".AuthKillSwitchv2Content").hover(AuthKillSwitchv2Handler);
    $(".ChannelsContent").hover(ChannelsHandler);
    $(".OverviewContent").hover(OverviewHandler);
    $(".CPServicesContent").hover(CPServicesHandler);
    $(".AcessServicesContent").hover(AcessServicesHandler);
    $(".AndroidContent").hover(AndroidHandler);
    $(".CPCAndroidContent").hover(CPCAndroidHandler);



