// TO DISPLAY THE CURRENT TIME AND DATE - Below Tweet
function updateTimeDate() {
    let now = new Date();
    let time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'});
    let date = now.toLocaleDateString();

    document.getElementById('time-date').innerText = `${time} • ${date}`;
}

setInterval(updateTimeDate, 1000); // Time is updated every second
updateTimeDate(); // Initial Function call

