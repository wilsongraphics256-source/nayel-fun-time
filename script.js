const WORD_BANK = {
  1: [
    word('BOOK', 'ENGLISH', 'Something we read at school.', 'It has pages.', 'easy'), word('PEN', 'ENGLISH', 'A tool used for writing.', 'It uses ink.', 'easy'), word('TEACHER', 'ENGLISH', 'A person who helps children learn.', 'They teach lessons.', 'easy'), word('SCHOOL', 'ENGLISH', 'A place where children learn.', 'You go there for lessons.', 'easy'), word('NUMBER', 'MATHEMATICS', 'It tells how many there are.', 'One, two and three are examples.', 'easy'), word('CIRCLE', 'MATHEMATICS', 'A round shape with no corners.', 'A ball can look like this.', 'easy'), word('WATER', 'SCIENCE', 'We drink it to stay alive.', 'It is clear and has no fixed shape.', 'easy'), word('PLANT', 'SCIENCE', 'A living thing that grows in soil.', 'It has roots and leaves.', 'easy'), word('FARM', 'AGRICULTURE', 'A place where crops or animals are kept.', 'Food can be grown here.', 'easy'), word('FAMILY', 'SOCIAL STUDIES', 'People who care for one another at home.', 'Parents and children belong to one.', 'easy'), word('PRAYER', 'RELIGIOUS EDUCATION', 'Words spoken to talk to God.', 'People may say it quietly or together.', 'easy')
  ],
  2: [
    word('PENCIL', 'ENGLISH', 'A school tool used to write or draw.', 'It can be sharpened.', 'easy'), word('LETTER', 'ENGLISH', 'A written sign that makes part of a word.', 'A, B and C are examples.', 'easy'), word('STORY', 'ENGLISH', 'A tale about people or events.', 'It can be read in a book.', 'easy'), word('ADDITION', 'MATHEMATICS', 'Putting numbers together.', 'The plus sign is used.', 'easy'), word('SHAPE', 'MATHEMATICS', 'The form or outline of an object.', 'A square has a special one.', 'easy'), word('ANIMAL', 'SCIENCE', 'A living thing that can move and feed.', 'A goat is an example.', 'easy'), word('SUN', 'SCIENCE', 'The star that gives Earth light and heat.', 'You see it in the daytime.', 'easy'), word('MAIZE', 'AGRICULTURE', 'A common food crop grown by farmers.', 'It produces grains.', 'easy'), word('UGANDA', 'SOCIAL STUDIES', 'The country where Kampala is the capital.', 'It is called the Pearl of Africa.', 'easy'), word('MARKET', 'SOCIAL STUDIES', 'A place where people buy and sell things.', 'Farmers may take crops here.', 'easy'), word('KINDNESS', 'RELIGIOUS EDUCATION', 'Being caring and helpful to other people.', 'It is shown through good actions.', 'easy')
  ],
  3: [
    word('SENTENCE', 'ENGLISH', 'A group of words that gives a complete idea.', 'It begins with a capital letter.', 'medium'), word('QUESTION', 'ENGLISH', 'Words used to ask for information.', 'It often ends with a question mark.', 'medium'), word('SUBTRACTION', 'MATHEMATICS', 'Taking one number away from another.', 'It makes a number smaller.', 'medium'), word('FRACTION', 'MATHEMATICS', 'A part of a whole number.', 'One half is an example.', 'medium'), word('ENERGY', 'SCIENCE', 'The ability to do work or make things happen.', 'The sun gives us some.', 'medium'), word('HEALTH', 'SCIENCE', 'The state of being well in body and mind.', 'Good food helps protect it.', 'medium'), word('RAINFALL', 'GEOGRAPHY', 'Water that falls from clouds.', 'It helps crops grow.', 'medium'), word('COMMUNITY', 'SOCIAL STUDIES', 'People living and working in one area.', 'A village can be one.', 'medium'), word('CASSAVA', 'AGRICULTURE', 'A root crop grown for food in Uganda.', 'Its roots can be cooked or dried.', 'medium'), word('HYGIENE', 'HEALTH', 'Keeping the body and surroundings clean.', 'Washing hands is part of it.', 'medium')
  ],
  4: [
    word('MULTIPLICATION', 'MATHEMATICS', 'Adding equal groups quickly.', 'The times sign is used.', 'medium'), word('DIVISION', 'MATHEMATICS', 'Sharing a number into equal groups.', 'It is the opposite of multiplication.', 'medium'), word('DECIMAL', 'MATHEMATICS', 'A number written using a point.', 'Money can be written this way.', 'medium'), word('ENVIRONMENT', 'SCIENCE', 'Everything around a living thing.', 'It includes air, soil, water and people.', 'medium'), word('DISEASE', 'HEALTH', 'An illness that affects the body.', 'Malaria is an example.', 'medium'), word('CULTURE', 'SOCIAL STUDIES', 'The way of life of a group of people.', 'It includes language, food and customs.', 'medium'), word('DISTRICT', 'SOCIAL STUDIES', 'An area used to help govern Uganda.', 'Kampala is one example.', 'medium'), word('FERTILIZER', 'AGRICULTURE', 'A substance added to soil to help crops grow.', 'It gives plants nutrients.', 'medium'), word('MOUNTAIN', 'GEOGRAPHY', 'A very high natural landform.', 'Mount Elgon is one in Uganda.', 'medium'), word('SANITATION', 'HEALTH', 'Safe ways of managing waste and keeping places clean.', 'It helps prevent disease.', 'medium'), word('KAMPALA', 'SOCIAL STUDIES', 'The capital city of Uganda.', 'It is Uganda’s main city.', 'easy'), word('AFFORESTATION', 'GEOGRAPHY', 'The planting of trees where there were few or none.', 'It helps create a forest.', 'hard'), word('REFORESTATION', 'GEOGRAPHY', 'Planting trees again where forests were cut down.', 'It restores a forest.', 'hard'), word('SETTLEMENT', 'SOCIAL STUDIES', 'A place where people live.', 'A village is one type.', 'medium')
  ],
  5: [
    word('ADJECTIVE', 'ENGLISH', 'A word that describes a noun.', 'Big, red and clever are examples.', 'medium'), word('SYNONYM', 'ENGLISH', 'A word with the same or nearly the same meaning.', 'Happy and glad can be one pair.', 'medium'), word('DECIMAL', 'MATHEMATICS', 'A number with a whole part and a part less than one.', 'It uses a decimal point.', 'medium'), word('PERIMETER', 'MATHEMATICS', 'The distance around a shape.', 'Add all the outside sides.', 'medium'), word('DIGESTION', 'SCIENCE', 'The process of breaking down food in the body.', 'It begins when you eat.', 'medium'), word('NUTRITION', 'HEALTH', 'The study of how food keeps us healthy.', 'A balanced diet supports it.', 'medium'), word('CLIMATE', 'GEOGRAPHY', 'The usual weather of a place over a long time.', 'It is not the same as today’s weather.', 'hard'), word('TRANSPORT', 'SOCIAL STUDIES', 'Moving people or goods from one place to another.', 'Roads and vehicles help with it.', 'medium'), word('COFFEE', 'AGRICULTURE', 'A crop grown for its beans and important to Uganda.', 'Its beans can be roasted.', 'medium'), word('VEGETATION', 'GEOGRAPHY', 'The plants that grow in a particular place.', 'Forests are a type of it.', 'hard'), word('TRANSPORTATION', 'SOCIAL STUDIES', 'The movement of people and goods from one place to another.', 'Road, water and air are types.', 'hard'), word('COMMUNICATION', 'SOCIAL STUDIES', 'The sharing of information between people.', 'A phone can help with it.', 'hard'), word('RAINFOREST', 'GEOGRAPHY', 'A thick forest found in a place with much rain.', 'It has many trees and plants.', 'hard'), word('FISHING', 'AGRICULTURE', 'The activity of catching fish for food or sale.', 'It can take place on a lake.', 'medium')
  ],
  6: [
    word('ADVERB', 'ENGLISH', 'A word that describes how an action happens.', 'Quickly and slowly are examples.', 'hard'), word('PARAGRAPH', 'ENGLISH', 'A group of sentences about one main idea.', 'It starts on a new line.', 'medium'), word('EQUATION', 'MATHEMATICS', 'A mathematical statement showing two things are equal.', 'It may contain an equals sign.', 'hard'), word('ANGLE', 'MATHEMATICS', 'The space between two lines that meet.', 'It can be acute, right or obtuse.', 'medium'), word('PHOTOSYNTHESIS', 'SCIENCE', 'The process by which green plants make food.', 'Plants use sunlight, water and carbon dioxide.', 'hard'), word('RESPIRATION', 'SCIENCE', 'The process of releasing energy from food.', 'Living things need oxygen for it.', 'hard'), word('POPULATION', 'SOCIAL STUDIES', 'The number of people living in an area.', 'A census can count it.', 'hard'), word('TOURISM', 'SOCIAL STUDIES', 'Travel to places for enjoyment or learning.', 'It supports many businesses.', 'medium'), word('IRRIGATION', 'AGRICULTURE', 'Supplying water to crops when rain is not enough.', 'Channels or pipes can do it.', 'hard'), word('LANDFORM', 'GEOGRAPHY', 'A natural feature of the Earth’s surface.', 'A hill and valley are examples.', 'medium')
  ],
  7: [
    word('COMPREHENSION', 'ENGLISH', 'Understanding what has been read.', 'It means finding the meaning in a passage.', 'hard'), word('CONJUNCTION', 'ENGLISH', 'A word that joins words or groups of words.', 'And, but and because are examples.', 'hard'), word('PERCENTAGE', 'MATHEMATICS', 'A number expressed out of one hundred.', 'The symbol is %.', 'hard'), word('VOLUME', 'MATHEMATICS', 'The amount of space an object or container takes up.', 'It can be measured in litres.', 'hard'), word('ECOSYSTEM', 'SCIENCE', 'Living things and their non-living surroundings working together.', 'A lake can be one.', 'hard'), word('CONSERVATION', 'SCIENCE', 'The careful protection of natural resources.', 'It helps protect forests and wildlife.', 'hard'), word('GOVERNMENT', 'SOCIAL STUDIES', 'The group that leads and manages a country.', 'It makes and enforces laws.', 'hard'), word('COMMUNICATION', 'SOCIAL STUDIES', 'The sharing of information between people.', 'Talking, writing and phones help with it.', 'hard'), word('HARVEST', 'AGRICULTURE', 'The gathering of mature crops from a field.', 'Farmers do it after crops grow.', 'medium'), word('VEGETATION', 'GEOGRAPHY', 'All the plant life found in a place.', 'It changes with climate and soil.', 'hard'), word('COLONIALISM', 'SOCIAL STUDIES', 'A system where one country controls another country.', 'Uganda experienced it before independence.', 'hard'), word('DEMOCRACY', 'SOCIAL STUDIES', 'A system where people choose their leaders.', 'Voting is important in it.', 'hard'), word('CENSUS', 'SOCIAL STUDIES', 'An official count of the people in a country.', 'It helps show population size.', 'hard'), word('DENSITY', 'GEOGRAPHY', 'The number of people living in a given area.', 'Population is compared with land area.', 'hard'), word('MISSIONARIES', 'SOCIAL STUDIES', 'People who travelled to teach their religion.', 'They helped spread Christianity in East Africa.', 'hard'), word('DECOLONISATION', 'SOCIAL STUDIES', 'The process by which a country gains freedom from colonial rule.', 'It leads to independence.', 'hard'), word('EAST AFRICA', 'SOCIAL STUDIES', 'The region containing Uganda, Kenya and Tanzania.', 'Uganda is part of it.', 'medium')
  ]
};

function word(wordText, subject, clue, hint, difficulty) {
  const subjectNames = {
    MATHEMATICS: 'Mathematics',
    ENGLISH: 'English',
    'SOCIAL STUDIES': 'Social Studies',
    SCIENCE: 'Science',
    AGRICULTURE: 'Science',
    GEOGRAPHY: 'Science',
    HEALTH: 'Science',
    'RELIGIOUS EDUCATION': 'Religious education'
  };
  return { word: wordText, subject: subjectNames[subject] || subject, clue, hint, difficulty };
}

const STORAGE_KEY = 'nayel-fun-time';
const state = {
  selectedClass: 1,
  questions: [],
  questionIndex: 0,
  score: 0,
  correctAnswers: 0,
  lives: 3,
  wrongAnswers: 0,
  attempts: 0,
  scrambledLetters: [],
  selectedLetters: [],
  hintUsed: false,
  seconds: 20,
  timerId: null,
  locked: false,
  soundOn: true,
  timerOn: true,
  highScore: 0,
  playerName: ''
};

const $ = id => document.getElementById(id);
const screens = document.querySelectorAll('.screen');
window.addEventListener('load', () => setTimeout(() => $('loading-screen').classList.add('loaded'), 650));
const settings = loadSettings();
state.selectedClass = settings.selectedClass;
state.soundOn = settings.soundOn;
state.timerOn = settings.timerOn;
state.highScore = settings.highScore;
state.playerName = settings.playerName;

function loadSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return {
      selectedClass: Number(saved.selectedClass) >= 1 && Number(saved.selectedClass) <= 7 ? Number(saved.selectedClass) : 1,
      soundOn: saved.soundOn !== false,
      timerOn: saved.timerOn !== false,
      highScore: Number(saved.highScore) || 0,
      playerName: typeof saved.playerName === 'string' ? saved.playerName.trim().slice(0, 18) : ''
    };
  } catch {
    return { selectedClass: 1, soundOn: true, timerOn: true, highScore: 0, playerName: '' };
  }
}

function saveSettings() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ selectedClass: state.selectedClass, soundOn: state.soundOn, timerOn: state.timerOn, highScore: state.highScore, playerName: state.playerName }));
  } catch {
    // The game remains playable if browser storage is unavailable.
  }
}

function showScreen(screenId) {
  screens.forEach(screen => screen.classList.toggle('active', screen.id === screenId));
}

function selectClass(classLevel) {
  state.selectedClass = classLevel;
  document.querySelectorAll('.class-button').forEach(button => button.classList.toggle('selected', Number(button.dataset.class) === classLevel));
  $('selected-class-label').textContent = `P${classLevel}`;
  saveSettings();
}

function shuffleArray(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function scrambleWord(answer) {
  const cleanAnswer = answer.replace(/\s/g, '');
  let letters = cleanAnswer.split('');
  let scrambled = cleanAnswer;
  while (scrambled === cleanAnswer && cleanAnswer.length > 1) {
    letters = shuffleArray(letters);
    scrambled = letters.join('');
  }
  return letters;
}

function renderLetterBank() {
  $('letter-row').innerHTML = state.scrambledLetters.map((letter, index) => {
    const selected = state.selectedLetters.some(item => item.index === index);
    return `<button class="letter-tile${selected ? ' selected' : ''}" type="button" data-letter-index="${index}" ${selected ? 'disabled' : ''} style="animation-delay:${index * 35}ms">${letter}</button>`;
  }).join('');
  document.querySelectorAll('[data-letter-index]').forEach(button => button.addEventListener('click', () => chooseLetter(Number(button.dataset.letterIndex))));
}

function renderAnswerTray() {
  $('answer-row').innerHTML = state.selectedLetters.length
    ? state.selectedLetters.map((item, index) => `<button class="answer-tile" type="button" data-answer-index="${index}" aria-label="Remove ${item.letter}">${item.letter}</button>`).join('')
    : '<span class="answer-placeholder">Tap letters above to build the word</span>';
  document.querySelectorAll('[data-answer-index]').forEach(button => button.addEventListener('click', () => removeLetter(Number(button.dataset.answerIndex))));
}

function chooseLetter(index) {
  if (state.locked || state.selectedLetters.some(item => item.index === index)) return;
  state.selectedLetters.push({ index, letter: state.scrambledLetters[index] });
  renderLetterBank();
  renderAnswerTray();
  playTone('click');
}

function removeLetter(index) {
  if (state.locked) return;
  state.selectedLetters.splice(index, 1);
  renderLetterBank();
  renderAnswerTray();
}

function clearAnswer() {
  if (state.locked) return;
  state.selectedLetters = [];
  renderLetterBank();
  renderAnswerTray();
}

function startGame() {
  stopTimer();
  state.questions = shuffleArray(WORD_BANK[state.selectedClass]);
  state.questionIndex = 0;
  state.score = 0;
  state.correctAnswers = 0;
  state.lives = 3;
  state.wrongAnswers = 0;
  state.attempts = 0;
  state.seconds = 20;
  state.locked = false;
  showScreen('game-screen');
  renderQuestion();
  if (state.timerOn) startTimer();
  playTone('start');
}

function renderQuestion() {
  const currentQuestion = state.questions[state.questionIndex];
  if (!currentQuestion) return finishGame(true);
  state.hintUsed = false;
  state.attempts = 0;
  state.seconds = 20;
  state.locked = false;
  const total = state.questions.length;
  const progress = Math.round((state.questionIndex / total) * 100);
  $('game-level').textContent = `PRIMARY ${state.selectedClass}`;
  $('difficulty-label').textContent = currentQuestion.difficulty.toUpperCase();
  $('question-label').textContent = `Question ${state.questionIndex + 1} of ${total}`;
  $('progress-percent').textContent = `${progress}%`;
  $('progress-fill').style.width = `${progress}%`;
  $('subject-label').textContent = currentQuestion.subject;
  $('clue-number').textContent = `#${String(state.questionIndex + 1).padStart(2, '0')}`;
  $('clue-text').textContent = currentQuestion.clue;
  $('clue-hint-text').textContent = 'Think carefully. You can ask for a hint if you need one.';
  state.scrambledLetters = scrambleWord(currentQuestion.word);
  state.selectedLetters = [];
  renderLetterBank();
  renderAnswerTray();
  $('feedback').textContent = '';
  $('feedback').className = 'feedback';
  $('answer-reveal').hidden = true;
  $('revealed-answer').textContent = '';
  $('next-question-button').textContent = 'NEXT QUESTION →';
  $('hint-button').disabled = false;
  updateStats();
}

function updateStats() {
  $('score-value').textContent = state.score;
  $('lives-value').textContent = state.lives;
  $('time-value').textContent = state.timerOn ? state.seconds : '∞';
  $('time-stat').classList.toggle('time-warning', state.timerOn && state.seconds <= 5 && state.seconds > 0);
}

function startTimer() {
  state.timerId = setInterval(() => {
    state.seconds -= 1;
    updateStats();
    if (state.seconds > 0 && state.seconds <= 5) playTone('warning');
    if (state.seconds <= 0) finishGame(false, 'time');
  }, 1000);
}

function stopTimer() {
  if (state.timerId) clearInterval(state.timerId);
  state.timerId = null;
}

function submitAnswer(event) {
  event.preventDefault();
  if (state.locked) return;
  const answer = state.selectedLetters.map(item => item.letter).join('').toUpperCase();
  const currentQuestion = state.questions[state.questionIndex];
  if (!answer) {
    showFeedback('Tap the letters to build an answer first.', 'info');
    return;
  }
  if (answer === currentQuestion.word.replace(/\s/g, '').toUpperCase()) {
    state.locked = true;
    state.correctAnswers += 1;
    const points = state.hintUsed ? 10 : 15;
    state.score += points;
    showFeedback(`🎉 CORRECT! +${points} points`, 'correct');
    $('clue-card').classList.add('success-glow');
    $('revealed-answer').textContent = currentQuestion.word;
    $('answer-reveal').hidden = false;
    $('answer-reveal').querySelector('span').textContent = '🎉 CORRECT ANSWER';
    $('answer-reveal').querySelector('small').textContent = 'Great work! Continue when you are ready.';
    $('hint-button').disabled = true;
    $('shuffle-button').disabled = true;
    updateStats();
    playTone('correct');
  } else {
    state.attempts += 1;
    state.lives -= 1;
    state.wrongAnswers += 1;
    const attemptsLeft = 3 - state.attempts;
    showFeedback(attemptsLeft > 0 ? `❌ TRY AGAIN! ${attemptsLeft} ${attemptsLeft === 1 ? 'attempt' : 'attempts'} left.` : '📚 Let us learn the answer together.', 'wrong');
    $('clue-card').classList.remove('shake');
    void $('clue-card').offsetWidth;
    $('clue-card').classList.add('shake');
    playTone('wrong');
    updateStats();
    if (state.attempts >= 3) revealAnswer();
  }
}

function revealAnswer() {
  const currentQuestion = state.questions[state.questionIndex];
  state.locked = true;
  $('revealed-answer').textContent = currentQuestion.word;
  $('answer-reveal').hidden = false;
  $('hint-button').disabled = true;
  $('shuffle-button').disabled = true;
  $('feedback').textContent = `The correct word was ${currentQuestion.word}.`;
  $('feedback').className = 'feedback info';
}

function nextQuestion() {
  if (!state.locked) return;
  $('clue-card').classList.remove('success-glow');
  $('shuffle-button').disabled = false;
  state.questionIndex += 1;
  state.questionIndex < state.questions.length ? renderQuestion() : finishGame(true);
}

function showFeedback(message, type) {
  $('feedback').textContent = message;
  $('feedback').className = `feedback ${type}`;
}

function useHint() {
  if (state.hintUsed || state.locked) return;
  state.hintUsed = true;
  state.score = Math.max(0, state.score - 5);
  $('clue-hint-text').textContent = `💡 Hint: ${state.questions[state.questionIndex].hint}`;
  $('hint-button').disabled = true;
  showFeedback('Hint unlocked. You can still earn 10 points!', 'info');
  updateStats();
  playTone('click');
}

function shuffleLetters() {
  if (state.locked) return;
  const currentQuestion = state.questions[state.questionIndex];
  state.scrambledLetters = scrambleWord(currentQuestion.word);
  state.selectedLetters = [];
  renderLetterBank();
  renderAnswerTray();
  showFeedback('🔀 Letters shuffled!', 'info');
  playTone('click');
}

function finishGame(completed, reason) {
  stopTimer();
  state.locked = true;
  if (completed) {
    $('progress-fill').style.width = '100%';
    $('progress-percent').textContent = '100%';
  }
  if (state.score > state.highScore) {
    state.highScore = state.score;
    saveSettings();
  }
  $('home-high-score').textContent = `${state.highScore} points`;
  $('final-score').textContent = state.score;
  $('correct-count').textContent = state.correctAnswers;
  $('wrong-count').textContent = state.wrongAnswers;
  $('best-score').textContent = state.highScore;
  $('result-title').textContent = completed ? 'WELL DONE!' : reason === 'time' ? 'TIME IS UP!' : 'KEEP GOING!';
  $('result-message').textContent = completed ? 'Excellent work! Every question helps you learn.' : reason === 'time' ? 'Great effort! Try again and beat your score.' : 'Good effort! You can learn more with another try.';
  showScreen('result-screen');
  playTone(completed ? 'complete' : 'wrong');
}

let audioContext;
let installPrompt;

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  installPrompt = event;
  $('install-button').hidden = false;
});

window.addEventListener('appinstalled', () => {
  installPrompt = null;
  $('install-button').hidden = true;
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('service-worker.js?v=4'));
}

function playTone(kind) {
  if (!state.soundOn) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    const tones = { click: [440, .05], start: [520, .08], correct: [660, .12], wrong: [170, .14], warning: [290, .07], complete: [880, .2] };
    const [frequency, duration] = tones[kind] || tones.click;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.frequency.value = frequency;
    oscillator.type = kind === 'wrong' ? 'sawtooth' : 'sine';
    gain.gain.setValueAtTime(.06, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, audioContext.currentTime + duration);
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
  } catch {
    // Sound is optional and may be unavailable in some browsers.
  }
}

function updateSoundControls() {
  $('sound-button').textContent = state.soundOn ? '🔊' : '🔇';
  $('sound-button').setAttribute('aria-pressed', String(state.soundOn));
  $('sound-setting').checked = state.soundOn;
  $('timer-setting').checked = state.timerOn;
}

function openModal(id) { $(id).showModal(); }
function closeModal(id) { $(id).close(); }

function updatePlayerName() {
  $('player-name').textContent = state.playerName || 'Player Name';
}

function openNameModal() {
  $('name-input').value = state.playerName;
  openModal('name-modal');
  $('name-input').focus();
}

document.querySelectorAll('.class-button').forEach(button => button.addEventListener('click', () => selectClass(Number(button.dataset.class))));
$('play-button').addEventListener('click', startGame);
$('play-again-button').addEventListener('click', startGame);
$('answer-form').addEventListener('submit', submitAnswer);
$('clear-answer-button').addEventListener('click', clearAnswer);
$('hint-button').addEventListener('click', useHint);
$('shuffle-button').addEventListener('click', shuffleLetters);
$('next-question-button').addEventListener('click', nextQuestion);
$('home-button').addEventListener('click', () => { stopTimer(); showScreen('home-screen'); });
$('game-home-button').addEventListener('click', () => { stopTimer(); showScreen('home-screen'); });
$('result-home-button').addEventListener('click', () => showScreen('home-screen'));
$('high-score-button').addEventListener('click', () => { $('modal-high-score').textContent = state.highScore; openModal('high-score-modal'); });
$('settings-button').addEventListener('click', () => openModal('settings-modal'));
$('settings-card').addEventListener('click', () => openModal('settings-modal'));
$('player-profile-button').addEventListener('click', openNameModal);
$('name-form').addEventListener('submit', event => {
  event.preventDefault();
  const name = $('name-input').value.trim().replace(/\s+/g, ' ');
  if (!name) return;
  state.playerName = name.slice(0, 18);
  updatePlayerName();
  saveSettings();
  closeModal('name-modal');
  playTone('click');
});
$('sound-button').addEventListener('click', () => { state.soundOn = !state.soundOn; updateSoundControls(); saveSettings(); playTone('click'); });
$('sound-setting').addEventListener('change', event => { state.soundOn = event.target.checked; updateSoundControls(); saveSettings(); });
$('timer-setting').addEventListener('change', event => { state.timerOn = event.target.checked; saveSettings(); });
$('install-button').addEventListener('click', async () => {
  if (!installPrompt) return;
  installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt = null;
  $('install-button').hidden = true;
});
document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => closeModal(button.dataset.close)));
document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); }));

selectClass(state.selectedClass);
updateSoundControls();
updatePlayerName();
$('home-high-score').textContent = `${state.highScore} points`;
if (!state.playerName) setTimeout(openNameModal, 250);
