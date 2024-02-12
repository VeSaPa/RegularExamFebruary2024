function libraryLoanSystem() {
    const hardcodedLoans = [
    [401, 30, 5],
    [402, 31, 10],
    [403, 32, 4],
    [404, 33, 7],
    [405, 34, 11],
    [406, 30, 3],
    [407, 35, 12],
    [408, 31, 6],
    [409, 32, 9],
    [410, 33, 8],
    [411, 34, 14],
    [412, 35, 2],
    [413, 30, 13],
    [414, 31, 1],
    [415, 32, 15]
];


    let users = new Set();
    let booksLoaned = 0;
    let totalLateFees = 0.0;
    const lateFeePerDay = 0.5; // Fee per day after 10 days

    for (let i = 0; i < hardcodedLoans.length; i++) {
        const loan = hardcodedLoans[i];
        const bookId = loan[0];
        const userId = loan[1];
        const daysLoaned = loan[2];

        booksLoaned += 1;
        users.add(userId);
        if (daysLoaned > 10) {
            totalLateFees += (daysLoaned - 10) * lateFeePerDay;
        }
    }

    console.log("\nLibrary Loan Summary:");
    console.log(`Unique users: ${users.size}`);
    console.log(`Total books loaned: ${booksLoaned}`);
    console.log(`Total late fees: $${totalLateFees.toFixed(2)}`);

    const summaryInfo = {
        uniqueUsers: users.size,
        booksLoaned: booksLoaned,
        totalLateFees: totalLateFees
    };

    return summaryInfo;
}

const summary = libraryLoanSystem();
