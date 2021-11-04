const generateHome = () => {
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

    row.appendChild(firstColumn);
    row.appendChild(div);
    row.appendChild(thirdColumn);

    const firstSubheading = document.createElement("h3");
    firstSubheading.textContent = "Best Burgers in your country!";
    div.appendChild(firstSubheading);

    const secondSubheading = document.createElement("h3");
    secondSubheading.textContent = "Made with passion since 2015";
    secondSubheading.classList.add("mt-5");
    div.appendChild(secondSubheading);

    const image = document.createElement("img");
    image.setAttribute("src", "https://tse2.mm.bing.net/th?id=OIP.qaRMTNGhBRODYWZFVTVgRgHaEf&pid=Api&P=0&w=268&h=163");
    image.setAttribute("alt", "chef");
    image.setAttribute("style", "border-radius: 50%; width: 300px; height: 300px;");
    image.classList.add("mt-5");
    div.appendChild(image);

    const thirdSubheading = document.createElement("h3");
    thirdSubheading.textContent = "Order online or visit us!";
    thirdSubheading.classList.add("mt-5");
    div.appendChild(thirdSubheading);

    main.appendChild(row);

    body.appendChild(main);
};

export { generateHome };