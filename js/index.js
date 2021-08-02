const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const newTitle = document.querySelector('title')
newTitle.textContent = 'Great Idea!'

const script = document.querySelector('script')
script.remove('js/index.js')

document.querySelector('a').textContent = 'Services'
document.querySelector('a:nth-of-type(2)').textContent = 'Product'
document.querySelector('a:nth-of-type(3)').textContent = 'Vision'
document.querySelector('a:nth-of-type(4)').textContent = 'Features'
document.querySelector('a:nth-of-type(5)').textContent = 'About'
document.querySelector('a:nth-of-type(6)').textContent = 'Contact'

const newHeading = document.querySelector('h1')
newHeading.innerHTML = 'DOM <br> IS <br> AWESOME'

let ctaImg = document.getElementById('cta-img');
ctaImg.src = 'img/header-img.png';

const newButton = document.querySelector('button')
newButton.textContent = 'Get Started'

const topContent = document.querySelectorAll(".top-content h4");
topContent[0].textContent = siteContent["main-content"]["features-h4"]; 
topContent[1].textContent = siteContent["main-content"]["about-h4"];
	
const topParagraph = document.querySelectorAll(".top-content p");
topParagraph[0].textContent = siteContent["main-content"]["features-content"];
topParagraph[1].textContent = siteContent["main-content"]["about-content"]; 
		
let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src'])
		
const bottomContent = document.querySelectorAll(".bottom-content h4");
bottomContent[0].textContent = siteContent["main-content"]["services-h4"]; 
bottomContent[1].textContent = siteContent["main-content"]["product-h4"]; 
bottomContent[2].textContent = siteContent["main-content"]["vision-h4"]; 
  	
const bottomParagraph = document.querySelectorAll(".bottom-content p");
bottomParagraph[0].textContent = siteContent["main-content"]["services-content"]; 
bottomParagraph[1].textContent = siteContent["main-content"]["product-content"]; 
bottomParagraph[2].textContent = siteContent["main-content"]["vision-content"];
		
const contact = document.querySelector(".contact h4");
contact.textContent = siteContent.contact["contact-h4"];
	
const contactSection = document.querySelectorAll(".contact p")
contactSection[0].textContent = siteContent.contact.address;
contactSection[1].textContent = siteContent.contact.phone;
contactSection[2].textContent = siteContent.contact.email;
	
const footer = document.querySelector("footer");
footer.textContent = siteContent.footer.copyright;

