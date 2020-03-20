headerup = false;
toggled = 0;
temp = 0;
opacityval = 1;
window.addEventListener('scroll', function(e){

	console.log(headerup);
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
	opacityval = opacityval + (temp - window.scrollY)/75;
	console.log(opacityval);
	$("#code").velocity({
		opacity: opacityval,
	}, {
		duration: 1,
	});
	temp = window.scrollY;
});
function raiseHeader() {
		toggled = toggled + 1;
		$("#header").velocity({
			height: "100px",
		}, {
			duration: 200,
		});
		$("#name").velocity({
			fontSize: "35px",
		}, {
			duration: 200,
		});
		$("#bar").velocity({
			width: "400px",
			height: "0.5vh",
		}, {
			duration: 200,
		});
		$("#header-right").velocity({
			fontSize: "17px",
		}, {
			duration: 200,
		});
}
function lowerHeader(){
		toggled = toggled - 1;
		$("#header").velocity({
			height: "150px",
		}, {
			duration: 200,
		});
		$("#name").velocity({
			fontSize: "60px",
		}, {
			duration: 200,
		});
		$("#bar").velocity({
			width: "700px",
			height: "1vh",
		}, {
			duration: 200,
		});
		$("#header-right").velocity({
			fontSize: "25px",
		}, {
			duration: 200,
		});
}