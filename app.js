'strict';

let sumHours = 0;

$('#questions').hide();
$('#begin').on('click', function() {
    $('#begin').hide();
    socialMedia();
})

function socialMedia() {
    $('#questions').show();
    $('#service-question').text('Are you interested in having our team manage your social media?');
    $('#yes').click(function () {
        facebook();
    });
    $('#no').click(function () {
        // Go to newsletter question
    });
}

function facebook() {
    $('#service-question').text('Do you want us to manage your Facebook Business page?');
    $('#yes').click(function () {
        sumHours += 1.5;
        linkedIn();
        console.log(sumHours);
    });
}

function linkedIn() {
    $('#service-question').text('Do you want us to manage your LinkedIn account?');
    $('#yes').click(function () {
        sumHours += .5;
        console.log(sumHours);
    });
}