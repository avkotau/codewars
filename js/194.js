function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// isPrime(0) //  false, "0 is not prime");
// isPrime(1) //  false, "1 is not prime");
// isPrime(2) //  true, "2 is prime");
// isPrime(73) // true, "73 is prime");
isPrime(75) // false, "75 is not prime");
// isPrime(-1) // false, "-1 is not prime");
