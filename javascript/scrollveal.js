const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "30px",
  origin: "bottom",
  duration: 1000,
  desktop: true,
  mobile: true,
};
// Hero Section
ScrollReveal().reveal(".hero-title", {
  ...defaultProps,
  delay: 500,
  origin: window.innerWidth > 768 ? "left" : "bottom",
});
ScrollReveal().reveal(".name", {
  ...defaultProps,
  distance: "0px",
  delay: 700,
  scale: 0,
});
ScrollReveal().reveal(".hero-cta", {
  ...defaultProps,
  delay: 1200,
  origin: window.innerWidth > 768 ? "left" : "bottom",
});
ScrollReveal().reveal(".scroll-down-link", {
  ...defaultProps,
  delay: 2000,
  origin: "top",
});

/* About Section */
ScrollReveal().reveal(".section-title", {
  ...defaultProps,
  delay: 400,
  distance: "0px",
});
ScrollReveal().reveal(".about-wrapper__image", {
  ...defaultProps,
  delay: 600,
  scale: 0.5,
});

ScrollReveal().reveal(".about-wrapper__info", {
  ...defaultProps,
  delay: 700,
  distance: "100px",
  origin: window.innerWidth > 768 ? "left" : "top",
});

/* Projects Section */
ScrollReveal().reveal(".project-wrapper__text", {
  ...defaultProps,
  delay: 600,
  origin: window.innerWidth > 768 ? "left" : "bottom",
});

ScrollReveal().reveal(".project-wrapper__image", {
  ...defaultProps,
  delay: 600,
  scale: 0.9,
  origin: window.innerWidth > 768 ? "right" : "bottom",
});

/* Contact Section */
ScrollReveal().reveal(".contact-wrapper", {
  ...defaultProps,
  delay: 600,
});

ScrollReveal().reveal(".fa", {
  ...defaultProps,
  delay: 500,
  interval: 100,
});

/*==== Get E-Mail Copy ====*/
function GetEMAIL()
    {
	    navigator.clipboard.writeText('sebastianmazurek@pm.me');
		document.getElementById('label-email').innerHTML = 'sebastianmazurek@pm.me';
	    	document.getElementById('button-email').innerHTML = "E-mail Copied";
    }
var typed = new Typed('#typed', {
    strings: ['Hello there!', 'I am CCNA, C#, PowerShell and Unix enthusiast. ', 'I am CCNA, C#, PowerShell and Unix enthusiast. I hold a security clearance for confidential and secret.', 'I am CCNA, C#, PowerShell and Unix enthusiast. I hold a security clearance for confidential and secret. After work I enjoy doing my own IT projects.'],
    typeSpeed: 35,
    startDelay: 2000,
    //backDelay: 1000,
    backSpeed: 35,
    // fadeOut: true,
    //loop: true,
    //loopCount: 2,
    // showCursor: false
    // cursorChar: '...'

});
