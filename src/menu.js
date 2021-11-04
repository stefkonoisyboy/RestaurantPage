const generateMenu = () => {
    const body = document.querySelector("body");

    const main = document.createElement("main");

    const row = document.createElement("div");
    row.classList.add("row");

    const div = document.createElement("div");
    div.classList.add("mt-5");
    div.classList.add("text-center");
    div.classList.add("text-white");
    div.classList.add("w-50");
    div.classList.add("h-100");
    div.classList.add("col-md-6");
    div.setAttribute("style", "background-color: rgba(40, 40, 43, 0.7);");

    const firstColumn = document.createElement("div");
    firstColumn.classList.add("col-md-3");

    const thirdColumn = document.createElement("div");
    thirdColumn.classList.add("col-md-3");

    const burgersRow = document.createElement("div");
    burgersRow.classList.add("row");

    for (let i = 0; i < 8; i++) {
        const burgerItem = document.createElement("div");
        burgerItem.setAttribute("style", "opacity: 0.7; border: 5px solid green;");

        burgerItem.classList.add("col-md-6");
        burgerItem.classList.add("mt-3");
        burgerItem.classList.add("mb-3");
        burgerItem.classList.add("mr-3");
        burgerItem.classList.add("ml-3");
        burgerItem.classList.add("text-center");
        burgerItem.classList.add("text-white");
        burgerItem.classList.add("bg-dark");

        const burgerImage = document.createElement("img");

        burgerImage.setAttribute("src", "https://tse2.mm.bing.net/th?id=OIP.jqSLskcam0zPxUtsv_nz5gHaEo&pid=Api&P=0&w=262&h=165");
        burgerImage.setAttribute("alt", "burgerImage");
        burgerImage.setAttribute("style", "border-radius: 50%; height: 100px; width: 100px;");

        burgerItem.appendChild(burgerImage);

        const burgerName = document.createElement("h3");
        burgerName.textContent = "Cheeeseburger";
        burgerItem.appendChild(burgerName);

        const burgerIngredients = document.createElement("p");
        burgerIngredients.textContent = "Tomato, lettuce, cheese, meat, French fries, BBQ sauce, mayonnaise"
        burgerItem.appendChild(burgerIngredients);

        burgersRow.appendChild(burgerItem);
    }

    div.appendChild(burgersRow);

    row.appendChild(firstColumn);
    row.appendChild(div);
    row.appendChild(thirdColumn);

    main.appendChild(row);

    body.appendChild(main);
};

export { generateMenu };