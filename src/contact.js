const generateContact = () => {
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

    const phoneText = document.createElement("h4");
    phoneText.classList.add("text-white");
    const phoneIcon = document.createElement("span");
    phoneIcon.classList.add("fas");
    phoneIcon.classList.add("fa-phone-alt");
    phoneIcon.classList.add("text-danger");
    phoneText.textContent = "123 456 789";
    div.appendChild(phoneIcon);
    div.appendChild(phoneText);

    const addressGroup = document.createElement("h4");
    addressGroup.classList.add("text-white");
    const homeIcon = document.createElement("span");
    homeIcon.classList.add("fas");
    homeIcon.classList.add("fa-home");
    homeIcon.classList.add("text-success");
    div.appendChild(homeIcon);
    addressGroup.textContent = "Wimbledon, the United Kingdom";
    div.appendChild(addressGroup);

    const map = document.createElement("iframe");
    map.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39802.84784242818!2d-0.258869277430838!3d51.42734158311821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487608b7738a00c5%3A0x260eae2ec8a63d71!2z0KPQuNC80LHRitC70LTRitC9LCDQm9C-0L3QtNC-0L0sINCS0LXQu9C40LrQvtCx0YDQuNGC0LDQvdC40Y8!5e0!3m2!1sbg!2sbg!4v1635965739878!5m2!1sbg!2sbg");
    map.setAttribute("width", "600");
    map.setAttribute("height", "450");
    map.setAttribute("style", "border:0;");
    map.setAttribute("allowfullscreen", "");
    map.setAttribute("loading", "lazy");
    div.appendChild(map);

    row.appendChild(firstColumn);
    row.appendChild(div);
    row.appendChild(thirdColumn);

    main.appendChild(row);

    body.appendChild(main);
};

export { generateContact };