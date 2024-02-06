/*==================== if User views on Safari then load safari.css ====================*/

var userAgent = navigator.userAgent.toLowerCase();

if (userAgent.includes('safari')) {
    // Get HTML head element
    let head = document.getElementsByTagName("HEAD")[0];

    // Create new link Element
    let link = document.createElement("link");

    // set the attributes for link element
    link.rel = "stylesheet";

    link.type = "text/css";

    link.href = "./css/global/safari.css";

    // Append link element to HTML head
    head.appendChild(link);
    console.log("hello");
}