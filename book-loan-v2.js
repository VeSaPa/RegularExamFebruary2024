function libraryLoanSystem() {
    const hardcodedLoans = [
    [201, 10, 3],
    [202, 12, 20],
    [203, 11, 8],
    [204, 10, 1],
    [205, 13, 18],
    [206, 14, 7],
    [207, 15, 12],
    [208, 11, 4],
    [209, 12, 14],
    [210, 14, 5],
    [211, 15, 9],
    [212, 10, 11],
    [213, 13, 15],
    [214, 12, 2],
    [215, 14, 13]
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
