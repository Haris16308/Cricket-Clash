
/* CRICKET COMPARE
   Beginner demo data for learning JavaScript.
   These are NOT verified career statistics.
*/

// 1. PLAYER DATA

const players = {

    rohit: {
        name: "Rohit Sharma",

        odi: {
            matches: 10,
            runs: 550,
            average: 55.00,
            strikeRate: 105.77,
            hundreds: 2,
            fifties: 3
        },

        t20: {
            matches: 10,
            runs: 320,
            average: 32.00,
            strikeRate: 145.45,
            hundreds: 1,
            fifties: 2
        },

        test: {
            matches: 10,
            runs: 800,
            average: 40.00,
            strikeRate: 65.00,
            hundreds: 2,
            fifties: 4
        }
    },

    virat: {
        name: "Virat Kohli",

        odi: {
            matches: 10,
            runs: 600,
            average: 60.00,
            strikeRate: 95.00,
            hundreds: 3,
            fifties: 2
        },

        t20: {
            matches: 10,
            runs: 350,
            average: 35.00,
            strikeRate: 140.00,
            hundreds: 0,
            fifties: 3
        },

        test: {
            matches: 10,
            runs: 900,
            average: 45.00,
            strikeRate: 55.00,
            hundreds: 3,
            fifties: 3
        }
    },

    dhoni: {
        name: "MS Dhoni",

        odi: {
            matches: 10,
            runs: 400,
            average: 50.00,
            strikeRate: 90.00,
            hundreds: 1,
            fifties: 3
        },

        t20: {
            matches: 10,
            runs: 200,
            average: 25.00,
            strikeRate: 125.00,
            hundreds: 0,
            fifties: 1
        },

        test: {
            matches: 10,
            runs: 500,
            average: 35.00,
            strikeRate: 60.00,
            hundreds: 1,
            fifties: 3
        }
    }

};

// 2. GET HTML ELEMENTS

const player1Select = document.getElementById("player1");
const player2Select = document.getElementById("player2");

const formatSelect = document.getElementById("format");

const compareButton = document.getElementById("compareBtn");

const results = document.getElementById("results");

const statsBody = document.getElementById("statsBody");

const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");

const dataNote = document.getElementById("dataNote");

// 3. COMPARISON FUNCTION

function comparePlayers() {

    // Get selected players and format

    const player1Key = player1Select.value;
    const player2Key = player2Select.value;

    const format = formatSelect.value;

    // Check whether the same player is selected twice

    if (player1Key === player2Key) {

        alert("Please select two different players!");

        return;
    }

    // Get player information

    const player1 = players[player1Key];
    const player2 = players[player2Key];

    // Get statistics for the selected format

    const stats1 = player1[format];
    const stats2 = player2[format];

    // Update player names in the table

    name1.textContent = player1.name.toUpperCase();
    name2.textContent = player2.name.toUpperCase();

    // Statistics to compare

    const statistics = [
        {
            label: "Matches",
            key: "matches"
        },
        {
            label: "Total Runs",
            key: "runs"
        },
        {
            label: "Batting Average",
            key: "average"
        },
        {
            label: "Strike Rate",
            key: "strikeRate"
        },
        {
            label: "Centuries (100s)",
            key: "hundreds"
        },
        {
            label: "Half-Centuries (50s)",
            key: "fifties"
        }
    ];

    // Clear previous comparison

    statsBody.innerHTML = "";

    // Create table rows

    statistics.forEach(function(stat) {

        const value1 = stats1[stat.key];
        const value2 = stats2[stat.key];

        const row = document.createElement("tr");

        const labelCell = document.createElement("td");
        const value1Cell = document.createElement("td");
        const value2Cell = document.createElement("td");

        // Add statistic names and values

        labelCell.textContent = stat.label;

        value1Cell.textContent = value1;
        value2Cell.textContent = value2;

        // Highlight the higher value

        if (value1 > value2) {

            value1Cell.classList.add("winner");

        } else if (value2 > value1) {

            value2Cell.classList.add("winner");

        }

        // Add cells to row

        row.appendChild(labelCell);
        row.appendChild(value1Cell);
        row.appendChild(value2Cell);

        // Add row to table

        statsBody.appendChild(row);

    });

    // Update format note

    const formatNames = {
        odi: "ODI",
        t20: "T20 International",
        test: "Test"
    };

    dataNote.textContent =
        "Showing illustrative " + formatNames[format] +
        " data. These numbers are for website testing, " +
        "not verified player records.";

    // Show results

    results.style.display = "block";

    results.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

// 4. BUTTON EVENT

compareButton.addEventListener("click", comparePlayers);

// 5. RUN COMPARISON WHEN FORMAT CHANGES

formatSelect.addEventListener("change", function() {

    // Update results only if they have already been displayed

    if (results.style.display === "block") {

        comparePlayers();

    }

});

// 6. INITIAL SETTINGS

results.style.display = "none";

console.log("Cricket Compare is ready!");