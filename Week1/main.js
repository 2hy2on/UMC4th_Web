function login_page(){
    window.location.href = "login.html";
}

function toggle(){
    // let qDiv = document.querySelector('.box_q');
    if(document.querySelector('.box_a').style.display==='block'){
        document.querySelector('.box_a').style.display='none';
    }else{
        document.querySelector('.box_a').style.display='block';
    }
    
}

// qDiv.addEventListener('click', function(){
//     qDiv.classList.toggle('box_a');
// });
