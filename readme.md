This is a collection of libraries users of SUNRUSE.influx may find useful.  

# Usage
The NPM package both contains these libraries, and a small JavaScript module for finding the absolute paths to them.  Call with the name of the library you wish to find as a string as the argument to get the absolute path returned as a string.

# Testing
Assertions are included, but are not ran by this project.  Instead, they should be ran by each individual platform's build process.  To do this, assuming a Jasmine environment, call the NPM package's "selfTest" function with a platform instance to run under.

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