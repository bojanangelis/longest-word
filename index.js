function findLongestWord(sentence) {
    // Helper function to count the number of vowels in a word
    const countVowels = (word) => {
        return Array.from(word).reduce((acc, char) => 
            'aeiou'.includes(char) ? acc + 1 : acc, 0);
    };

    // Removing any character that's not a lowercase letter or a space.
    const cleanedSentence = sentence.replace(/[^a-z\s]/g, '');

    // Split the cleaned sentence into words
    const words = cleanedSentence.split(' ');

    return words.reduce((acc, word) => {
        // If the word is longer than the accumulated word, return it
        if (word.length > acc.length) {
            return word;
        }
        // If they have the same length, return the one with the most vowels
        if (word.length === acc.length) {
            return countVowels(word) > countVowels(acc) ? word : acc;
        }
        return acc;
    }, '');
}


console.log(findLongestWord('Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers'))