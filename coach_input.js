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













const stars = document.querySelectorAll(".star");
const output = document.getElementById("output");
let xhr = null; // store the XHR object

// Function to handle click event on stars
stars.forEach((star, index) => {
    star.addEventListener("click", () => {
        rating = index + 1;
        localStorage.setItem('performanceRating', rating);
        updateRating();
    });
});

// Function to update rating display
function updateRating() {
    stars.forEach((star, index) => {
      if (index < rating) {
        star.classList.add('active');
      } else {
        star.classList.remove('active');
      }
    });
    output.textContent = `Rating is: ${rating}/5`;
  }

  let isRequestInProgress = false;
// Event listener for submit button
document.getElementById("submit").addEventListener("click", () => {
    if (rating === 0) {
        alert("Please select a rating before submitting.");
        return;
    }
    if (isRequestInProgress) {
        return; // prevent duplicate submissions
    }
    isRequestInProgress = true;
    if (xhr) { // cancel previous fetch request
        xhr.abort();
    }
    xhr = sendRatingToServer(rating);
    updateRatingDisplay(0);
    this.disabled = true; // disable the submit button
});

// Function to send rating to the server using fetch API
async function sendRatingToServer(rating) {
    try {
        const response = await fetch("coach_input_to_member_attend.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `rating=${encodeURIComponent(rating)}`
        });

        if (!response.ok) {
            throw new Error(`Request failed.  Returned status of ${response.status}`);
        }

        // Handle the response here

    } catch (error) {
        console.error(error);
    } finally {
        isRequestInProgress = false; // reset the flag
        this.disabled = false; // re-enable the submit button
    }
}









