var url   //update 17/03/2022
$('#btnSignIn').click(function () {
    url = location.href // update 17/03/2022
    if (isExactlyDataSignIn() == true) {
        fetch('/client/api/sign-in', {
            method: 'post',
            body: JSON.stringify({
                'username': document.getElementById('usernameSignIn').value,
                'password': document.getElementById('passwordSignIn').value
            }),
            headers: {
                'Accept': 'application/json',
                'Context-Type': 'application/json',
            }
        }).then(res => res.json()).then(data => {
            if (data == 'error') {
                Swal.fire({
                    title: 'Wrong username or password !',
                    text: 'Please try again',
                    icon: 'warning',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Ok',
                })
            } else
                window.location = url  // update 17/03/2022
            //                    window.location="/tai-khoan"

        })
    }
})

// kiểm tra thông tin nhập
function isExactlyDataSignIn() {
    if (document.getElementById('usernameSignIn').value == '' || document.getElementById('passwordSignIn').value == '') {
        Swal.fire({
            title: 'Please try again !!!',
            text: '',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok',
        })
        return false
    }
    return true
}