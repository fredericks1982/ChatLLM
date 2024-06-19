$(document).ready(function() {
    $('#chat-form').submit(function(event) {
        event.preventDefault();
        var userMessage = $('#message-input').val();
        $.ajax({
            url: '/chat',
            method: 'POST',
            data: { message: userMessage },
            success: function(response) {
                displayMessage(response.user_message, 'user');
                displayMessage(response.bot_response, 'bot');
                $('#message-input').val('');
            }
        });
    });
});

function displayMessage(message, sender) {
    var messageElement = $('<div>').text(message).addClass('message');
    if (sender === 'user') {
        messageElement.addClass('user-message');
    } else {
        messageElement.addClass('bot-message');
    }
    $('#chat-container').append(messageElement);
}