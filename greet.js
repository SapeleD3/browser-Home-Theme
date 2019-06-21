function greeting () {
    var time = new Date().getHours();
    var message;
    var name= 'Moses Sapele';

    if (time < noon){
        message = 'Good Morning';
    }else if (time >= evening){
        message = 'Good Evening';
    }else {
        message = 'Good Afternoon';
    }

    document.getElementById('message').innerHTML = message + ', ' + name;

}

greeting();