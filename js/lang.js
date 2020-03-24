
const translations = {
    lng: 'es',
    debug: false,
    resources: {
        en: {
            translation: {
                "about-text": "About",
                "projects": "Projects",
                "start": "Home",
                "language": "English",
                "cv-text": "Curriculum"
            }
        },
        es: {
            translation: {
                "about-text": "Acerca de",
                "projects": "Proyectos",
                "start": "Inicio",
                "language": "Español",
                "cv-text": "Currículo"
            }
        }
    }
}

i18next.init(
    translations, 
    updateContent
);

var langCounter = 1;
const langs = ["en", "es"];

document.getElementById("langButton").onclick = function(){
    langCounter = (langCounter + 1) % langs.length;
    i18next.changeLanguage(langs[langCounter]);
}

i18next.on('languageChanged', () => {
    updateContent();
});

function updateContent(){
    Object.keys(translations.resources.es.translation).forEach( phrase => {
        document.getElementById(phrase).innerHTML = i18next.t(phrase);
    });
}