// Q10 (Advanced): Implement a class Trie with methods:
//   insert(word)   - adds a word
//   search(word)   - returns true if the exact word exists
//   startsWith(prefix) - returns true if any word starts with prefix
//   delete(word)   - removes a word (and cleans up now-unused nodes)

class Trie {
    // your code here
}

// ---- Run this file to check your answer ----
const trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("card");

console.log(trie.search("cat"));       // Expected Result: true
console.log(trie.search("ca"));        // Expected Result: false
console.log(trie.startsWith("ca"));    // Expected Result: true

trie.delete("cat");
console.log(trie.search("cat"));       // Expected Result: false
console.log(trie.search("car"));       // Expected Result: true (unaffected)
console.log(trie.startsWith("car"));   // Expected Result: true
