import './style.css';

(async function() {
  const { createBtn } = await import('./button');
  const bible = await import('./acf.json');

  bible.default.forEach((book) => {
    const bookBtn = createBtn(document.body);
    bookBtn.textContent = book.name;

    bookBtn.addEventListener('click', () => {
      displayChapters(book)
    });
  });

  function displayChapters(book) {
    updateView();

    let chapters = book['chapters'];

    let currentChapter = 1;
    chapters.forEach((chapter) => {
      const chapterBtn = createBtn(document.body);
      chapterBtn.textContent = currentChapter.toString();
      currentChapter++;

      chapterBtn.addEventListener('click', () => {

        displayVerses(chapter);
      });
    });
  }

  function displayVerses(chapter) {
    updateView();

    let currentVerse = 1;
    chapter.forEach((verse) => {
      const verseBtn = createBtn(document.body);
      verseBtn.textContent = `${currentVerse} ${verse}`;
      currentVerse++;
    });
  }

  function updateView() {
    document.body.innerHTML = '';
    window.scrollTo(0, 0);
  }
})();
