Array Important Functions: 
Static:
	from()
		creates new Array Instance
	isArray()
		tells whether the value is array or not
	
Proto Properties
	length
		Helps to find the total length of the Array

Proto Methods
	concat() 
		Returns new Array by concatinating two arrays, and will not change the original array
        return : new Array Instance, not change original array.
    filter()
        accepts three parameters in the call back function
        first - current element
        second - current index
        third - array
        returns a new array that passes the condition given in the callback function if none of them passes it returns empty array.
        return : new Array Instance, not change original array.
    find()
        accepts three parameters in the call back function
        first - current element
        second - current index
        third - array
        return value of the first found element in the array that is provided in the callback function
        otherwise returns undefined.
        return : value of the provided test case, not change original array.
     findIndex()
        accepts three parameters in the call back function
        first - current element
        second - current index
        third - array
        return value of the first found element's Index in the array that is provided in the callback function
        otherwise returns -1.
        return : value of the provided test case element's Index, not change original array. 
    forEach()
        accepts three parameters in the call back function
        first - current element
        second - current index
        third - array
        Executes the provided callback function for each element in the array to perform any operations. Just like for loop. changes the original array
    includes()
        accepts two parameters and last one is optional
        first - value to be searched
        second - start index from which the search begins in array
        return true or false.
    indexOf()
        accepts two parameters and last one is optional
        first - value to be searched
        second - start index from which the search begins in array
        returns the index of that element that is present in the array if not return -1
    map()
        accepts three parameters in the call back function
        first - current element
        second - current index
        third - array
        Executes the provided callback function for each element in the array to perform any operations. Just like for loop. does not changes the original array.
        return: new Array .
    pop()
        removes the last element in the original array.
        returns that element and removes the last element from the original array. changes the original array. returns undefined if array is empty
    push()
        inserts the specified elements in the argument to the end of the original array
        returns the length of the array. changes the original array
    reverse()
        return the reversed array. changes the original array
    shift()
        removes the first element in the original array.
        returns that element and removes the first element from the original array. changes the original array. returns undefined if array is empty  
    unshift()
        inserts the specified elements in the argument to the start of the original array
        returns the length of the array. changes the original array
    splice()
        takes 2 required arguments and n number of optional arguments
        first - start index fr the array
        second - delete count from that start index.
        n - no of arguments to be added to the original array from the start index
        returns the new array of removed elements from the original array and mutates
        the original array with given removed index and length parameters