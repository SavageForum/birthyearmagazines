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
