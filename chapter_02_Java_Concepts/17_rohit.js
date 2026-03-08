let a = 10;
if (true) {
    console.log(a); // because a is refring to local a which is not defined
    let a = 20; // Rohit is expecting 20 but it will throw error
}