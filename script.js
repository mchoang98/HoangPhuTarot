// Dark mode
const dateObj = new Date();
var cssId = "dark-mode";
if (!document.getElementById(cssId) && dateObj.getHours() >= 19)
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'dark-mode.css';
    head.appendChild(link);

    var changeImg = document.getElementById("img-2");
    changeImg.src = "./Image/Image-8.png";
}