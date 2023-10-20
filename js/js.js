document.addEventListener("readystatechange", function(event) {
	if(event.target.readyState == "interactive") {
		// Adding a "JavaScript is Enabled" Body Class
		document.querySelector("body").classList.add("js");

        //change background color when mousemove
        $(document.querySelector('header')).mousemove(function(event) {
            getUserWidth = $(window).width();
            getUserHeight = $(window).height();
            
            gradientX = Math.round(event.pageX / getUserWidth * 100);
            gradientY = Math.round(event.pageY / getUserHeight * 100);
            
            $('.radial-gradient').css('background', 'radial-gradient(at ' + gradientX + '% ' + gradientY + '%, #e1a6b6, #fdfdfd)');
          });
          // (BG Color Change on Mousemove, n.d.)
          



        //progress bar
        function updateProgressBar(){
          const {scrollTop, scrollHeight} = document.documentElement;
          const scrollPercent = (scrollTop) / (scrollHeight - window.innerHeight) * 100 + '%';
          document.querySelector('.scroll-tracker').style.setProperty('--progress', scrollPercent);
        }
        
        document.addEventListener('scroll', updateProgressBar);
        // (Coding in Public, 2021)


	}
});