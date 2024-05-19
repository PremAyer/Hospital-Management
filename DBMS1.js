function submit(){
    let name=document.getElementById("name");
    let address=document.getElementById("address");
    let number=document.getElementById("number");

    if(name.value===""){
        alert("Please enter your name");
    }
    else if(address.value===""){
        alert("Please enter your address");
    }
    else if(number.value===""){
        alert("Please enter your number");

    }
    else if (!/^\d+$/.test(number.value)) {
        alert("Pls! enter a valid number");

    }
    else{
        alert("You are successfully registered:"+name.value);
    }  
}


document.getElementById("Explore").addEventListener("click", function() {
    window.location.href = "http://hospitalmanagementsystem.org/software-features.html";
});

document.getElementById("Try").addEventListener("click", function() {
    window.location.href = "http://hospitalmanagementsystem.org/index.html#demo";
});

document.getElementById("payment").addEventListener("click", function() {
    window.location.href = "QR.png";
});

document.getElementById().addEventListener('click',function(){
    window.location.href = "http://hospitalmanagementsystem.org/Book.html";
})

document.getElementById("insta").addEventListener('click',function(){
    window.location.href = "https://www.instagram.com/premayer123/";
})

document.getElementById("youtube").addEventListener('click',function(){
    window.location.href = "https://youtube.com/@premayer2725?si=TpP5RKYaFSBISiIS";
})




         