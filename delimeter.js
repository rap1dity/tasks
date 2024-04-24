const getCommonDivisors = (nums) => {
    const commonDivisors = [];
    const getGCD = (a, b) => {
        while (b !== 0)
            [a, b] = [b, a % b];
        return a;
    };
    const getHighestGCD = (nums) => nums.reduce((previousValue, currentValue) => getGCD(previousValue, currentValue));
    const highestGCD = getHighestGCD(nums);
    for (let i = 2; i <= Math.floor(highestGCD / 2); i++)
        highestGCD % i === 0 && commonDivisors.push(i);
    return [...commonDivisors, highestGCD];
};
console.log(getCommonDivisors([42, 12, 18]));
