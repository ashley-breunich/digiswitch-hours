'use strict';

let total = 0;

let serviceData = [
    {
        question: 'Are you interested in having our team manage your social media?',
        answers: ['yes', 'no'],
    }
]

$('#begin').on('click', function() {
    $('#begin').hide();
    $('#service-question').text(serviceData[0].question);
    jQuery.each(serviceData[0].answers, function(index, value) {
        $('#service-answers').add("li").text(value);
    })
})