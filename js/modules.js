const back = document.querySelector('.js-back');
back.addEventListener('click', goBack);

function goBack() {
    window.history.back();
}
function createModulesHandlers(titleClass, sectionClass, chevronClass, contentClass) {
    const section = {
        SectionTitle: document.querySelector(titleClass),
        Section: document.querySelector(sectionClass),
        Chevron: document.querySelector(chevronClass),
        Content: document.querySelector(contentClass),
    };

    section.SectionTitle.addEventListener('click', () => {
        section.Content.classList.toggle('sectionContent-hide');
        section.Chevron.classList.toggle('chevron-active');
        section.Section.classList.toggle('section-hide');
    });

    return section;
}

const deflt = createModulesHandlers('.js-title-default', '.js-section-default', '.js-chevron-default', '.js-content-default');
const additional = createModulesHandlers('.js-title-additional', '.js-section-additional', '.js-chevron-additional', '.js-content-additional');
