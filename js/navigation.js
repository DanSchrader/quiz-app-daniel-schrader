function navigation() {
  const homeButton = document.querySelector('[data-js=homePageButton]');
  const bookmarkButton = document.querySelector('[data-js=bookmarkPageButton]');
  const createButton = document.querySelector('[data-js=createPageButton]');
  const profileButton = document.querySelector('[data-js=profilePageButton]');

  const homePage = document.querySelector('[data-js=homePage]');
  const bookmarkPage = document.querySelector('[data-js=bookmarkPage]');
  const createPage = document.querySelector('[data-js=createPage]');
  const profilePage = document.querySelector('[data-js=profilePage]');

  homeButton.addEventListener('click', () => {
    homePage.classList.remove('hidden');
    bookmarkPage.classList.add('hidden');
    createPage.classList.add('hidden');
    profilePage.classList.add('hidden');

    homeButton.classList.add('active');
    bookmarkButton.classList.remove('active');
    createButton.classList.remove('active');
    profileButton.classList.remove('active');
  });

  bookmarkButton.addEventListener('click', () => {
    homePage.classList.add('hidden');
    bookmarkPage.classList.remove('hidden');
    createPage.classList.add('hidden');
    profilePage.classList.add('hidden');

    homeButton.classList.remove('active');
    bookmarkButton.classList.add('active');
    createButton.classList.remove('active');
    profileButton.classList.remove('active');
  });

  createButton.addEventListener('click', () => {
    homePage.classList.add('hidden');
    bookmarkPage.classList.add('hidden');
    createPage.classList.remove('hidden');
    profilePage.classList.add('hidden');

    homeButton.classList.remove('active');
    bookmarkButton.classList.remove('active');
    createButton.classList.add('active');
    profileButton.classList.remove('active');
  });

  profileButton.addEventListener('click', () => {
    homePage.classList.add('hidden');
    bookmarkPage.classList.add('hidden');
    createPage.classList.add('hidden');
    profilePage.classList.remove('hidden');

    homeButton.classList.remove('active');
    bookmarkButton.classList.remove('active');
    createButton.classList.remove('active');
    profileButton.classList.add('active');
  });
}

export default navigation;
