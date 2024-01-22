$('#showresidential').on('click', showresidential);
$('#showcommercial').on('click', showcommercial);

function showresidential(){
    $('button').removeClass('selected');
    $('#showresidential').addClass('selected');
    $('#commercialspeakers').hide();
    $('#residentialspeakers').css('display','flex');
}
function showcommercial(){
    $('button').removeClass('selected');
    $('#showcommercial').addClass('selected');
    $('#residentialspeakers').hide();
    $('#commercialspeakers').css('display','flex');
}