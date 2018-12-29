$('.spoiler').on('click', 'button', function (event) {
    //Show the spoiler text
    $(event.target).prev().show();
    //hide the button
    $(event.target).hide();
});
//create the button that says Reveal Spoiler
var $button = $('<button>Reveal Spoiler</button>');
// Add the button to the spoiler class
$('.spoiler').append($button);
//Hide the spoiler text inside a button
$('.spoiler span').hide();
