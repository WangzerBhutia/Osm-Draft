const nameSpace = document.querySelector('.namespace');
const submitButton = document.querySelector('#generate');
const result = document.querySelector('.result');
const resetButton = document.querySelector('#reset');

result.innerHTML = '';

submitButton.addEventListener('click', ()=> {
    const items = document.querySelectorAll('.input');
    const playerNames = [];
    for( let item of items) {
        if(item.value) {
            playerNames.push(item.value);  
        }
    }
    if(playerNames.length === 0) {
       return;
    }
    else {
        nameSpace.classList.add('is-hidden');
        submitButton.classList.add('is-hidden');
        const draftOrder = generateOrder(playerNames);
        result.innerHTML = displayResult(draftOrder);
   }
});

resetButton.addEventListener('click', () => {
    nameSpace.classList.remove('is-hidden');
    submitButton.classList.remove('is-hidden');
    const values = document.querySelectorAll('.input');
    clearInput(values);
    resetButton.classList.add('is-hidden');
    result.innerHTML = '';
});

const displayResult = (order) => {
    let renderedOutput = '';
    for(let i=0; i<order.length; i++) {
        renderedOutput += `
            <article class="notification is-link is-half">
            <p class="title">${order[i]}</p>
            <p class="subtitle">Pick #${i+1}</p>
            </article>
            `;
    }
    resetButton.classList.remove('is-hidden');
    return renderedOutput;
}

createInput(nameSpace);