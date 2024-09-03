// Your React-style JSON object with all the links
const myLinks = [{
    "name": "OnlyFans",
    "url": "https://onlyfans.com/emokitten_xoxo/c17",
    "icon": "fa-solid fa-pepper-hot",
    "image": "OnlyFans.jpg"
}, {
    "name": "Tik Tok",
    "url": "https://www.tiktok.com/@emokitten_xoxo",
    "icon": "fab fa-tiktok",
    "image": "TikTok.jpg"
}, {
    "name": "Instagram",
    "url": "https://www.instagram.com/emokitten_xoxo/",
    "icon": "fab fa-instagram",
    "image": "Instagram.jpg"
}, {
    "name": "Twitter",
    "url": "https://twitter.com/emokitten_xoxo",
    "icon": "fab fa-twitter",
    "image": "Twitter.jpg"
}, {
    "name": "Discord",
    "url": "https://discord.gg/bBgkxS266t",
    "icon": "fab fa-discord",
    "image": "Discord.jpg"
}, {
    "name": "Twitch",
    "url": "https://www.twitch.tv/emokitten_xoxo",
    "icon": "fab fa-twitch",
    "image": "Twitch.jpg"
}];

// Function to generate link buttons dynamically
function generateLinkButtons() {
    const linksSection = document.querySelector('.links-section');
    const linksList = document.createElement('div');
    linksList.className = 'links-list';

    myLinks.forEach(link => {
        const linkButton = document.createElement('a');
        linkButton.href = link.url;
        linkButton.target = '_blank';
        linkButton.className = 'link-button';

        const imgLeft = document.createElement('img');
        imgLeft.src = link.image;
        imgLeft.alt = link.name;
        imgLeft.className = 'link-image';

        const titleMiddle = document.createElement('span');
        titleMiddle.textContent = link.name;
        titleMiddle.className = 'link-title';

        const iconRight = document.createElement('i');
        iconRight.className = link.icon + ' link-icon';

        linkButton.appendChild(imgLeft);
        linkButton.appendChild(titleMiddle);
        linkButton.appendChild(iconRight);

        linksList.appendChild(linkButton);
    });

    linksSection.appendChild(linksList);
}

// Call the function to build the links on page load
generateLinkButtons();
