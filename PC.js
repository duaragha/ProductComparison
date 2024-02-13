function updateProductList() {
    var collectionSelector = document.getElementById('collectionSelector');
    var selectedCollectionId = collectionSelector.value;
    var productSelector = document.getElementById('productSelector');
    productSelector.innerHTML = '';

    var option = document.createElement('option');
    option.value = "{{ product.id }}";
    option.setAttribute('data-price', "{{ product.price | money }}");
    option.text = "{{ product.title }}";
    productSelector.appendChild(option);

    updateComparison('productSelector', 'comparisonResult');
}

function updateComparison(selectorId, resultContainerId) {
    var selector = document.getElementById(selectorId);
    var selectedIndex = selector.selectedIndex;

    var selectedOption = selector.options[selectedIndex];
    var productId = selectedOption.value;
    var productPrice = selectedOption.getAttribute("data-price");
    var productRes = selectedOption.getAttribute("data-resolution");
    var productDetails = {
        name: selectedOption.text,
        price: productPrice,
        res: productRes,
        image: "product-image.jpg" //need to be updated
    };

    var resultContainer = document.getElementById(resultContainerId);
    resultContainer.innerHTML = `
            <img src="${productDetails.image}" alt="${productDetails.name}">
            <h3>${productDetails.name}</h3>
            <p>${productDetails.price}</p>
            <p>${productDetails.res}</p>`;
}