/* Dropdown menu */
const connectBtn = document.querySelectorAll(".js-menu-item");
const dropdownMenus = document.querySelectorAll(".js-dropdown-menu");
const dropdownArrow = document.querySelectorAll(".js-dropdown-arrow");

dropdownMenu(0);
dropdownMenu(1);
dropdownMenu(2);

/**
 * When the user clicks on the button, the dropdown menu will either open or close
 * @param menuNumber - The number of the menu you want to open.
 */
function dropdownMenu(menuNumber) {
  connectBtn[menuNumber].addEventListener("click", () => {
    if (
      dropdownMenus[menuNumber].classList.contains("open-dropdown") == false
    ) {
      connectBtn[menuNumber].classList.add("menu__item--active");
      dropdownMenus[menuNumber].classList.add("dp-flex");
      dropdownMenus[menuNumber].classList.add("open-dropdown");
      dropdownMenus[menuNumber].classList.remove("close-dropdown");
      dropdownArrow[menuNumber].classList.add("tf-rotate-180");
    } else {
      connectBtn[menuNumber].classList.remove("menu__item--active");
      dropdownMenus[menuNumber].classList.remove("open-dropdown");
      dropdownMenus[menuNumber].classList.add("close-dropdown");
      dropdownArrow[menuNumber].classList.remove("tf-rotate-180");

      setTimeout(() => {
        dropdownMenus[menuNumber].classList.remove("dp-flex");
      }, 400);
    }
  });
}

/* Dropdown menu end */
