document.getElementById('generateAvatar').addEventListener('click', createAvatar);
document.getElementById('regenerateAvatar').addEventListener('click', regenerateAvatar);
document.getElementById('nextStep').addEventListener('click', saveAndProceed);

let currentAvatarIndex = 0; // Для хранения текущего индекса аватара

function createAvatar() {
    const username = document.getElementById('username').value;
    if (!username) {
        alert('Please enter a name.');
        return;
    }
    fetchAvatar(username);
}

function fetchAvatar(username) {
    fetch(`https://api.multiavatar.com/${username}.svg?i=${currentAvatarIndex}`)
        .then(response => response.text())
        .then(svg => {
            document.getElementById('avatarContainer').innerHTML = svg;
        })
        .catch(error => console.error('Error:', error));
}

function regenerateAvatar() {
    currentAvatarIndex++; // Увеличиваем индекс для генерации нового аватара
    const username = document.getElementById('username').value;
    if (!username) {
        alert('Please enter a name.');
        return;
    }
    fetchAvatar(username);
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

    fetch('save_avatar.php', {
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
