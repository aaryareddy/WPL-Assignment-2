            $.ajax({
                dataType: "json",
                url: "js/data.json",
                success: function(data) {
                  $.each(data, function(i, item) {
                    $("ul.gallery").append("<li><img src='images/square/" + item.path + "' alt='" + item.title + "'></li>");
                  });
              
                  $("img").mouseenter(function(){
                    $(this).addClass("gray");
                    var currtitle = $(this).attr("alt");
                    var newdiv;
                    $.each(data, function(i, item) {
                      if (item.title == currtitle) {
                        newdiv="<div id='preview'><img src='images/medium/"+ item.path + "'><p>" + item.title + "<br> "+ item.city + ", " + item.country + " {" + item.taken + '}' +"</p></div>";
                      }
                    });
                    $("footer").before(newdiv);
                    $("#preview").fadeIn(1300);
                  });
              
                  $("img").mouseleave(function(){
                    $(this).removeClass("gray");
                    $("#preview").remove();
                  });
              
                  $("img").mousemove(function(event) {
                    $("#preview").css({display: 'block', top: event.pageY + 20, left: event.pageX + 20, zIndex: 7});
                  });
                },
              });
              