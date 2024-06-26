// Rendering cards

// Define a function to create and render a card element for search results
function searchResultsCard(recipe) {
     // Function to capitalize the initials of each word in a string
     function capitalizeInitials(str) {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }
    const card = document.createElement('div');
    card.classList.add('col');
    card.innerHTML = `
    <div class="row justify-content-center" id="cardRow1">
    <div class="card h-100">
        <img src="${recipe.picture}" class="card-img-top" alt="${recipe.title}" style="height: 200px; width: 100%; object-fit: cover;">
        <div class="card-body">
            <h5 class="card-title no-underline" style="font-size: 24px;">${capitalizeInitials(recipe.title)}</h5>
            <p class="card-text" style="font-size: small;">by ${recipe.username}</p>
        </div>
    </div>
</div>
`;
    return card;
}

// Define a function to create and render a card element for category results
function categoryResultsCard(recipe) {
      // Function to capitalize the initials of each word in a string
      function capitalizeInitials(str) {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }
    const card = document.createElement('div');
    card.classList.add('col');
    card.innerHTML = `
    <div class="row justify-content-center" id="cardRow1">
    <div class="card h-100">
        <img src="${recipe.picture}" class="card-img-top" alt="${recipe.title}" style="height: 200px; width: 100%; object-fit: cover;">
        <div class="card-body">
            <h5 class="card-title no-underline" style="font-size: 24px;">${capitalizeInitials(recipe.title)}</h5>
            <p class="card-text" style="font-size: small;">by ${recipe.username}</p>
        </div>
    </div>
</div>
`;
    return card;
}

// Define a function to create and render a card element for all recipes
function allRecipesCard(recipe) {
      // Function to capitalize the initials of each word in a string
      function capitalizeInitials(str) {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }
    const card = document.createElement('div');
    card.classList.add('col');
    card.innerHTML = `
    <div class="row justify-content-center" id="cardRow1">
    <div class="card h-100">
        <img src="${recipe.picture}" class="card-img-top" alt="${recipe.title}" style="height: 200px; width: 100%; object-fit: cover;">
        <div class="card-body">
            <h5 class="card-title no-underline" style="font-size: 24px;">${capitalizeInitials(recipe.title)}</h5>
            <p class="card-text" style="font-size: small;">by ${recipe.username}</p>
        </div>
    </div>
</div>
`;
    return card;
}

// Define a function to create and render a card element for other recipes by the same user in recipePage.html
function otherRecipesbyCards(recipe) {
    // Function to capitalize the initials of each word in a string
    function capitalizeInitials(str) {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }

    // Create the card element
    const card = document.createElement('div');
    card.classList.add('col');
    card.innerHTML = `
        <div class="row justify-content-center" id="cardRow1">
            <div class="card h-100">
                <img src="${recipe.picture}" class="card-img-top" alt="${recipe.title}" style="height: 200px; width: 100%; object-fit: cover;;">
                <div class="card-body">
                    <h5 class="card-title no-underline">${capitalizeInitials(recipe.title)}</h5>
                </div>
            </div>
        </div>
    `;
    return card;
}

  // Export the searchResultsCard function to be used in other modules
  export { searchResultsCard, categoryResultsCard, allRecipesCard, otherRecipesbyCards };
