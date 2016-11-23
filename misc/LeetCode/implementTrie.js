/*
Implement a trie with insert, search, and startsWith methods.

Note:
You may assume that all inputs are consist of lowercase letters a-z.
*/

/**
 * @constructor
 * Initialize your data structure here.
 */
var TrieNode = function() {
  this.isLeaf = false;
  this.children = {};
};

TrieNode.prototype.setLeaf = function() {
  this.isLeaf = true;
}

var Trie = function() {
    this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 * Inserts a word into the trie.
 */
Trie.prototype.insert = function(word) {
  let curr = this.root;
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (!curr.children[letter]) curr.children[letter] = new TrieNode();
    curr = curr.children[letter];
  }
  curr.setLeaf();
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the trie.
 */
Trie.prototype.search = function(word) {
  let curr = this.root;
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (curr.children[letter]) {
      curr = curr.children[letter];
    } else {
      return false;
    }
  }

  return curr.isLeaf;
};

/**
 * @param {string} prefix
 * @return {boolean}
 * Returns if there is any word in the trie
 * that starts with the given prefix.
 */
Trie.prototype.startsWith = function(prefix) {
  let curr = this.root;
  for (let i = 0; i < prefix.length; i++) {
    const letter = prefix[i];
    if (curr.children[letter]) {
      curr = curr.children[letter];
    } else {
      return false;
    }
  }

  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var trie = new Trie();
 * trie.insert("somestring");
 * trie.search("key");
 */
