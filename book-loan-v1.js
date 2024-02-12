function libraryLoanSystem() {
    const hardcodedLoans = [
        [101, 1, 5],
        [102, 2, 15],
        [103, 3, 7],
        [104, 2, 2],
        [105, 4, 12],
        [106, 1, 9],
        [107, 5, 16],
        [108, 3, 3],
        [109, 2, 10],
        [110, 4, 4],
        [111, 5, 14],
        [112, 1, 6],
        [113, 3, 8],
        [114, 2, 1],
        [115, 4, 11]
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
