const data = [
  {
    question: "What is Shawn's superhero alter ego?",
    answer: 'The Catch',
    tags: ['#Shawn', '#Nicknames'],
  },
  {
    question: 'Which (online) magazine is Gus subscribed to?',
    answer: 'Safecracker',
    tags: ['#Gus', '#Hobbies'],
  },
  {
    question: 'What is the name of the pub, in which Lassie passes out?',
    answer: "Tom Blair's Pub",
    tags: ['#Lassie', '#Locations'],
  },
  {
    question: "Who was Dt. Lassiter's partner before Dt. O'Hara?",
    answer: 'Dt. Barry',
    tags: ['#Lassie', '#SBPD'],
  },
  {
    question: 'What is Shawns favorite reaction on someone correcting him?',
    answer: "I've heard it both ways.",
    tags: ['#Shawn', '#Running Gags'],
  },
];

function renderCards(list) {
  list.forEach((element) => {
    const cardElement = document.createElement('section');
    cardElement.className = 'card';
    cardElement.setAttribute('data-js', 'card');
    cardElement.innerHTML = `
    <img class="bookmark" data-js="bookmark" src="./images/pineapple-icon.svg" alt="Bookmark Pineapple">
    <p class="card__question">${element.question}</p>
      <button class="answer__button" data-js="answerButton">
        <span class="hidden" data-js="answerSpanHidden">Hide</span>
        Answer
      </button>
      <p class="card__answer hidden" data-js="answerText">${element.answer}</p>
      <ul class="tag__list" role="list">
        ${element.tags.map((tag) => `<li class='tag'>${tag}</li>`).join('')}
      </ul>
    `;
    const main = document.querySelector('[data-js="homePage"]');
    main.appendChild(cardElement);
  });
}

function cards() {
  renderCards(data);
  const cardSet = document.querySelectorAll('[data-js=card]');

  cardSet.forEach((card) => {
    const bookmark = card.querySelector('[data-js=bookmark]');
    const answerButton = card.querySelector('[data-js=answerButton]');
    const answerText = card.querySelector('[data-js=answerText]');
    const answerSpanHidden = card.querySelector('[data-js=answerSpanHidden]');
    bookmark.addEventListener('click', () => {
      bookmark.classList.toggle('bookmark--booked');
    });
    answerButton.addEventListener('click', () => {
      answerSpanHidden.classList.toggle('hidden');
      answerText.classList.toggle('hidden');
    });
  });
}

export default cards;
