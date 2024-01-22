function findLongestCountryName(arr) {
    let longest = arr[0];
    
    arr.forEach(country => {
        if (country.length > longest.length) {
            longest = country;
        }
    })

    return longest
}

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland', 'Lithuania', 'Latvia', 'Poland', 'Austria', 'Germany'];

console.log(findLongestCountryName(countries));