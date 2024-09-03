
function generateContext(myLinks) {
    linkButtons(myLinks);
    linkbar(myLinks);
    return;
}

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

function linkbar(myLinks) {
    let results = '';

    myLinks.forEach((linked) => {
        if (linked.followbar === true) {
            results += `
                <a href="${linked.url}" target="_blank">
                    <i class="${linked.icon}"></i>
                </a>
            `;
        }
    });

    const linksBarHTML = `
        ${results}
    `;

    return document.querySelector('.social-icons').innerHTML = linksBarHTML;
}
