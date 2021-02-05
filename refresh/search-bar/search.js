const searchInput = document.getElementById('searchInput');


searchInput.addEventListener('keyup', event => {

    let searchQuery = event.target.value.toLowerCase();
    // console.log(searchQuery);

    // let test = input.value.toLowerCase();
    // console.log(test)

    let allNamesDOMCollection = document.querySelectorAll('.name');

    allNamesDOMCollection.forEach(el => {
        const currentName = el.textContent.toLowerCase();
        // if currentName includes the searchQuery we display the name (blokc) otherwise we hide it.
        // currentName.includes(searchQuery) ? el.style.display = 'block' : el.style.display = 'none';
        el.style.display = currentName.includes(searchQuery) ? 'block' : 'none';
    })



})