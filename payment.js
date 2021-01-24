var id_token = '';
$.ajax({
    url: 'sajeeb007.github.i0/payment/tokenized/checkout/token/grant',
    type: 'POST',
    contentType: 'application/json',
    beforeSend: function(tokenRequest) {
        tokenRequest.setRequestHeader("username", "shared_name");
        tokenRequest.setRequestHeader("password", "shared_password");
    },
    data: JSON.stringify( { "app_key": "shared_app_key", "app_secret": "shared_app_secret" } ),
    success: function(data) {
    if (data && data.id_token != null) {
      id_token = data.id_token;
      $('#bKash_button').removeAttr('disabled');
    }
  }
});
