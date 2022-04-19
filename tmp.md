# [Dynamic Programming][dynamic programming] {#header}

Dynamic Programming is the the algorithmic technique for solving a problem by recursively breaking it
down into simpler sub-problems.

## Memoization {#memoization}

### Fibonnaci Sequence

Write a function `fib(n)` that takes in a number as an argument. The function should return the n-th number of the Fibonacci sequence.

The 1st and 2nd number of the sequence is 1. To generate the next number of the sequence, we sum the previous two.

```js
n:      1, 2, 3, 4, 5, 6, 7, 8, 9, ...
fib(n): 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
```

<details>
<summary><b>Recursive Solution</b></summary>

```js
const fib = () => {
	if (n <= 2) return 1;
	return fib(n - 1) + fib(n - 2);
};

fib(6); // 8
fib(7); // 13
fib(8); // 21
fib(50); // (This takes forever under current implementation)
```

This solution is particularly slow O(2^n^) as demonstrated visually in the tree below. Recursively, you can see that there are many repeating computations of trees that we may have already previously calculated:
![Fibonnaci Recursive Solution in Tree Form](https://tylerkim.dev/RecursiveTree.PNG)

<details>
<summary><b>Proof of Time/Space complexity</b></summary>
<br><b>1 Recursive Call</b>

```js
const dib = (n) => {
	if (n <= 1) return;
	dib(n - 1);
};
```

This recursive function decrements n every call, and goes until it hits 1 or 0. It can be said to have O(n) time and space complexity (function calls added to the stack count as space) as shown in the diagram below.

![dib](https://tylerkim.dev/dib.PNG)

<br><b>2 Recursive Calls</b>

```js
const dib2 = (n) => {
	if (n <= 1) return;
	dib2(n - 1);
	dib2(n - 1);
};
```

The following algorithm calls itself twice every function call. And can be modeled as O(2^n^) in the following tree below:
![dib2 time complexity](https://tylerkim.dev/dib2Time.PNG)

As you can see, it calls it self twice every iteration roughly `n` times. As for space complexity, the stack actually pops the base case off the tree, and replaces the popped funciton with a new one. It only ever calls the height of the tree, as function calls are not compounded on the stack:
![dib2 space complexity](https://tylerkim.dev/dib2Space.PNG)

```js
if (dib === "O(2^n)"
    lib === "O(2^n/2)")
        fib = "Somewhere between them"
```

</details>
</details>

<details>
<summary><b>Memoized Solution</b></summary>

```js
const fib = (n, memo = {}) => {
	if (n in memo) return memo[n];
	if (n <= 2) return 1;

	memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
	return memo[n];
};

fib(6); // 8
fib(7); // 13
fib(8); // 21
fib(50); // 12586269025
```

<b>Stepped through Fib memoized</b>
![Fib Memoized visualized](https://tylerkim.dev/fibMemoizedExplained.PNG)

Every time we compute the value for a number `n` we store its result as a cached answer for future use. In the above example 3 is stored in the memo object (map) and can be effectively thought of as "cached". The result of storing previously computed values results in a time complexity of O(n) and space complexity of O(n) in the following tree

![Fib final](https://tylerkim.dev/fibMemoizedTimeComplexity.PNG)

</details>

<details open>
<summary><b>Tabulated Solution</b></summary>

The tabulated solution will have an array of size n + 1. The idea is that we calculate and store the answer to a particular subproblem at it's cooresponding index. Ex: array[n] will be the stored answer of fib(n);

#### Demonstration

```js
    n: 6 // 8
        
new [0, 1, 0, 0, 0, 0, 0] // initialize to length n+1, n[1] = 1

// iterate with i = 2. Starting index is specific to Fib
           v
2:  [0 +1 =1, 0, 0, 0, 0] 
              v
3:  [0, 1 +1 =2, 0, 0, 0] 
                 v
4:  [0, 1, 1 +2 =3, 0, 0] 
                    v
5:  [0, 1, 1, 2 +3 =5, 0] 
                       v
6:  [0, 1, 1, 2, 3 +5 =8] 

FIN:[0, 1, 1, 2, 3, 5, 8] 
```

The runtime complexity is O(n) and has a space complexity of O(n). Implementation in java:

```java
public int fib(int n) {
    if (n <= 0)
        return 0;
    
    int[] cache = new int[n + 1];
    cache[1] = 1;
    
    for (int i = 2; i < cache.length; i++)
        cache[i] = cache[i - 1] + cache[i - 2];
    
    return cache[n];
}
```

</details>

## Tabulation

<!-- External Links  -->

[dynamic programming]: https://www.youtube.com/watch?v=oBt53YbR9Kk

<!-- Internal Links -->
