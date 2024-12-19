// ==========================
// Mode Toggle Functionality
// ==========================
const modeToggle = document.getElementById('mode-toggle');
const modeIcon = document.getElementById('mode-icon');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Toggle between moon and sun icons
    if (body.classList.contains('dark-mode')) {
        modeIcon.src = "sun.jpg"; // Replace with your sun icon path
        modeIcon.alt = "Light Mode";
    } else {
        modeIcon.src = "moon.png"; // Replace with your moon icon path
        modeIcon.alt = "Dark Mode";
    }
});

// ============================
// Scroll Buttons Functionality
// ============================
const scrollUpBtn = document.getElementById('scroll-up');
const scrollDownBtn = document.getElementById('scroll-down');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollUpBtn.style.display = 'block';
        scrollDownBtn.style.display = 'none';
    } else {
        scrollUpBtn.style.display = 'none';
        scrollDownBtn.style.display = 'block';
    }
});

scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

scrollDownBtn.addEventListener('click', () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

// ==============================
// Card Number Validation & Alert
// ==============================
function isCardNumberValid(cardNumber) {
    return /^[0-9]{10}$/.test(cardNumber); // Checks if the input is 10 numeric characters
}

function showMessage(message) {
    const outputMessage = document.getElementById('outputMessage');
    outputMessage.style.display = 'block';
    outputMessage.textContent = message;
    outputMessage.className = 'alert alert-info';
}

function handleButtonClick(message) {
    const cardNumber = document.getElementById('cardNumber').value;
    if (isCardNumberValid(cardNumber)) {
        showMessage(message);
    } else {
        showMessage('Invalid card number.');
        document.getElementById('outputMessage').className = 'alert alert-danger';
    }
}

// ============================
// Search and Card Rendering
// ============================
document.addEventListener('DOMContentLoaded', () => {
    const contentContainer = document.getElementById('community-content');
    const searchBar = document.getElementById('search-bar');

    // Mock data for cards
    const allNews = [
        { photo: 'random.jpg', title: 'Articol 1', description: 'Descriere pe scurt 1', link: 'https://example.com/news1' },
        { photo: 'random.jpg', title: 'Articol 2', description: 'Descriere pe scurt 2', link: 'https://example.com/news1' },
        { photo: 'random.jpg', title: 'Articol 3', description: 'Descriere pe scurt 3', link: 'https://example.com/news1' },
        { photo: 'random.jpg', title: 'Articol 4', description: 'Descriere pe scurt 4', link: 'https://example.com/news1' },
        { photo: 'random.jpg', title: 'Articol 5', description: 'Descriere pe scurt 5', link: 'https://example.com/news1' },
    ];

    // Function to render cards
    const renderCards = (news) => {
        contentContainer.innerHTML = ''; // Clear existing content
        news.forEach(item => {
            const card = document.createElement('div');
            card.className = 'col-md-4';
            card.innerHTML = `
                <div class="card">
                    <img src="${item.photo}" alt="News Image">
                    <div class="card-body">
                        <div class="card-title">
                            <a href="${item.link}" target="_blank" style="text-decoration: none; color: inherit;">${item.title}</a>
                        </div>
                        <p class="card-text">${item.description}</p>
                    </div>
                </div>
            `;
            contentContainer.appendChild(card);
        });
    };

    // Initial render of all cards
    renderCards(allNews);

    // Add event listener for the search bar
    searchBar.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        const filteredNews = allNews.filter(item =>
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        );
        renderCards(filteredNews); // Render filtered cards
    });
});
