
function toggleCollapse(idOfCollapsed, idOfbutton) {
    let collapserClass = document.getElementById(idOfCollapsed).classList;
    let button = document.getElementById(idOfbutton).classList;
    if (collapserClass.contains("hidden")) {
        collapserClass.remove("hidden")
        button.remove("fa-angle-right");
    } else {
        collapserClass.add("hidden");
        button.add("fa-angle-right");
    }
}