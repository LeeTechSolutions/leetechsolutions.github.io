headerup = false;
toggled = false;
window.addEventListener('scroll', function(e){
	if (window.scrollY >= 50){
		headerup = true;
	}
	if (headerup == true && toggled == false){
		toggled = true;
		$("#header").velocity({
			height: "100px",
		}, {
			duration: 2000,
		});
		$("#name").velocity({
			fontSize: "35px",
		}, {
			duration: 2000,
		});
		$("#bar").velocity({
			width: "400px",
			height: "0.5vh",
		}, {
			duration: 2000,
		});
	} 
});