function renderDateTime() {
    const datetimeElement = document.getElementById('datetime');
    const now = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };

    const dateString = now.toLocaleDateString('en-US', dateOptions);
    const timeString = now.toLocaleTimeString('en-US', timeOptions);

    datetimeElement.innerHTML = `${dateString}<br>${timeString}`;
}

// Call the function once when the page loads
renderDateTime();

// Update the time every second
setInterval(renderDateTime, 1000);
