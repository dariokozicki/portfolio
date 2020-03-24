
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
                "dark-mode": "Dark Mode",
                "p1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac cursus sapien. Aliquam id ullamcorper erat, tempor luctus nibh. Sed at arcu lectus. Nullam viverra eu nibh quis sagittis. Nullam lobortis velit vel ligula pretium cursus. Praesent eget faucibus urna. Praesent lacus metus, accumsan a venenatis lobortis, tincidunt in augue.",
                "p2": "Proin ac erat non dui fringilla finibus. Phasellus vel auctor metus. Phasellus et odio pretium, consectetur erat in, mollis lectus. Aliquam vel justo ac eros facilisis varius. In rutrum, tortor eu mollis vulputate, ante arcu accumsan enim, et placerat velit risus sed enim. Nam eu lorem at magna facilisis rutrum. Quisque sed scelerisque lacus.",
                "p3": "Praesent efficitur metus a massa sodales sollicitudin. Aenean quam nunc, venenatis sed lacus quis, consequat feugiat nibh. Duis sed dictum felis. Ut nulla enim, feugiat vitae dui eu, consequat condimentum ipsum. Maecenas nec sagittis lectus, id mattis tellus. Pellentesque congue cursus lacus in tincidunt. Vivamus vel ornare mi, scelerisque pellentesque turpis. ",
                "p4": "Donec feugiat, erat a luctus pretium, quam quam vulputate sapien, sit amet consequat ipsum leo vel nisi. Aenean imperdiet massa leo, in pellentesque est cursus sed. Donec pretium eget augue at lacinia. Etiam ultrices, purus nec vehicula porttitor, purus justo convallis sapien, ut volutpat dolor risus in quam. Proin felis felis, convallis sed convallis non, tristique vitae ex. "
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
                "dark-mode": "Modo Oscuro",
                "p1": "Nam non rhoncus sem. Mauris scelerisque non felis in condimentum. In malesuada quam in arcu mattis tincidunt. Suspendisse potenti. Nam congue, tellus vel porttitor ornare, leo nisl molestie ipsum, nec mattis tellus nunc vitae enim. Curabitur placerat vulputate tortor vel consectetur. Mauris eget lacus lorem. Nulla tempus neque eu auctor dignissim.",
                "p2": "Nulla pharetra erat in lectus suscipit dictum. Mauris venenatis lorem at ante aliquam lacinia. Etiam elementum lorem et lectus tempus pretium. Nunc ut feugiat leo, sed rutrum est. Praesent ac pretium turpis. Integer iaculis ligula magna, vitae commodo massa rhoncus ut. Suspendisse vestibulum sodales suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "p3": "Cras ut mauris at risus pulvinar ultricies. Ut consectetur volutpat neque, in scelerisque felis pretium quis. Suspendisse potenti. Donec convallis auctor neque vitae pretium. Cras rhoncus vulputate quam, id ullamcorper ligula eleifend sit amet. Phasellus congue vulputate orci, viverra egestas ipsum sagittis a. Vestibulum diam mi, suscipit quis fermentum ac, vulputate ac magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
                "p4": "Nunc pretium tempus ligula quis bibendum. In hac habitasse platea dictumst. Aliquam interdum volutpat massa at accumsan. Nunc pulvinar vel libero vel dictum. Sed eget pellentesque mauris. Cras sodales, ante sed fermentum aliquam, leo quam pulvinar justo, quis laoreet leo ligula consectetur justo. Sed dictum feugiat nulla et vulputate."
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