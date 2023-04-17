(function (w, d, x, id) {
  s = d.createElement('script');
  s.src =
    'https://d2zasqxhmd6ne4.cloudfront.net/amazon-connect-chat-interface-client.js';
  s.async = 1;
  s.id = id;
  d.getElementsByTagName('head')[0].appendChild(s);
  w[x] =
    w[x] ||
    function () {
      (w[x].ac = w[x].ac || []).push(arguments);
    };
})(window, document, 'amazon_connect', '54b2e37c-a18c-4f57-a5ae-fc913de4bb56');
amazon_connect('styles', {
  openChat: { color: '#ffffff', backgroundColor: '#123456' },
  closeChat: { color: '#ffffff', backgroundColor: '#123456' }
});
amazon_connect(
  'snippetId',
  'QVFJREFIajB2ZWh0V0phclVpYUZ6M3pLNlhsbzI5ZENWTXp0dUl0L20zMmpCN0ltRGdIN1hvVXBWVmxQMXpKd2RJNmhQNUdkQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNek1haktTTmpwbEE0SnAvbUFnRVFnQ3RlMldZRE40Z0ZBN2kveUcwUkJQS2lwaW1xQjNjZlBGTUpMQ0ZiVnlTU1VGQng3eHAvc0NFNVgzdDM6OkVrMC9LbklQdWNnNXpjUko0Z3VaZURXREhEQnNNcld4NEhRT2J5bzFUQ1NOS1ZvNi9GdVdCSmV5bEdtUHJEYUIzOWdyTFFsOHJMV0VqYUpSY1FmeDZOYThlRXFjS2JlckpZdFloVDFTWVczMysvUk9zRTVkcU1UalBsL2R5NXZ0US90WkkzQWp0ZG5tVW9uR3ovQUhZejBGNlJ1WnE5MD0='
);
amazon_connect('supportedMessagingContentTypes', [
  'text/plain',
  'text/markdown'
]);
amazon_connect('authenticate', function (callback) {
  window.fetch('/token').then((res) => {
    res.json().then((data) => {
      callback(data.data);
    });
  });
});
