from LRU import *

def main():
    object_lru = LRU(5)

    assert object_lru.put(1,"Akanksha") == "put success"
    assert object_lru.put(2,"Dhanewar") == "put success"
    assert object_lru.put(3,"Vishal") == "put success"
    assert object_lru.get(1) == "Akanksha"
    assert object_lru.get(3) == "Vishal"
    assert object_lru.get(3) == "Vishal"
    assert object_lru.put(4,"Poonam") == "put success"
    assert object_lru.put(5,"Teju") == "put success"
    assert object_lru.put(6,"Rachana") == "put success"
    assert object_lru.put(7,"Akshit") == "put success"
    assert object_lru.get_cache() == {1: 'Akanksha', 3: 'Vishal', 5: 'Teju', 6: 'Rachana', 7: 'Akshit'}
    print ("All test cases passed!!!")

if __name__ == "__main__":
    main()
