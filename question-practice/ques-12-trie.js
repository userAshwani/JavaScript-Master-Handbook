/*
 * QUESTION: class Trie — insert / search / startsWith / autocomplete
 * A tree where each node is one character. Enables O(prefix_length) search.
 * insert(word)        — add word to the trie
 * search(word)        — exact match → true/false
 * startsWith(prefix)  — any word with this prefix → true/false
 * autocomplete(prefix)— return all words that begin with prefix
 *
 * trie.insert("swift"); trie.insert("swiggy"); trie.insert("amazon")
 * trie.autocomplete("swi") → ["swift", "swiggy"]
 * trie.search("swift")     → true
 * trie.search("swim")      → false
 */

class TrieNode {
  constructor() {
    // TODO — children: Map, isEnd: boolean
  }
}

class Trie {
  constructor() {
    // TODO — root TrieNode
  }

  insert(word) { /* TODO */ }
  search(word) { /* TODO */ }
  startsWith(prefix) { /* TODO */ }
  autocomplete(prefix) { /* TODO — DFS from prefix node */ }
}

// --- TEST ---
// const t = new Trie();
// ["swift","swiggy","swipe","amazon","amaze"].forEach(w => t.insert(w));
// console.log(t.autocomplete("swi")); // ["swift","swiggy","swipe"]
// console.log(t.search("amazon"));    // true
// console.log(t.search("amaz"));      // false
