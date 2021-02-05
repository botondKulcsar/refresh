const openModalBtn = document.querySelector('#open-modal');

openModalBtn.addEventListener('click', () => {
    document.querySelector('#overlay').style.display = 'block';
})

const closeModalBtn = document.getElementById('close-modal');

closeModalBtn.addEventListener('click', () => {
    document.querySelector('#overlay').style.display = 'none';
})