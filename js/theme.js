const themeMap = {
    dark: "light",
    light: "dark"
}

const theme = localStorage.getItem('theme')
  || (tmp = Object.keys(themeMap)[0], localStorage.setItem('theme', tmp), tmp);
document.getElementById(themeMap[theme] + "-mode").classList.add("hidden");

const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  const current = localStorage.getItem('theme');
  const next = themeMap[current];
  bodyClass.replace(current, next);
  document.getElementById(current + "-mode").classList.add("hidden");
  document.getElementById(next + "-mode").classList.remove("hidden");
  localStorage.setItem('theme', next);
}

document.getElementById('themeButton').onclick = toggleTheme;