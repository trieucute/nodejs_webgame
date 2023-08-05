// fixed menu
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() >115){
            $('.mid-header').addClass('fixed');
            document.getElementById("nav-menu-shop").style.top = "70px";
            // document.getElementById("nav-menu-shop").style.opacity = "0.5";
            // document.getElementById("cat-item-nav").style.opacity = "2";
            document.getElementById("nav-menu-shop").style.background = "rgba(3,43,56,0.8)";
        }else{
            $('.mid-header').removeClass('fixed');
            // $('.nav-menu-shop').removeClass('fixed');
            document.getElementById("nav-menu-shop").style.top = "110px";
            document.getElementById("nav-menu-shop").style.background = "#032B38";
        }
    });

});



// // sign in sign out

// let userlink = document.querySelector('#userlink');
// let signOutLink = document.getElementById('signoutlink')
// let currentUser= null;
// let li_cur_out = document.getElementById('cur_out')

// let signout_ad= document.getElementById('signout_none')
// let admin_li = document.createElement('li');
// let admin_a= document.createElement('a');
// admin_li.appendChild(admin_a);
// signout_ad.appendChild(admin_li)
// function getUsername(){
//     let keeplogin =localStorage.getItem('keeplogin');
//     if(keeplogin == 'yes'){
//         currentUser = JSON.parse(localStorage.getItem('user'));

//     }
//     else{
//         currentUser= JSON.parse(sessionStorage.getItem('user'));
//     }
    
// }

// function signOut(){
//     sessionStorage.removeItem('user');
//     localStorage.removeItem('user');
//     localStorage.removeItem('keeplogin');
//     window.location="../../site/login.html"



// }

// window.onload = function(){
//     getUsername();
//     if(currentUser==null){
//         userlink.innerText = "Sign In";
//         userlink.href= "../../site/login.html";


//     }
//     else{
//         userlink.innerText= currentUser.userName;
//         userlink.href= "#";
//         li_cur_out.classList.add("cur_out");

        
//         if(currentUser.role==='admin'){
//             admin_a.innerText ='Admin Web';
//             admin_a.href= "../../admin/index.html"
//         }
//         signOutLink.innerText= "Sign Out";
//         signOutLink.href = "javascript:signOut()";
//     }
// }

