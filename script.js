
function linkButtons(myLinks) {
    let results = '';

    myLinks.forEach((linked) => {
        results += `
            <a href="${linked.url}" target="_blank" class="link-button">
                <img src="./content/${linked.image}" alt="${linked.name}" class="link-image">
                <span class="link-title">${linked.name}</span>
                <i class="${linked.icon}"></i>
            </a>
        `;
    });

    const linksHTML = `
        <div class="links-list">
            ${results}
        </div>
    `;

    return document.querySelector('.theLinks').innerHTML = linksHTML;
}

//export default linkButtons;
