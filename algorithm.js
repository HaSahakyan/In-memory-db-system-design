start 
when get(key) is called 
    the program checks if(the item in cache){
        move the item in the head of the doubly linked list 
        return the item
    }else{
        return Null
    }
when put(key, value) is called
    the program checks if(the item in cache){
        set new item value
        move the item in the head of the doubly linked list 
    }else{
        check if(the cache is full){
            delete the key and value in the tail of doubly linked list
            add new item to the head of the doubly linked list 
        }else{
            add new item to the head of the doubly linked list
        }
    }
