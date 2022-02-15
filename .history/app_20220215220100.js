import {
  menu
} from "./data.js";

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");



// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
  filter();
  filterByWord();
});


function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  btnContainer.innerHTML +=
    `<button type="button" class="filter-btn" data-id="all">all</button>
  <button type="button" class="filter-btn" data-id="breakfast">
    breakfast
  </button>
  <button type="button" class="filter-btn" data-id="lunch">lunch</button>
  <button type="button" class="filter-btn" data-id="shakes">shakes</button>
  <input type="text" class="filterByWord" name="filter" data-id="filterByWord" id="filterInput">`

}


function filter(){
  const btn = document.querySelectorAll(".filter-btn");
  btn.forEach(item => {
    item.addEventListener("click", function () {
      let filterItem = item.getAttribute("data-id");
      if (filterItem !== "all") {
        let filteredMenu = menu.filter(filterByName => {
          return filterByName.category === filterItem;
        })
        displayMenuItems(filteredMenu);
      } else {
        displayMenuItems(menu);
      }
    })
  })
}

function filterByWord(){
  let searchText = "";
  const input = document.querySelector(".filterByWord");

  inputText.addEventListener("keyup", (e) =>{
    // console.log("inputtext", e.target.value);
    searchText = e.target.value;
    console.log("inputtext", searchText);
  })
  console.log("inputtext", searchText);
  let filteredMenuByWord = menu.filter(filterItem => {
    return filterItem.category === searchText;
  });
  displayMenuItems(filteredMenuByWord);
}