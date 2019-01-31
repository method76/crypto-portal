$(document).ready(function() {
    window.inbox = {};
    window.paginate = {
        total: Math.random() * (54236 - 100) + 3
    }
    for (var i = 0; i < 6; i++) {
        window.inbox[i] = {
            from: faker.name.findName(),
            timestamp: null,
            imageUrl: faker.image.imageUrl(),
            subject: faker.lorem.sentence().substring(0, 40),
            snippet: faker.lorem.lines(),
            fullMail: window.faker.lorem.paragraphs(faker.random.number(40)),
            email: faker.internet.email()
        };
    }
    var inboxVue = new Vue({
        el: '#mail-app',
        data: {
            messages: window.inbox,
            paginate: {
                pointer: {
                    start: 1,
                    end: 10
                },
                total: 100
            }
        },
        methods: {
            showMessage: function(msg, index) {
                $('#message-pane').removeClass('is-hidden');
                $('.card').removeClass('active');
                $('#msg-card-' + index).addClass('active');
                $('.message .address .name').text(msg.subject);
                $('.message .address .email').text(msg.from + '  in steemian • 어제');
                var msg_body = '<p>' +
                    msg.fullMail +
                    '</p>';
                $('.message .content').html(msg_body);
            }
        }
    });
});
