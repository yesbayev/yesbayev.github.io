// Тabs Ползунок
const tabsApartmentBtn = document.querySelectorAll(".tabs-apartment-btn")
const ApartmentTabs = document.querySelectorAll(".wrap-pick-apartment-tabs")

tabsApartmentBtn.forEach(onTabApartmentClick);
// главная function
function onTabApartmentClick(apartment) {
    apartment.addEventListener("click", function() {
        let currentApartmentBtn = apartment;
        let tabApartmentId = currentApartmentBtn.getAttribute("data-tab")
        let currentApartmentTab = document.querySelector(tabApartmentId)

        if( ! currentApartmentBtn.classList.contains('active') ) {
            tabsApartmentBtn.forEach(function(apartment) {
                apartment.classList.remove('active')
            });
    
            ApartmentTabs.forEach(function(apartment) {
                apartment.classList.remove('active')
            });
    
            currentApartmentBtn.classList.add('active')
            currentApartmentTab.classList.add('active')
        }
    });
}

document.querySelector('.tabs-apartment-btn').click()
// Tabs Ползунок  