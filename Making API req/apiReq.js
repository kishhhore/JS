async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetching error:', error);
    }
}

async function displayData() {
    const apiUrl = 'https://api.example.com/data';
    const data = await fetchData(apiUrl);
    console.log(data);
}

displayData();