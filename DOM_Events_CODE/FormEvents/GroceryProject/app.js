// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');


form.addEventListener("submit",function(e){
    e.preventDefault();
    const productForm = form.elements.product.value;
    const quantityForm = form.elements.qty.value;
    const lstContainer = document.querySelector('#list');
    const list = document.createElement('li');
    list.append(`${productForm} ${quantityForm}`)
    console.log(list);
    lstContainer.append(list)
    form.elements.product.value="";
    form.elements.qty.value = "";
    
})
