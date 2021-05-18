var initSubject = '',
    initBody = '';

function submitHandler() {
    var to = "raydingwang@gmail.com"
    var name = nameText.value;
    var email = emailText.value;
    var tel = telText.value;
    var subject = subText.value;

    var body = "" + bodyText.value + '%0A%0A%0A';
    body += "From:" + nameText.value + '%0A';
    body += "Email:" + emailText.value + '%0A';
    body += "Tel:" + telText.value;
    mailTo.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
    mailTo.click();
}

function init() {
    subText.value = initSubject;
    toText.value = initTo;
    bodyText.value = initBody;
}