// const cache = new Map();

// function calculateFactorial(n) {
//     if (cache.has(n)) {
//         console.log(`Fetching factorial of ${n} from cache`);
//         console.log(cache.get(n));
//         return cache.get(n);
//     }

//     console.time(`calculateFactorial(${n})`);

//     let factorial = 1;
//     for (let i = 2; i <= n; i++) {
//         factorial *= i;
//         console.log(`${i}: ${factorial}`);
//         console.log(`--------------------------`);
//     }

//     cache.set(n, factorial); // Store result in cache

//     console.timeEnd(`calculateFactorial(${n})`);
//     return factorial;
// }

// console.time('Total time');
// calculateFactorial(5);
// console.timeEnd('Total time');
// console.log('////////////////////////\n');
// console.time('Total time');
// calculateFactorial(5);
// console.timeEnd('Total time');
// console.log('////////////////////////\n');
// console.time('Total time');
// calculateFactorial(4);
// console.timeEnd('Total time');


// ----------------------------------------------------------------------------------------


const apiCache = new Map();

async function fetchFromApi(url) {
    if (apiCache.has(url)) {
        console.log(`Fetching ${url} response from cache`);
        console.log("apiCache.has(url): ", apiCache.get(url));
        return apiCache.get(url);
    }
    const response = await fetch(url);
    const data = await response.json();
    apiCache.set(url, data); // Store response in cache
    return data;
};

async function displayUserData(userId) {
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;

    const startTime = performance.now(); // Start 

    const userData = await fetchFromApi(apiUrl);

    const endTime = performance.now(); // end
    const elapsedTime = endTime - startTime;

    console.log(`Time taken: ${elapsedTime.toFixed(2)} ms`);
    console.log(userData);
    console.log('//////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////////////////////////////////\n');
};


async function displayUsersData() {
    const apiUrl = `https://jsonplaceholder.typicode.com/users`;

    const startTime = performance.now(); // Start

    const userData = await fetchFromApi(apiUrl);

    const endTime = performance.now(); // end
    const elapsedTime = endTime - startTime;

    console.log(`Time taken: ${elapsedTime.toFixed(2)} ms`);
    console.log(userData);
    console.log('//////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////////////////////////////////\n');
};


displayUserData(1); // Fetches user data from API and caches it
displayUserData(2); // Fetches user data from cache
displayUserData(3); // Fetches user data from cache


displayUsersData();

displayUsersData();


// ----------------------------------------------------------------------------------------


