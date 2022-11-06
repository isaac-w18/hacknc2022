console.log("hello")

// getElementByClass -> remove hidden

function getULItems() {
  const the_stuff = document.getElementById("results").getElementsByTagName("span");
  var arr = new Array(the_stuff.length);
  for (let i = 0; i < the_stuff.length; i++) {
    arr[i] = the_stuff[i].innerText;
  }
  const javascriptdata = JSON.stringify(arr);
  $.post( "/postmethod", {
    javascript_data: javascriptdata
  });
}

function addBadge(event){
  const input=document.getElementById("results")
  //eventlistener on click -> hidden/not 
  console.log(event)
  console.log(input)
  input.appendChild(event.target)
}

$(document).ready(function($){

  $(".menuItem").click(addBadge)



  // filter
  $("#listSearch").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

    //--- CONTINUE ---
    $("form > p > a").click(function(){
        //-- Detect terms and conditions
        var term = false;
        if ($(".term > i").hasClass('fa-check-square-o')){
            term = true;
        }
        
        //-- only example
        var user = {};
        user.name = $("input[name='name']").val();
        user.diet = $("input[name='diet']").val();
        user.phone = $("input[name='phone']").val();
        user.items = $("input[name='items']").val();

        //-- Validator            
        $("input").each(function(e, valor){
            var error = false;
            if ($(this).val() == ""){
                error = true;
            }
            if (error === true){
                //-- with errors
                $(this).parent().css({"color":"red"});
                $(this).css({"border-bottom":"1px solid red"});
            }else{
                //-- without errors
                $(this).parent().css({"color":"black"});
                $(this).css({"border-bottom":"1px solid silver","color":"gray"}); 
            }
        })

        //-- msg example
        $("body").append(JSON.stringify(user) + "<br>");
    })
})