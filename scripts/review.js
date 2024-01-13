function toggleDisplay(id, id_btn, object_name) {
    element = document.getElementById(id);
    button = document.getElementById(id_btn);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
        button.value = `Hide ${object_name}`;
    } else {
        element.classList.add('hidden');
        button.value = `Show ${object_name}`;
    }
}
