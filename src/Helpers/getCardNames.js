async function getCardNames(requestURL, setCardNames) {
    // Get all the unique card names
    const res = await fetch(requestURL)
    const cardNames = await res.json()
    console.log(cardNames)
    setCardNames(cardNames)
}

export default getCardNames