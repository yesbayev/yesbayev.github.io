
// Тabs years
// поиск элементов tab
const tabsYearsBtn   = document.querySelectorAll(".tabs-building-year")
const tabsYearsContent = document.querySelectorAll(".building-tab-block")

tabsYearsBtn.forEach(onYearClick);
// главная function
function onYearClick(year) {
    year.addEventListener("click", function() {
        let currentYearsBtn = year;
        let tabYearsId = currentYearsBtn.getAttribute("data-tab")
        let currentYearsTab = document.querySelector(tabYearsId)

        if( ! currentYearsBtn.classList.contains('active') ) {
            tabsYearsBtn.forEach(function(year) {
                year.classList.remove('active')
            });
    
            tabsYearsContent.forEach(function(year) {
                year.classList.remove('active')
            });
    
            currentYearsBtn.classList.add('active')
            currentYearsTab.classList.add('active')
        }
    });
}

document.querySelector('.tabs-building-year').click()
// Tabs year