const Metadata = require('../src/Metadata.js')
const Token = require('../src/Token.js')
const { CAR_LAYOUT } = require('../src/Layout.js')
const fs = require('fs')
const crypto = require('crypto');

// Function to generate unique tokens
function generateUniqueTokens(count) {
    const tokens = new Set();

    while (tokens.size < count) {
        // Generate a random serial number for the token
        const serialNumber = crypto.randomInt(1, 100); // Adjust the range as needed

        // Example metadata - you can customize this as per your requirements
        const core = {
            serialNumber: serialNumber.toString(),
            item: crypto.randomInt(1, 5).toString(), // Random item ID
            appearance: crypto.randomInt(1, 100).toString(), // Random appearance ID
            power: crypto.randomInt(1, 1000).toString(),
            accuracy: crypto.randomInt(1, 1000).toString(),
            spin: crypto.randomInt(1, 1000).toString(),
            recovery: crypto.randomInt(1, 1000).toString(),
            durability: crypto.randomInt(1, 1000).toString(),
            weight: crypto.randomInt(1, 20).toString(), // Random weight
            model: crypto.randomInt(1, 36).toString(),
            rarity: crypto.randomInt(1, 6).toString(),
            brand: crypto.randomInt(1, 36).toString(),
            flex: crypto.randomInt(1, 36).toString(),
            loft: crypto.randomInt(1, 36).toString(),
            material: crypto.randomInt(1, 36).toString(),
            type: "1",
            nfFlag: "1" // Example flag
        };

        // Create a new token from metadata

        const token = Token.fromMetadata(core, CAR_LAYOUT);

        const tokenID = token.getTokenID().toString(10)
        console.log(tokenID);
        // Check if the token ID is already in the set
        if (!tokens.has(tokenID)) {
            tokens.add(token); // Add the token ID to the set if it's unique
        }
    }

    return Array.from(tokens);
}

// Generate 100 unique tokens
const uniqueTokens = generateUniqueTokens(100);
uniqueTokens.map((token) => {
    const metadata = new Metadata(token).toJSON();
    fs.writeFileSync(`${token.getTokenID().toString(10)}.json`, JSON.stringify(metadata))
    console.log('on process: ', token.getTokenID().toString(10))
})
console.log(uniqueTokens);