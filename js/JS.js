  //================== Navbar current scroll ==================
function changeBackground() {
  var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  var Header = document.querySelector("#header")
  var Headers = document.querySelector("#headers")
  
  if (scrollPos > 50) {
    Header.classList.add("Header-scrolled");
  } else {
    Header.classList.remove("Header-scrolled");
  }
  // current scroll button 
  var back_to_top = document.querySelector(".back-to-top")

  if (scrollPos > 500) {
    back_to_top.style.display = "inline";
  } else {
    back_to_top.style.display = "none";
  }
}
//================== Navbar current scroll End ==================



//================== registered ==================
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
//================== registered end ==================

//================== paid frees ==================

var Paid = document.getElementById("paid");
var Free = document.getElementById("free");
var paid_tab = document.getElementById("paid-tab");
var free_tab = document.getElementById("free-tab");
function paid() {
  Free.classList.add("remove");
  free_tab.classList.remove("active");
  Paid.classList.remove("remove");
  paid_tab.classList.add("active");
}
function free() {
  Free.classList.remove("remove");
  free_tab.classList.add("active");
  Paid.classList.add("remove");
  paid_tab.classList.remove("active");

}


var drop_down_ul = document.getElementById("drop-down-ul");
function About() {
  drop_down_ul.classList.toggle("md_None");
}


//================== video-gallery ==================
const All_pf = document.querySelector('.All_pf');
const Photos_pf = document.querySelector('.Photos_pf');
const Videos_pf = document.querySelector('.Videos_pf');
const E_portfolio_photo = document.getElementById("E_portfolio_photo");
const E_portfolio_video = document.getElementById("E_portfolio_video");

All_pf.addEventListener('click', () => {
  const photos = document.querySelectorAll('#E_portfolio_photo');
  const Videos = document.querySelectorAll('#E_portfolio_video');
  const All_pf = document.querySelector('.All_pf');
  const Photos_pf = document.querySelector('.Photos_pf');
  const Videos_pf = document.querySelector('.Videos_pf');
  photos.forEach(photo => {
    photo.classList.remove("remove");
    All_pf.classList.add("filter-active");
    Photos_pf.classList.add("filter-active");
    Videos_pf.classList.add("filter-active");
  });
  Videos.forEach(Videos => {
    Videos.classList.remove("remove");
    All_pf.classList.add("filter-active");
    Photos_pf.classList.add("filter-active");
    Videos_pf.classList.add("filter-active");
  });
});

Photos_pf.addEventListener('click', () => {
  const photos = document.querySelectorAll('#E_portfolio_photo');
  const Videos = document.querySelectorAll('#E_portfolio_video');
  const All_pf = document.querySelector('.All_pf');
  const Photos_pf = document.querySelector('.Photos_pf');
  const Videos_pf = document.querySelector('.Videos_pf');
  photos.forEach(photo => {
    photo.classList.remove("remove");
    All_pf.classList.remove("filter-active");
    Photos_pf.classList.add("filter-active");
    Videos_pf.classList.remove("filter-active");
  });
  Videos.forEach(Videos => {
    Videos.classList.add("remove");
    All_pf.classList.remove("filter-active");
    Photos_pf.classList.add("filter-active");
    Videos_pf.classList.remove("filter-active");
  });
});

Videos_pf.addEventListener('click', () => {
  const photos = document.querySelectorAll('#E_portfolio_photo');
  const Videos = document.querySelectorAll('#E_portfolio_video');
  const All_pf = document.querySelector('.All_pf');
  const Photos_pf = document.querySelector('.Photos_pf');
  const Videos_pf = document.querySelector('.Videos_pf');
  photos.forEach(photo => {
    photo.classList.add("remove");
    All_pf.classList.remove("filter-active");
    Photos_pf.classList.remove("filter-active");
    Videos_pf.classList.add("filter-active");
  });
  Videos.forEach(Videos => {
    Videos.classList.remove("remove");
    All_pf.classList.remove("filter-active");
    Photos_pf.classList.remove("filter-active");
    Videos_pf.classList.add("filter-active");
  });
});

//=========== videoss ===========
const videoss = document.querySelectorAll('.videoss');
videoss.forEach(videoss => {
  videoss.onclick = () => {
    videoss.style.display = 'none';
  }
});

//================== video-gallery End ==================



var login_hidden1 = document.getElementById("login_hidden");
function login_hidden() {
  login_hidden1.classList.add("remove");
}





