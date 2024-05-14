// Function for the first gallery
function showImage(fullImagePath, mainImageId, mainImageContainerId) {
  var mainImage = document.getElementById(mainImageId);
  var mainImageContainer = document.getElementById(mainImageContainerId);

  // Set the source of the main image
  mainImage.src = fullImagePath;

  // Display the main image
  mainImage.style.display = 'block';


}

// Function for the second gallery
function showImage2(fullImagePath, mainImageId, mainImageContainerId) {
  var mainImage = document.getElementById(mainImageId);
  var mainImageContainer = document.getElementById(mainImageContainerId);

  // Set the source of the main image
  mainImage.src = fullImagePath;

  // Display the main image
  mainImage.style.display = 'block';


}