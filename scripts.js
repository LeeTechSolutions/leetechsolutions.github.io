baitvisible = true;
temp = 0;
headerdown = false;
runs = 0;
set = false;
backgroundposx = 50;
backgroundposy = 50;
window.addEventListener('scroll', function(e){

	//effect of the bait text
	if (window.scrollY > 100 && baitvisible == true){
		makeOpaque(".bait");
	}
	if (window.scrollY < 100 && baitvisible == false) {
		makeTrasparent(".bait");
	}

	//top bar animations
	if (window.scrollY > 100 && !(headerdown) && !(set)){
		console.log("hi")
		set = true;
		$(".home").css({
			position: "fixed",
			top: "-80px",
		}).velocity({
			translateY: '5px',
		}, {
			duration: 250,
		});
		headerdown = false;
	}
	//dropwhen heading back up
	if (goingUp() && window.scrollY > 100 && !(headerdown)){
		dropWindow();
	}
	//going back down
	console.log(temp);
	if (!(goingUp()) && window.scrollY > 100 && headerdown){
		raiseWindow();
	}
	//background animation
	if (!(goingUp())){
		backgroundposy = backgroundposy + 0.4;
		backgroundposx = backgroundposx + 0.3;
		$('.landing-wrapper').css('background-position', (backgroundposx + "%" + backgroundposy + "%"));
	}
	if ((goingUp())){
		backgroundposy = backgroundposy - 0.4;
		backgroundposx = backgroundposx - 0.3;
		$('.landing-wrapper').css('background-position', (backgroundposx + "%" + backgroundposy + "%"));
	}
	console.log(window.scrollY);
	console.log(goingUp());
	temp = window.scrollY;
});

//make something so that when links are highlighted, it does some crazy rainbow higlight pazass

function makeOpaque(name){
	$(name).velocity({
			opacity: 0,
		}, {
			duration: 1000,
		});
	baitvisible = false;
}

function makeTrasparent(name){
	$(name).velocity({
			opacity: 1,
		}, {
			duration: 1000,
		});
	baitvisible = true;
}

function goingUp(){
	if ((temp - window.scrollY) > 0){
		return true;
	} else if ((temp-window.scrollY) <0) {
		return false;
	} else {
		return true;
	}
}
function dropWindow() {
	console.log("It's going down");
	$(".home").velocity({
			translateY: '80px',
		}, {
			duration: 100,
		});
	headerdown = true;
}
function raiseWindow() {
	$(".home").velocity({
			translateY: '5px',
		}, {
			duration: 100,
		});
	headerdown = false;
}