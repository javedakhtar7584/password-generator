document.getElementById('add').addEventListener('click', function() {
    let website = document.getElementById('web-site').value;
    let emailOrUsername = document.getElementById('email-username').value;
    let password = document.getElementById('password').value;

    alert('Website: ' + website + '\nEmail/Username: ' + emailOrUsername + '\nPassword: ' + password);
});
