document.addEventListener("DOMContentLoaded", function () {
    var numCollections = 4;

    var collectionDropdowns = [];
    var productSelections = [];
    var productDropdowns = [];

    for (var i = 1; i <= numCollections; i++) {
        collectionDropdowns[i] = document.getElementById('collectionSelector' + i);
        productSelections[i] = document.getElementById('productSelection' + i);
        productDropdowns[i] = document.getElementById('productSelector' + i);

        addCollectionChangeListener(i);
    }

    function addCollectionChangeListener(index) {
        collectionDropdowns[index].addEventListener("change", function () {
            var selectedCollectionHandle = this.value;
            productSelections[index].style.display = selectedCollectionHandle ? 'block' : 'none';
            productDropdowns[index].innerHTML = '<option value="" selected disabled>Select a Product</option>';

            {% for collection in collections %}
            if ("{{ collection.handle }}" === selectedCollectionHandle) {
                {% for product in collection.products %}
                var option = document.createElement('option');
                option.value = "{{ product.handle }}";
                option.text = "{{ product.title | truncate 40}}";
                productDropdowns[index].appendChild(option);
                {% endfor %}
            }
            {% endfor %}
        });
    }
});