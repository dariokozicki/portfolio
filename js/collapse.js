
function toggleCollapse(idOfCollapsed) {
    let collapserClass = document.getElementById(idOfCollapsed).classList;
    if (collapserClass.contains("hidden")) {
        collapserClass.remove("hidden")
    } else {
        collapserClass.add("hidden");
    }
}