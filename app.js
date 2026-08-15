console.log("JavaScript loaded");

let magazines = [];

fetch("magazines.json")
    .then(response => response.json())
    .then(data => {
        magazines = data;
        displayMagazines(magazines);
    });

function displayMagazines(items) {

    const container = document.getElementById("magazine-list");

    const count = document.getElementById("resultsCount");

    count.textContent =
        items.length + " magazine(s) found";

    container.innerHTML = "";

    items.forEach(magazine => {

        container.innerHTML += `
            <div class="mag-card">

                ${magazine.image}magazine.title}"
                    class="mag-image"
                >

                <h3>${magazine.title}</h3>

                <p>
                    ${magazine.month} ${magazine.year}
                </p>

                <p>
                    Condition: ${magazine.condition}
                </p>

                <p>
                    £${magazine.price.toFixed(2)}
                </p>

                .link}"
                    target="_blank"
                    class="buy-button"
                >
                    View Listing
                </a>

            </div>
        `;
    });
}

document
    .getElementById("yearFilter")
    .addEventListener("input", function () {

        const year = parseInt(this.value);

        if (isNaN(year)) {
            displayMagazines(magazines);
            return;
        }

        const filtered = magazines.filter(
            magazine => magazine.year === year
        );

        displayMagazines(filtered);

    });

document
    .getElementById("clearFilter")
    .addEventListener("click", () => {

        document.getElementById("yearFilter").value = "";

        displayMagazines(magazines);

    });

#search {
    text-align: center;
}

#yearFilter {
    padding: 12px;
    width: 250px;
    max-width: 100%;
    margin-right: 10px;
}

#clearFilter {
    padding: 12px 18px;
    cursor: pointer;
}

#magazine-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
}

.mag-card {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.mag-image {
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: 6px;
}

.buy-button {
    display: inline-block;
    margin-top: 10px;
    background: #b8860b;
    color: white;
    padding: 10px 15px;
    text-decoration: none;
    border-radius: 6px;
}
