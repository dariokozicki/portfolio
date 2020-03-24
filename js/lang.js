
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
                "p1": "My name is Darío. I'm a developer and a Systems Engineer student living in Buenos Aires, Argentina. Designing and implementing solutions to other people's needs is my profession. I'm interested in full-time jobs working remotely or mixed.",
                "p2": "I provide value for the company I work for by focusing on understanding the domain, modeling and documenting, implementing, and developing automated tests: saving both the company and I of valuable time and resources. Sharing ideas is important to me; that's why I believe working while exchanging opinions is the way to go. Working with others allows me to learn and apply myself.",
                "p3": "Backend is my strength; I make robust models that satisfy the needs of today and scale tomorrow. Java is my main language, making use of Spring, Spark, Hibernate, Gson and Handlebars. I can also work with JDBC, making queries against (T- / PL- / ) SQL. I provide and consume APIs REST in my projects, although I have used SOAP. OOP and Functional programming are my favorite paradigms, combining design patterns and lambda expressions in my day to day.",
                "p4": "I'm learning bit by bit front-end, and this site is an excuse to keep on learning. It doesn't contain any framework because I set myself up to learn the CSS fundamentals and keep it flexible. I do well on HTML5, CSS, Javascript, and I often make use of libraries such as jQuery, FontAwesome, i18next, and Handlebars for templating. If you'd like to see the source code, you're welcome to search through ",
                "alert-responsive": "This site is responsive. Use it on any devices!",
                "hey": "Hey!",
                "repo": "my repository."
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
                "p1": "Me llamo Darío. Soy un desarrollador y estudiante de Ingeniería en Sistemas, oriundo de Buenos Aires. Me dedico a diseñar y programar soluciones que se ajusten a las necesidades de otros. Estoy interesado en trabajos full-time que tengan algunos días de home office y otros on-site, o que sean remotos con mucha comunicación.",
                "p2": "Brindo valor a la empresa para la que trabajo, ocupándome de entender el dominio, modelando y documentando, analizando la mejor solución con mis pares, implementando, y realizando pruebas automatizadas: ahorrando tiempo y recursos tanto a la empresa como a mí. Compartir ideas me es importante, por eso considero que un trabajo basado en el intercambio de opiniones nos hace bien a todos. Trabajar con otras personas me permite aprender de ellos y mejorar.",
                "p3": "Mi fuerte está en el backend, donde realizo modelos robustos que satisfacen las necesidades de hoy y escalan mañana. Java es mi principal lenguaje, haciendo uso de Spring, Spark, Hibernate, Gson y Handlebars. También sé usar JDBC, realizando queries contra (T- / PL- /- ) SQL. Proveo y consumo APIs REST en mis proyectos, aunque también he usado SOAP. Los paradigmas orientado a objetos y funcional, son los que más me gustan, combinando patrones de diseño con expresiones lambda en mi día a día.    ",
                "p4": "Estoy aprendiendo de a poco front-end, y esta página es una excusa para seguir practicando. No contiene ningún framework porque me propuse aprender lo fundamental de CSS y mantenerme flexible. Me manejo bien en HTML5, CSS, Javascript, y puedo hacer uso de diversas librerías como jQuery, FontAwesome, i18next, y Handlebars para templating. Si querés ver cómo está hecho, te invito a pasar por ",
                "alert-responsive": "Este sitio es responsive. ¡Abrilo donde quieras!",
                "hey": "Hola!",
                "repo":"mi repositorio."
            }
        }
    }
}

i18next.init(
    translations, 
    updateContent
);

let langCounter = 1;
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