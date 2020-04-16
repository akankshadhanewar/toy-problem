class LRU:
    # constructor
    def __init__(self,cache_capacity):
        
        self.cache_capacity = cache_capacity
        self.data = {}
        self.cache = {}