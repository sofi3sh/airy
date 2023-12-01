const retry = document.querySelector('.js-retryButton');
retry.addEventListener('click', retryPage);
function retryPage () {
    location.reload();
}
function createIndexHandlers(titleClass, sectionClass, chevronClass, contentClass) {
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

const error = createIndexHandlers('.js-title-errorsFound', '.js-section-errorsFound', '.js-chevron-errors', '.js-content-errorsFound');
const ok = createIndexHandlers('.js-title-ok', '.js-section-ok', '.js-chevron-ok', '.js-content-ok');
const warn = createIndexHandlers('.js-title-warn', '.js-section-warn', '.js-chevron-warn', '.js-content-warn');
