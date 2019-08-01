function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  } 

function myFunction(e) {

    const store = new SteinStore(
        "https://api.steinhq.com/v1/storages/5d3f9f9b87c49c04cac13690"
    );

    let images = ["/img/user1.jpg", "/img/user2.jpg", "/img/user3.jpg"];
    let randNum = Math.floor(Math.random() * 3);

    let fname = $("#fname").val();
    let lname = $("#lname").val();
    let username = $("#username").val();
    let email = $("#email").val();
    let password = $("#psw").val();
    let uuid = uuidv4();
    let img = images[randNum];
    let bio = $("$bio").val();


     
    store
        .append("Users", [
        {
            fname: fname,
            lname: lname,
            username: username,
            email: email,
            password: password,
            id: uuid,
            image: img,
            bio: bio
        }
        ])
        .then(res => {
            console.log(res);
        });
        e.preventDefault();   
}

document.getElementById('form').addEventListener('submit', myFunction);

document.getElementById('submitbtn').addEventListener('click', function(){
    location.href = "/site/login.html";
})
