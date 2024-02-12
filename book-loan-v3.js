function libraryLoanSystem() {
    const hardcodedLoans = [
    [301, 20, 4],
    [302, 21, 6],
    [303, 22, 12],
    [304, 23, 7],
    [305, 20, 11],
    [306, 24, 5],
    [307, 25, 13],
    [308, 21, 9],
    [309, 22, 14],
    [310, 23, 10],
    [311, 24, 8],
    [312, 20, 2],
    [313, 25, 15],
    [314, 21, 3],
    [315, 22, 16]
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
