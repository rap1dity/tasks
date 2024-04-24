const getPrimeNumbers = (from: number, to: number) => {
    const primeNumbers: number[] = [];

    const isPrime = (num: number) => {
        if (num < 2)
            return false;

        for(let i = 2; i <= Math.sqrt(num); i++) {
            if(num % i === 0)
                return false;
        }

        return true;
    }

    for(let i = from; i <= to; i++){
        if(isPrime(i))
            primeNumbers.push(i);
    }

    return primeNumbers;
}

console.log(getPrimeNumbers(11,20));