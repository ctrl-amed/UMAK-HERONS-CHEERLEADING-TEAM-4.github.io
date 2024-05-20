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









let stars = document.querySelectorAll(".star");
let output = document.getElementById("output");

stars.forEach(star => {
    star.addEventListener("click", () => {
        const rating = parseInt(star.getAttribute("data-value"));
        localStorage.setItem('performanceRating', rating);

    });
});

function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    output.innerText = "Rating is: " + n + "/5";
}

// To remove the pre-applied styling
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}

let initialRating = localStorage.getItem('performanceRating') || 0;
updateRatingDisplay(initialRating);

document.getElementById("submitBtn").addEventListener("click", () => {
    if (!userRating) {
        alert(
"Please select a rating before submitting."
             );
        return;
    }
    if (userRating > 0) {
        rating.innerText = "0";
        stars.forEach((s) => s.classList.remove("one", 
                                                "two", 
                                                "three", 
                                                "four", 
                                                "five", 
                                                "selected"));
    }
});









