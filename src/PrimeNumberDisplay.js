import React, { useState, useEffect } from 'react';

function isPrime(num) {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function PrimeNumbers() {
  const [primes, setPrimes] = useState([2]);

  useEffect(() => {
    const interval = setInterval(() => {
      const lastPrime = primes[primes.length - 1];
      let nextPrime = lastPrime + 1;
      while (!isPrime(nextPrime)) {
        nextPrime++;
      }
      
      setPrimes(prevPrimes => [...prevPrimes, nextPrime]);
    }, 1000);

    return () => clearInterval(interval);
  }, [primes]);

  return (
    <div>
      <h1>Простые числа:</h1>
      <p>{primes.join(', ')}</p>
    </div>
  );
}

export default PrimeNumbers;