This is a collection of libraries users of SUNRUSE.influx may find useful.  

# Usage
The NPM package both contains these libraries, and a small JavaScript module for finding the absolute paths to them.  Call with the name of the library you wish to find as a string as the argument to get the absolute path returned as a string.

# Testing
Assertions are included, and can be ran for the "sunruse-influx-platforms-javascript" platform using "grunt watch".  However, they should be ran by each individual platform's build process.  To do this, assuming a Jasmine environment, call the NPM package's "selfTest" function with a platform instance to run under.

# Libraries
The names of these libraries are listed as an array of strings in the NPM package's "list" property.

## pairs
Generic operations for working with pairs.  Pairs are objects containing the properties "a" and "b".

### Functions
#### intersperse
Given a pair of pairs, returns a pair of pairs where:
* "a" contains "a" from both of the given pairs as "a" and "b".
* "b" contains "b" from both of the given pairs as "a" and "b".

This can be used to compare the items in two pairs more easily as it groups the matchin properties.

#### split
Given anything, returns a pair where both "a" and "b" are the input.

#### swap
Given a pair, returns the same items, but with the values of "a" and "b" swapped.

## maths
Common basic mathematical operations.

### Requires
* pairs

### Functions

#### min
Given properties "a" and "b", returns the lesser.

#### max
Given properties "a" and "b", returns the greater.

#### square
Calculates the square of a given integer or float.

#### increment
Adds 1 to a given integer.

#### decrement
Subtracts 1 from a given integer.

#### double
Doubles a given integer or float.

#### halve
Halves a given float, not rounding.

#### halveUp
Halves an integer, rounding up.

#### halveDown
Halves an integer, rounding down.

## vectors-2d
Mathematical operations on pairs of integers or floats describing 2D vectors.

### Requires
* pairs
* maths

### Functions

#### add
Calls "add" between the given pairs' "a"s and "b"s, returning the results in a new pair.

#### subtract
Calls "subtact" between the given pairs' "a"s and "b"s, returning the results in a new pair.

#### multiply
Calls "multiply" between the given pairs' "a"s and "b"s, returning the results in a new pair.

#### divide
Calls "divide" between the given pairs' "a"s and "b"s, returning the results in a new pair.	

#### magnitudeSquared
Returns the square of the magnitude of a given pair representing a 2D vector.  Faster than "magnitude".

#### distance
Returns the square of the distance between the given pair of pairs representing 2D 
vectors.  Faster than "distance".

#### dot
Return the dot product of the given pair of pairs representing 2D vectors.

#### counterClockwise
Turns a pair representing a 2D vector 90 degrees counter-clockwise; that is, negating "b" and then swapping "a"/"b".

#### clockwise
Turns a pair representing a 2D vector 90 degrees clockwise; that is, negating "a" and then swapping "a"/"b".

## lists
Operations on linked lists, of the form:

    item 5
	next
		item 7
		next
			lastItem 3
			
Indexes are 1-based; 0 is used as a "not-in-list" index.

### Requires
* pairs
* maths

### Functions

#### max
Returns the greatest item in a given list by comparing them using the "max" function.

#### min
Returns the least item in a given list by comparing them using the "min" function.

#### add
Returns the sum of the items in a given list by adding them all together using the "add" function.

#### multiply
Returns the product of the items in a given list by multiplying them all together using the "multiply" function.

#### contains
Given:
* find: A value to find.
* list: A list to search.
Returns true when "list" contains at least one instance of "find", comparing using the "equal" function, and false when not.  

#### length
Given a list, returns the number of items in the list, as an integer. 

#### firstIndex
Given:
* find: A value to find.
* list: A list to search.
Returns the 1-based index of the first instance of "find" in "list" as an integer, comparing using the "equal" function.  If not present, 0 is returned.

#### lastIndex
Given:
* find: A value to find.
* list: A list to search.
Returns the 1-based index of the last instance of "find" in "list" as an integer, comparing using the "equal" function.  If not present, 0 is returned.

#### count
Given:
* find: A value to find.
* list: A list to search.
Returns the number of instances of "find" in "list" as an integer, comparing using the "equal" function.

#### unique
Given a list, returns true when all of the items are unique, and false when at least one is present twice, comparing using the "equal" function.

#### same
Given a list, returns true when all of the items are the same, and false when at least one is different, comparing using the "equal" function.

#### reverse
Given a list, returns the same items in reverse order.

#### append
Given:
* list: A list to append to.
* item: An item to append.
Returns a list, containing "list" with "item" added to the end.

#### prepend
Given:
* list: A list to prepend to.
* item: An item to prepend.
Returns a list, containing "list" with "item" added to the start.

#### removeFirst
Given a list, returns the list sans the first item. 

#### removeLast
Given a list, returns the list sans the last item.

#### enumerate
Given a list, returns the same list, but with an additional "index" property in each part, next to "item".  This is 1 in the first and increments with each item.

#### atIndex
Given:
* list: A list to retrieve an item from.
* index: The 1-based index to get the item at.
Returns the item in the list at the index specified.

#### removeIndex
Given:
* list: A list to remove from.
* index: The 1-based index to remove an item at.
Returns a list, containing "list" without the item at "index".

#### sortAscending (unimplemented)
Given a list, returns the items sorted ascending, i.e. 1, 2, 3.  Uses the "greater" function to compare.

#### sortDescending (unimplemented)
Given a list, returns the items sorted descending, i.e. 3, 2, 1.  Uses the "greater" function to compare.

#### replace (unimplemented)
Given:
* list: A list to replace in.
* replace: An item to replace.
* with: An item to replace with.
Returns "list", where every instance of the item specified by "replace" has been replaced with "with".  Uses the "equal" function to compare.

#### replaceFirst (unimplemented)
Given:
* list: A list to replace in.
* replace: An item to replace.
* with: An item to replace with.
Returns "list", where the first instance only of the item specified by "replace" has been replaced with "with".  Uses the "equal" function to compare.  If the item did not exist in the list, no changes are made.

#### replaceLast (unimplemented)
Given:
* list: A list to replace in.
* replace: An item to replace.
* with: An item to replace with.
Returns "list", where the last instance only of the item specified by "replace" has been replaced with "with".  Uses the "equal" function to compare.  If the item did not exist in the list, no changes are made.

#### first
Given a list, returns the first item.

#### last
Given a list, returns the last item.

#### concatenate
Given a pair of lists, returns a single list containing all the items in "a", then all the items in "b".

#### map (unimplemented)
Given:
* list: A list to map.
* data: Arbitrary data to include when mapping items.
Calls the "performMap" function for each item in "list", with the following as input:
* item: The item to map.
* data: "data" from the input or processing the previous item.
* index: The 1-based position in the list of this item.
This should return:
* item: An item to store in the returned list at this position.
* data: The "data" to pass when processing the next item.

#### count (unimplemented)
Given:
* list: A list to count.
* data: Arbitrary data to include when mapping items.
Calls the "predicate" function for each item in "list", with the following as input:
* item: The item to map.
* data: "data" from the input.
And returns the number of "predicate" calls which returned true, as an integer.

#### all (unimplemented)
Given:
* list: A list to count.
* data: Arbitrary data to include when mapping items.
Calls the "predicate" function for each item in "list", with the following as input:
* item: The item to map.
* data: "data" from the input.
And returns true when every call to "predicate" returns true, else, false.

#### any (unimplemented)
Given:
* list: A list to count.
* data: Arbitrary data to include when mapping items.
Calls the "predicate" function for each item in "list", with the following as input:
* item: The item to map.
* data: "data" from the input.
And returns true when at least one call to "predicate" returns true, else, false.

#### none (unimplemented)
Given:
* list: A list to count.
* data: Arbitrary data to include when mapping items.
Calls the "predicate" function for each item in "list", with the following as input:
* item: The item to map.
* data: "data" from the input.
And returns false when at least one call to "predicate" returns true, else, true.

#### sortAscending
Given:
* list: A list to sort.
* data: Arbitrary data to include when mapping items.
Calls the "index" function for each item in "list", with the following as input:
* item: The item to map.
* data: "data" from the input.
And returns the input list, sorted by the result of "index", ascending.

#### sortDescending
Given:
* list: A list to sort.
* data: Arbitrary data to include when mapping items.
Calls the "index" function for each item in "list", with the following as input:
* item: The item to map.
* data: "data" from the input.
And returns the input list, sorted by the result of "index", descending.