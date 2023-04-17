function getCardNames(searchTerm, cardNames) {
    let cardNames = cardNames 
    
    // First Determine if we need to get cardNames.
    // Only get card names if search terms is greater thatn 3 and cardNames === null
    if (searchTerm.length > 2 && cardNames === null) {
        // Make a request to the database for card unique card names based on the current searchTerm 
        // cardNames = await DB request
    }

    // If we clear our search term clear our list of names 
    if (searchTerm.length < 3 && cardNames != null) {
        // set cardNames to null
    }

    // Return updated cardNames
    return cardNames

}

export default getCardNames