class LRU:
    # constructor
    def __init__(self,cache_capacity):

        self.cache_capacity = cache_capacity
        self.cache = {}
        self.lru = {}
    
    def put(self, key, value):
        if key not in self.cache and len(self.cache) == self.cache_capacity:
            old_data = min(self.lru.keys(), key = lambda k:self.lru[k])
            self.cache.pop(old_data)
            self.lru.pop(old_data)
        self.cache[key] = value
        self.lru[key] = 1
        return "put success"

    def get(self, key):
        if key in self.cache:
            self.lru[key] += 1
            return self.cache[key]
        else:
            print("This key is not in cache")

    def get_cache(self):
        return self.cache