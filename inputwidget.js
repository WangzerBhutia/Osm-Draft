const createInput = (root) => {
    let input='';
    for(let i=0; i<9; i++) {
        input = input + `<input class="input is-dark is-normal is-rounded " type="text" placeholder="Manager name"/>`;
    }
    root.innerHTML = input;
}

const clearInput = (items) => {
    for(let item of items){
        if(item.value){
            item.value = '';
        }
    }
}