//init server
var fire = new Firebase('https://sweltering-inferno-9035.firebaseio.com/');

//Load Cards into Dropdown Menu
num = $('a').length;
for(var i=0; i < num; i++){
    $('#cards').append('<option value="'+$('a').eq(i).text()+'">'+$('a').eq(i).text()+'</option>')
};

//Server Response
fire.on('child_added', function(snap){
    var color = "red";
    var data = snap.val();
    if (data.status == "Approved"){
        color = "green";
    } 
    $('#trade-table').append('<tr><td id="request">'+ data.text + '</td><td style="color: '+ color +'">' + data.status + '</td></tr>');
});

//Button Handlers
$(document).ready(function() {
    
    //Trade Toggle
    $('#Trade').on("click", function() {
        $('#trade-window').toggle("slow");
    });
    
    //Submiting trade
    $('#submit-trade').on('click', function() {
        fire.push({
              text: $('#name').val() + ' would like to trade ' + $('#number').val() + " " + $('select').val(),
              status: "Pending"
        });
    });
});