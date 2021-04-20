    //  Цена
const sliderCostStudio = document.getElementById('main-slider-cost');

if (sliderCostStudio) {
    noUiSlider.create(sliderCostStudio, {
        start: [38598120, 93571920],
        connect: true,
        step: 1,
        range: {
            'min': [38598120],
            'max': [93571920]
        }
    });

    const cost0 = document.getElementById('input-cost-studio-0');
    const cost1 = document.getElementById('input-cost-studio-1');
    const costs = [cost0, cost1];

    sliderCostStudio.noUiSlider.on('update', function (values, handle) {
		costs[handle].value = Math.round(values[handle]);
    });

    const setSliderCostStudio = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		console.log(arr);

		sliderCostStudio.noUiSlider.set(arr);
	};

	costs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			console.log(index);
			setSliderCostStudio(index, e.currentTarget.value);
		});
	});
}

    // Площадь
const sliderSquareStudio = document.getElementById('main-slider-square');

if (sliderSquareStudio) {
    noUiSlider.create(sliderSquareStudio, {
        start: [70, 236],
        connect: true,
        step: 1,
        range: {
            'min': [70],
            'max': [236]
        }
    });

    const square0 = document.getElementById('input-square-studio-0');
    const square1 = document.getElementById('input-square-studio-1');
    const squareS = [square0, square1];

    sliderSquareStudio.noUiSlider.on('update', function (values, handle) {
		squareS[handle].value = Math.round(values[handle]);
    });

    const setSliderSquareStudio = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		console.log(arr);

		sliderSquareStudio.noUiSlider.set(arr);
	};

	squareS.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			console.log(index);
			setSliderSquareStudio(index, e.currentTarget.value);
		});
	});
}

    //  Этаж
const sliderFloorStudio = document.getElementById('main-slider-floor');

if (sliderFloorStudio) {
    noUiSlider.create(sliderFloorStudio, {
        start: [1, 17],
        connect: true,
        step: 1,
        range: {
            'min': [1],
            'max': [17]
        }
    });

    const floor0 = document.getElementById('input-floor-studio-0');
    const floor1 = document.getElementById('input-floor-studio-1');
    const floor = [floor0, floor1];

    sliderFloorStudio.noUiSlider.on('update', function (values, handle) {
		floor[handle].value = Math.round(values[handle]);
    });

    const setSliderFloorStudio = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		console.log(arr);

		sliderFloorStudio.noUiSlider.set(arr);
	};

	floor.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			console.log(index);
			setSliderFloorStudio(index, e.currentTarget.value);
		});
	});
}





// // Ползунок
// //Студия
// //  1
// let sliderCostStudio = document.getElementById("slider-cost-studio")
// let inputCostStudio = document.getElementById("input-cost-studio")

// function StudioCostInput(){
//     sliderCostStudio.value = inputCostStudio.value
// }

// inputCostStudio.addEventListener("change",StudioCostInput)


// function StudioCostSlider(){
//     inputCostStudio.value = sliderCostStudio.value
// }

// sliderCostStudio.addEventListener("change",StudioCostSlider)
// //  1


// //  2
// let sliderSquareStudio=document.getElementById("slider-square-studio")
// let inputSquareStudio=document.getElementById("input-square-studio")

// function StudioSquareInput(){
//     sliderSquareStudio.value=inputSquareStudio.value
// }

// inputSquareStudio.addEventListener("change",StudioSquareInput)

// function StudioSquareSlider(){
//     inputSquareStudio.value=sliderSquareStudio.value
// }

// sliderSquareStudio.addEventListener("change",StudioSquareSlider)
// //  2


// //  3
// let sliderFloorStudio=document.getElementById("slider-floor-studio")
// let inputFloorStudio=document.getElementById("input-floor-studio")

// function StudioFloorInput(){
//     sliderFloorStudio.value=inputFloorStudio.value
// }

// inputFloorStudio.addEventListener("change",StudioFloorInput)

// function StudioFloorSlider(){
//     inputFloorStudio.value=sliderFloorStudio.value
// }

// sliderFloorStudio.addEventListener("change",StudioFloorSlider)
// //  3
// //Студия


//  1 комнатная
//  1
let sliderCostApartment_1=document.getElementById("slider-cost-apartment-1")
let inputCostApartment_1=document.getElementById("input-cost-apartment-1")

function ApartmentCostInput_1(){
    sliderCostApartment_1.value=inputCostApartment_1.value
}

inputCostApartment_1.addEventListener("change",ApartmentCostInput_1)

function ApartmentCostSlider_1(){
    inputCostApartment_1.value=sliderCostApartment_1.value
}

sliderCostApartment_1.addEventListener("change",ApartmentCostSlider_1)
//  1


//  2
let sliderSquareApartment_1=document.getElementById("slider-square-apartment-1")
let inputSquareApartment_1=document.getElementById("input-square-apartment-1")

function ApartmentSquareInput_1(){
    sliderSquareApartment_1.value=inputSquareApartment_1.value
}

inputSquareApartment_1.addEventListener("change",ApartmentSquareInput_1)

function ApartmentSquareSlider_1(){
    inputSquareApartment_1.value=sliderSquareApartment_1.value
}

sliderSquareApartment_1.addEventListener("change",ApartmentSquareSlider_1)
//  2


//  3
let sliderFloorApartment_1=document.getElementById("slider-floor-apartment-1")
let inputFloorApartment_1=document.getElementById("input-floor-apartment-1")

function ApartmentFloorInput_1(){
    sliderFloorApartment_1.value=inputFloorApartment_1.value
}

inputFloorApartment_1.addEventListener("change",ApartmentFloorInput_1)

function ApartmentFloorSlider_1(){
    inputFloorApartment_1.value=sliderFloorApartment_1.value
}

sliderFloorApartment_1.addEventListener("change",ApartmentFloorSlider_1)
//  3
//  1 комнатная


//  2 комнатная
//  1
let sliderCostApartment_2=document.getElementById("slider-cost-apartment-2")
let inputCostApartment_2=document.getElementById("input-cost-apartment-2")

function ApartmentCostInput_2(){
    sliderCostApartment_2.value=inputCostApartment_2.value
}

inputCostApartment_2.addEventListener("change",ApartmentCostInput_2)

function ApartmentCostSlider_2(){
    inputCostApartment_2.value=sliderCostApartment_2.value
}

sliderCostApartment_2.addEventListener("change",ApartmentCostSlider_2)
//  1


//  2
let sliderSquareApartment_2=document.getElementById("slider-square-apartment-2")
let inputSquareApartment_2=document.getElementById("input-square-apartment-2")

function ApartmentSquareInput_2(){
    sliderSquareApartment_2.value=inputSquareApartment_2.value
}

inputSquareApartment_2.addEventListener("change",ApartmentSquareInput_2)

function ApartmentSquareSlider_2(){
    inputSquareApartment_2.value=sliderSquareApartment_2.value
}

sliderSquareApartment_2.addEventListener("change",ApartmentSquareSlider_2)
//  2


//  3
let sliderFloorApartment_2=document.getElementById("slider-floor-apartment-2")
let inputFloorApartment_2=document.getElementById("input-floor-apartment-2")

function ApartmentFloorInput_2(){
    sliderFloorApartment_2.value=inputFloorApartment_2.value
}

inputFloorApartment_2.addEventListener("change",ApartmentFloorInput_2)

function ApartmentFloorSlider_2(){
    inputFloorApartment_2.value=sliderFloorApartment_2.value
}

sliderFloorApartment_2.addEventListener("change",ApartmentFloorSlider_2)
//  3
//  2 комнатная


//  3 комнатная
//  1
let sliderCostApartment_3=document.getElementById("slider-cost-apartment-3")
let inputCostApartment_3=document.getElementById("input-cost-apartment-3")

function ApartmentCostInput_3(){
    sliderCostApartment_3.value=inputCostApartment_3.value
}

inputCostApartment_3.addEventListener("change",ApartmentCostInput_3)

function ApartmentCostSlider_3(){
    inputCostApartment_3.value=sliderCostApartment_3.value
}

sliderCostApartment_3.addEventListener("change",ApartmentCostSlider_3)
//  1


//  2
let sliderSquareApartment_3=document.getElementById("slider-square-apartment-3")
let inputSquareApartment_3=document.getElementById("input-square-apartment-3")

function ApartmentSquareInput_3(){
    sliderSquareApartment_3.value=inputSquareApartment_3.value
}

inputSquareApartment_3.addEventListener("change",ApartmentSquareInput_3)

function ApartmentSquareSlider_3(){
    inputSquareApartment_3.value=sliderSquareApartment_3.value
}

sliderSquareApartment_3.addEventListener("change",ApartmentSquareSlider_3)
//  2


//  3
let sliderFloorApartment_3=document.getElementById("slider-floor-apartment-3")
let inputFloorApartment_3=document.getElementById("input-floor-apartment-3")

function ApartmentFloorInput_3(){
    sliderFloorApartment_3.value=inputFloorApartment_3.value
}

inputFloorApartment_3.addEventListener("change",ApartmentFloorInput_3)

function ApartmentFloorSlider_3(){
    inputFloorApartment_3.value=sliderFloorApartment_3.value
}

sliderFloorApartment_3.addEventListener("change",ApartmentFloorSlider_3)
//  3
//  3 комнатная




// Ползунок