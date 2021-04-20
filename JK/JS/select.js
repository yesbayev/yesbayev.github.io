//  Select
document.querySelector('.building-select').addEventListener('click', () => {
    let data = document.querySelector('.building-select').value;
    document.querySelector('.out-10').innerHTML = data;
    // document.querySelector('.s-10').value = 'winamp';
});
//  Select