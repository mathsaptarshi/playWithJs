/**
 * Checks if a number is prime.
 * Optimized with O(sqrt(n)) time complexity.
 */
function isPrime(n) {
    // 1. Handle non-prime numbers less than or equal to 3
    if (n <= 1) return false;
    if (n <= 3) return true;

    // 2. Eliminate multiples of 2 and 3
    if (n % 2 === 0 || n % 3 === 0) return false;

    // 3. Check factors using the 6k ± 1 rule
    // We start at 5 and increment by 6 each time
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

// --- Testing the function ---
const testNum = 29;
console.log(`Is ${testNum} prime?`, isPrime(testNum)); // Output: true