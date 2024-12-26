document.querySelectorAll('nav button').forEach(button => {
    button.addEventListener('click', () => {
        const section = button.dataset.section;
        loadSection(section);
    });
});

function loadSection(section) {
    const contentDiv = document.getElementById('content');

    const sections = {
        about: `
            <h1>About Us</h1>
            <p>Jaguar Corporation integrates cyber security with natural balance.</p>
        `,
        portfolio: `
            <h1>Portfolio</h1>
            <div class="portfolio-item">
                <img src="assets/project1-cover.jpg" alt="Project 1">
                <h2>Project 1</h2>
                <p>Details and <a href="#">documentation</a>.</p>
            </div>
        `,
        contact: `
            <h1>Contact Us</h1>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name">
                <button type="submit">Send</button>
            </form>
        `,
        partners: `
            <h1>Our Partners</h1>
            <p>We collaborate with industry leaders.</p>
        `,
    };

    contentDiv.innerHTML = sections[section] || '<p>Section not found.</p>';
}
