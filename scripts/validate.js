document.getElementById('login-form').addEventListener('submit', search_stein);

function search_stein(e) {
    // Search Users
    const store = new SteinStore(
        "https://api.steinhq.com/v1/storages/5d3f9f9b87c49c04cac13690"
    );

    let username = $("#username_login").val();
    let password = $("#username_password").val();

    store.read("Users", { search: { username: username, password: password} }).then(data => {
        if(data.length != 0) {
            console.log("Username: " + data[0].username + " \nPassword: " + data[0].password);
            validate_login(data, username, password);
        }
        else {
            console.log("LOGIN FAILED");
            alert ("Login was unsuccessful, please check your username and password");
            document.getElementById("#login-form").reset(); 
        }
    });

    e.preventDefault();
}

function validate_login(data, username, password) {
    if ((username == data[0].username) && (password == data[0].password)) {
        console.log("LOGIN SUCCESS");
        return true;
    }
    else {
        console.log("LOGIN FAILED");
        alert ("Login was unsuccessful, please check your username and password");
        return false;
    }
}

  