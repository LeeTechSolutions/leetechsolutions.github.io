headerup = false;
toggled = 0;
temp = 0;
posit = 0;
opacityval = 1;
window.addEventListener('scroll', function(e){
	if (window.scrollY > 50 && toggled == 0){
		headerup = true;
	}
	if (window.scrollY < 50 && toggled == 1) {
		headerup = false;
	}
	if (headerup && toggled == 0){
		raiseHeader();
	} 
	if (headerup === false && toggled == 1){
		lowerHeader();
	}
	opacityval = opacityval + (temp - window.scrollY)/105;
	$("#code").velocity({
		opacity: opacityval,
	}, {
		duration: 1,
	});
	console.log(window.scrollY-50);

	if (headerup === true & window.scrollY > 75) {
		scrollchange = temp - (window.scrollY);
		posit = posit + scrollchange;
		$("#header").velocity({
			translateY: posit + 'px',
		}, {
			duration: 1,
		});
	}
	if (posit != 0 && headerup === false){
		posit = 0;
		$("#header").velocity({
			translateY: posit + 'px',
		}, {
			duration: 10,
		});
	}

	temp = window.scrollY;

});
function raiseHeader() {
		toggled = toggled + 1;
		$("#header").velocity({
			height: "100px",
		}, {
			duration: 100,
		});
		$("#name").velocity({
			fontSize: "35px",
		}, {
			duration: 100,
		});
		$("#bar").velocity({
			width: "400px",
			height: "0.5vh",
		}, {
			duration: 100,
		});
		$("#header-right").velocity({
			fontSize: "17px",
		}, {
			duration: 100,
		});
}
function lowerHeader(){
		toggled = toggled - 1;
		$("#header").velocity({
			height: "150px",
		}, {
			duration: 100,
		});
		$("#name").velocity({
			fontSize: "60px",
		}, {
			duration: 100,
		});
		$("#bar").velocity({
			width: "700px",
			height: "1vh",
		}, {
			duration: 100,
		});
		$("#header-right").velocity({
			fontSize: "25px",
		}, {
			duration: 100,
		});
}