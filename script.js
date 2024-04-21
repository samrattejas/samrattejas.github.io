function updateText(dropdownId, textId) {
    var dropdown = document.getElementById(dropdownId);
    var text = dropdown.options[dropdown.selectedIndex].value;
    document.getElementById(textId).innerText = text;
}

function copyToClipboard(element) {
    var text = document.querySelector(element).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    alert('Text copied to clipboard');
}
