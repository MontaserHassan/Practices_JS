// Simulate a server request with a delay
// function fetchUserData(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const fakeData = {
//                 id: userId,
//                 name: "John Doe",
//                 email: "john@example.com",
//             };
//             resolve(fakeData);
//         }, 2000); // simulate 2 second delay
//     });
// };

// // Async function to use await
// async function getUser() {
//     try {
//         console.log("Fetching user data...");
//         const user = await fetchUserData(1); // wait until promise resolves
//         console.log("User data received:", user);
//     } catch (error) {
//         console.error("Error fetching user data:", error);
//     }
// }

// getUser();


/////////////////////////////////////// use external file ///////////////////////////////////////


// const fs = require('fs').promises;

// async function readTextFile(filePath) {
//     try {
//         const data = await fs.readFile(filePath, 'utf8');
//         console.log("File content:\n", data);
//     } catch (error) {
//         console.error("Error reading file:", error.message);
//     };
// };

// readTextFile('example.txt');


////////////////////////////////////////////////////////////////////////////////////////////////////


async function fetchUserData() {
    console.log('Kemooo');
    await new Promise(resolve => setTimeout(resolve, 10000)); // 10 seconds delay
    console.log('User data loaded');
};

async function main() {
    console.log('Fetching data...');
    fetchUserData(); // use await if you want to wait
    console.log('End');
};

main();