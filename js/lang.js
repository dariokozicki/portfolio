
const langs = ["en", "es"];

const defaultLang = localStorage.getItem("lang")
    || (tmp = langs[0], localStorage.setItem('lang', tmp), tmp);

const translations = {
    lng: defaultLang,
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
                "design": "Design.",
                "solutions": "Elegant Solutions.",
                "personal-portfolio": "Welcome to my Portfolio!",
                "light-mode": "Light Mode",
                "dark-mode": "Dark Mode",
                "p1": "I would love to participate in <h4 class='emphasis'>your project</h4>, remotely or otherwise. My name is Darío, and I'm a <h4 class='emphasis'>web developer</h4> living in Buenos Aires, Argentina. I made this site from scratch to show you the things I do and my vocation for coding. <h4 class='emphasis'>Further down you'll see the skill set I have</h4> and the projects I participate in.",
                "p2": "I provide value for the company I work: I focus on understanding the domain, model, implement, and develop automated tests, saving both the company and I of valuable time and resources.",
                "p3": "I value sharing ideas: I learn and apply myself by working with others.",
                "p4": "I'm learning bit by bit front-end, and this site is an excuse to keep on learning. It doesn't contain any framework because I set myself up to learn the CSS fundamentals and keep it flexible. If you'd like to see the source code, you're welcome to search through ",
                "alert-responsive": "This site is responsive. Use it on any devices!",
                "hey": "Hey!",
                "repo": "my repository.",
                "tools": "Skills:",
                "student": "Systems Engineering student at UTN",
                "design-patterns": "Design Patterns",
                "lambda-ex": "Lambda Expressions",
                "paradigms": "Paradigms",
                "class-diagram": "Class Diagram",
                "sequence-diagram": "Sequence Diagram",
                "er-diagram": "ER Diagram",
                "use-case-diagram": "Use Case Diagram",
                "contact": "CONTACT",
                "oop": "Object Oriented",
                "func": "Functional",
                "imperative": "Imperative",
                "logic": "Logical",
                "studies": "Studies",
                "backend": "Backend",
                "frontend": "Frontend",
                "bachiller": "High School Diploma in Computer Science",
                "codoacodo": "'Codo a Codo' Java certificate",
                "uml-complete": "UML (Class, Use Case, ER, and Sequence diagrams)",
                "paradigms-complete": "Paradigms (Object Oriented, Functional, Imperative, Logical)"
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
                "personal-portfolio": "Bienvenido a mi Portfolio!",
                "fullstack-dev": "Desarrollo Fullstack.",
                "design": "Diseño.",
                "solutions": "Soluciones a medida.",
                "light-mode": "Modo Claro",
                "dark-mode": "Modo Oscuro",
                "p1": "Me gustaría participar de <h4 class='emphasis'>tu proyecto</h4> presencial o remoto. Soy Darío y me dedico al <h4 class='emphasis'>desarrollo web</h4>. Hice este sitio de cero para mostrarte las cosas que hago y mi vocación por el desarrollo. Más abajo vas a poder <h4 class='emphasis'>encontrar las herramientas que uso</h4> y los proyectos en los que participo.",
                "p2": "Brindo valor a la empresa para la que trabajo: me ocupo de entender el dominio, modelar, documentar, analizar alternativas con mis pares, implementar, y realizar pruebas automatizadas. Esto ahorra tiempo y recursos tanto a la empresa como a mí mismo. ",
                "p3": "Compartir ideas me es importante. Trabajar con otras personas me permite aprender de ellos y mejorar.",
                "p4": "Estoy aprendiendo de a poco front-end, y esta página es una excusa para seguir practicando. No contiene ningún framework porque me propuse aprender lo fundamental de CSS y mantenerme flexible. Si querés ver cómo está hecho, te invito a pasar por ",
                "alert-responsive": "Este sitio es responsive. ¡Abrilo donde quieras!",
                "hey": "Hola!",
                "repo": "mi repositorio.",
                "tools": "Habilidades:",
                "student": "Estudiante de Ingeniería en Sistemas de Información en la UTN",
                "design-patterns": "Patrones de Diseño",
                "lambda-ex": "Expresiones Lambda",
                "paradigms": "Paradigmas",
                "class-diagram": "Diagrama de Clases",
                "sequence-diagram": "Diagrama de Secuencia",
                "er-diagram": "Diagrama de Entidad Relación",
                "use-case-diagram": "Diagrama de Casos de Uso",
                "oop": "Orientado a Objectos",
                "func": "Funcional",
                "imperative": "Imperativo",
                "logic": "Lógico",
                "contact": "CONTACTO",
                "studies": "Estudios",
                "backend": "Backend",
                "frontend": "Frontend",
                "bachiller": "Bachiller en Informática",
                "codoacodo": "Certificado Java anual 'Codo a Codo'",
                "uml-complete": "UML (Diagrama de Clases, Casos de Uso, Entidad Relación, Secuencia)",
                "paradigms-complete": "Paradigmas (Orientado a Objetos, Funcional, Imperativo, Lógico)"
            }
        }
    }
}

i18next.init(
    translations,
    updateContent
);

document.getElementById("langButton").onclick = function () {
    const nextLang = getNextLanguage();
    localStorage.setItem("lang", nextLang);
    i18next.changeLanguage(nextLang);
}

function getNextLanguage() {
    return langs[
        (langs.indexOf(localStorage.getItem("lang")) + 1)
        % langs.length
    ];
}

i18next.on('languageChanged', () => {
    updateContent();
});

function updateContent() {
    Object.keys(translations.resources.es.translation).forEach(phrase => {
        if (document.getElementById(phrase))
            document.getElementById(phrase).innerHTML = i18next.t(phrase);
        else console.warn("'" + phrase + "' has no i18n defined in the current language!")
    });
}