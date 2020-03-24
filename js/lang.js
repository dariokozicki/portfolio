
const translations = {
    lng: 'es',
    debug: false,
    resources: {
        en: {
            translation: {
                "about-title": "About",
                "about-reference": "About",
                "projects-title": "Projects",
                "projects-reference": "Projects",
                "start": "Home",
                "language": "English",
                "cv-text": "Curriculum",
                "dario": "Darío Kozicki",
                "fullstack-dev": "Fullstack Development.",
                "design":"Design.",
                "solutions":"Elegant Solutions.",
                "personal-portfolio": "Personal Portfolio",
                "light-mode": "Light Mode",
                "dark-mode": "Dark Mode"
            }
        },
        es: {
            translation: {
                "about-title": "Acerca de",
                "about-reference": "Acerca de",
                "projects-title": "Proyectos",
                "projects-reference": "Proyectos",
                "start": "Inicio",
                "language": "Español",
                "cv-text": "Currículo",
                "dario": "Darío Kozicki",
                "personal-portfolio": "Portfolio Personal",
                "fullstack-dev": "Desarrollo Fullstack.",
                "design":"Diseño.",
                "solutions":"Soluciones a medida.",
                "light-mode": "Modo Claro",
                "dark-mode": "Modo Oscuro"
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
        if (document.getElementById(phrase))  
            document.getElementById(phrase).innerHTML = i18next.t(phrase);
    });
}