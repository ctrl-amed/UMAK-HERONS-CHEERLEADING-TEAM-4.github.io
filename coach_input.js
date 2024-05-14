function resizeTextarea() {
    var textarea = document.getElementById("MESSAGE");
    textarea.style.height = "auto";
    textarea.style.height = (textarea.scrollHeight) + "px";
}

// Call resizeTextarea when the textarea is being typed in
document.getElementById("MESSAGE").addEventListener("input", function() {
    resizeTextarea();
    // Add the following line to ensure text wrapping
    this.style.overflowY = "hidden";
});



function resizeTextarea() {
    var textarea = document.getElementById("COMMENT");
    textarea.style.height = "auto";
    textarea.style.height = (textarea.scrollHeight) + "px";
}

// Call resizeTextarea when the textarea is being typed in
document.getElementById("COMMENT").addEventListener("input", function() {
    resizeTextarea();
    // Add the following line to ensure text wrapping
    this.style.overflowY = "hidden";
});
