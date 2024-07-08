document.getElementById('generateAvatar').addEventListener('click', createAvatar);
document.getElementById('regenerateAvatar').addEventListener('click', createAvatar);
document.getElementById('nextStep').addEventListener('click', saveAndProceed);

function createAvatar() {
    const username = document.getElementById('username').value;
    if (!username) {
        alert('Please enter a name.');
        return;
    }
    fetch(`https://api.multiavatar.com/${username}.svg`)
        .then(response => response.text())
        .then(svg => {
            document.getElementById('avatarContainer').innerHTML = svg;
        })
        .catch(error => console.error('Error:', error));
}

function saveAndProceed() {
    const username = document.getElementById('username').value;
    const avatarContainer = document.getElementById('avatarContainer');
    const avatarSVG = avatarContainer.innerHTML;

    if (!username || !avatarSVG) {
        alert('Please enter a name and generate an avatar.');
        return;
    }

    // Assume you have a way to get the telegram ID (this is just a placeholder)
    const telegramId = "123456"; // Replace with actual telegram ID retrieval logic

    // Save data to JSON using Netlify Functions
    fetch('/.netlify/functions/save_avatar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, telegramId: telegramId, svg: avatarSVG })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Avatar saved successfully!');
            // Redirect or proceed to the next step
            // window.location.href = 'next_page.html'; // Uncomment and replace with the actual next page
        } else {
            alert('Error saving avatar.');
        }
    })
    .catch(error => console.error('Error:', error));
}
