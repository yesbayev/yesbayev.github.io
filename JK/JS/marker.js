
// Метки
// поиск элементов tab
const markerBtn   = document.querySelectorAll(".marker")
const month_1 = document.querySelectorAll(".month")

markerBtn.forEach(onMarkerClick);
// главная function
function onMarkerClick(item) {
    item.addEventListener("click", function() {
        let currentMarkerBtn = item;
        let currentMarkerTab = item;
        // let tabId = currentMarkerBtn.getAttribute("data-tab")
        // let currentTab = document.querySelector(tabId)

        if( ! currentMarkerBtn.classList.contains('active') ) {
            markerBtn.forEach(function(item) {
                item.classList.remove('active')
            });
    
            month_1.forEach(function(item) {
                item.classList.remove('active')
            });
    
            currentMarkerBtn.classList.add('active')
            currentMarkerTab.classList.add('active')
        }
    });
}

document.querySelector('.marker').click()
// Метки