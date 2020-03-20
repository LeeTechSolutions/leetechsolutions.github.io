headerup = false;
toggled = 0;
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

});
function raiseHeader() {
		toggled = toggled + 1;
		console.log("bitch");
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
}
function lowerHeader(){
		toggled = toggled - 1;
		console.log("shit");
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
}