class LRU {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    const size = this.cache.size;
    if (this.cache.has(key)) {
      this.cache.delete(key);
      this.cache.set(key, value);
    } else {
      this.cache.set(key, value);
    }

    if (size >= this.capacity) {
      const lastKey = [...this.cache.keys()].pop()
      this.cache.delete(lastKey);
      
    }
  }
}
