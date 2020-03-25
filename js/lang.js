
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
                "repo": "my repository.",
                "tools":"Skills:",
                "student": "Systems Engineering student at UTN",
                "design-patterns": "Design Patterns",
                "lambda-ex": "Lambda Expressions",
                "padaigms": "Paradigms",
                "class-diagram": "Class Diagram",
                "sequence-diagram": "Sequence Diagram",
                "er-diagram": "ER Diagram",
                "use-case-diagram": "Use Case Diagram"
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
                "p1": "Me gustaría participar de tu proyecto presencial o remoto. Soy Darío y me dedico al desarrollo web. Hice este sitio de cero para mostrarte las cosas que hago y mi vocación por el desarrollo. Más abajo vas a poder encontrar las herramientas que uso y los proyectos en los que participo.",
                "p2": "Brindo valor a la empresa para la que trabajo: me ocupo de entender el dominio, modelar, documentar, analizar alternativas con mis pares, implementar, y realizar pruebas automatizadas. Esto ahorra tiempo y recursos tanto a la empresa como a mí mismo. ",
                "p3": "Compartir ideas me es importante, por eso considero que un trabajo basado en el intercambio de opiniones nos hace bien a todos. Trabajar con otras personas me permite aprender de ellos y mejorar.",
                "p4": "Estoy aprendiendo de a poco front-end, y esta página es una excusa para seguir practicando. No contiene ningún framework porque me propuse aprender lo fundamental de CSS y mantenerme flexible. Si querés ver cómo está hecho, te invito a pasar por ",
                "alert-responsive": "Este sitio es responsive. ¡Abrilo donde quieras!",
                "hey": "Hola!",
                "repo":"mi repositorio.",
                "tools":"Herramientas:",
                "student": "Estudiante de Ingeniería en Sistemas de Información en la UTN",
                "design-patterns": "Patrones de Diseño",
                "lambda-ex": "Expresiones Lambda",
                "padaigms": "Paradigmas",
                "class-diagram": "Diagrama de Clases",
                "sequence-diagram": "Diagrama de Secuencia",
                "er-diagram": "Diagrama de Entidad Relación",
                "use-case-diagram": "Diagrama de Casos de Uso",
                "oop":"Orientado a Objectos",
                "func":"Funcional",
                "imperative":"Imperativo",
                "logic":"Lógico"
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