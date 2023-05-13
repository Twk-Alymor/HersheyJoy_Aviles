const primaryNav = document.querySelector(".navLinks");
const navToggle = document.querySelector(".burger");

// TOGGLE NAVIGATION
navToggle.addEventListener("click", () => {
	const visibility = primaryNav.getAttribute('data-visible');
	
	if (visibility === "false") {
		primaryNav.setAttribute("data-visible", true);
	} else {
		primaryNav.setAttribute("data-visible", false);
	}
});

// TOGGLE BURGER
const burger = document.querySelector('.burger');

let burgerOpen = false;

burger.addEventListener("click", () => {
	if(!burgerOpen){
		burger.classList.add('open');
		burgerOpen = true;
	} else {
		burger.classList.remove('open');
		burgerOpen = false;
	}
});

// DOWNLOAD RESUME
function DL_resume(){
	window.open('images/Hershey Joy Aviles-protected.pdf');
}

// VIEW CERTIFICATES
function view_certs(){
	window.open('https://drive.google.com/drive/folders/1utdydaDbRasRrbGMM1uhkq4wosMhh2MS?usp=sharing');
}

// OPEN PROJECTS
function open_STIHotel(){location.href="Proj/STI Hotel.html";}
function open_monshiro(){location.href="Proj/Monshiro.html";}
function open_VaccPinas(){location.href="Proj/VaccPinas.html";}
function open_Literacy(){location.href="Proj/Literacy Program.html";}
function open_pong(){location.href="Proj/Pong.html";}
function open_Luzon(){location.href="Proj/Luzon.html";}
function open_DataModels(){location.href="Proj/Data Models.html";}
function open_notebook(){location.href="Proj/Notebook.html";}
function open_dice(){location.href="Proj/Dice.html";}
function open_DonJuan(){location.href="Proj/Don Juan.html";}
function open_ITISLogo(){location.href="Proj/IT & IS Logo.html";}
function open_catpanion(){location.href="Proj/Catpanion.html";}

// GO BACT TO PROJECTS
function goto_proj(){
	location.href="../Project.html";
}
































