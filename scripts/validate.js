document.getElementById('login-form').addEventListener('submit', search_stein);

function search_stein(e) {
    // Search Users
    const store = new SteinStore(
        "https://api.steinhq.com/v1/storages/5d3f9f9b87c49c04cac13690"
    );

    let username = $("#username_login").val();
    let password = $("#username_password").val();

    store.read("Users", { search: { username: username, 
                                    password: password} }).then(data => {
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

function searchUser(e) {

    const store = new SteinStore(
        "https://api.steinhq.com/v1/storages/5d3f9f9b87c49c04cac13690"
    );

    let currentUser = $('#username_login').val();

    store.read("Users", { search: { username: currentUser} }).then(data => {
        if(data.length != 0) {
            displayUsername(data);
        }
    });
}

function displayUsername(data) {
    console.log("in func");
    console.log(data[0].username);
    document.getElementById('userTitle').innerHTML = data[0].username;
    console.log(document.getElementById('usertTitle'))
}

function validate_login(data, username, password) {
    if ((username == data[0].username) && (password == data[0].password)) {
        console.log("LOGIN SUCCESS");
        location.href = "/site/index.html";
        displayUsername(data);
        
        return true;
    }
    else {
        console.log("LOGIN FAILED");
        alert ("Login was unsuccessful, please check your username and password");
        return false;
    }
}
