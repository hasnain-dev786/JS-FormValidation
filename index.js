function run() {

    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    document.getElementById("usermsg").innerHTML = ""
    document.getElementById("emailmsg").innerHTML = ""
    document.getElementById("passwordmsg").innerHTML = ""

    document.getElementById("username").style.border = ""
    document.getElementById("email").style.border = ""
    document.getElementById("password").style.border = ""

    let isValid = true

    if (username === "") {

        document.getElementById("username").style.border = "1px solid red"
        document.getElementById("usermsg").innerHTML = "this field is required"
        isValid = false

    }


    if (email === "") {

        document.getElementById("email").style.border = "1px solid red"
        document.getElementById("emailmsg").innerHTML = "this field is required"
        isValid = false

    }

    if (password === "") {

        document.getElementById("password").style.border = "1px solid red"
        document.getElementById("passwordmsg").innerHTML = "this field is required"
        isValid = false

    }

    if (isValid) {
        alert("this form has been submitted sucessfull ")
        document.getElementById("username").value = ""
        document.getElementById("email").value = ""
        document.getElementById("password").value = ""




    }


}