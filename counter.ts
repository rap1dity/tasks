const getComputerDeclination = (count: number) => {
    let declination = 'компьютер';

    if([11,12,13,14].includes(count % 100) || [0,5,6,7,8,9].includes(count % 10))
        declination += 'ов';
    else if([2,3,4].includes(count % 10))
        declination += 'а';

    return `${count} ${declination}`;
}

console.log(getComputerDeclination(101));