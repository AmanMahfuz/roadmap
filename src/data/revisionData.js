// DevQuik: Spaced Repetition & Memory Recall System

export const SPACED_INTERVALS = [2, 7, 14]; // Days until revision is due

export const FLASHCARD_REVIEWS = {
  'html-day-1': {
    lessonId: 'html-day-1',
    topic: 'HTML Structure & Boilerplate',
    question: 'What is the purpose of the <!DOCTYPE html> declaration?',
    answerMl: '<!DOCTYPE html> എന്നത് ബ്രൗസറിനോട് പേജ് HTML5 സ്റ്റാൻഡേർഡിലാണ് എഴുതിയിരിക്കുന്നത് എന്ന് അറിയിക്കുന്ന ഒന്നാണ്.',
    answerEn: '<!DOCTYPE html> informs the browser that the document is written in modern HTML5 standards.'
  },
  'html-day-2': {
    lessonId: 'html-day-2',
    topic: 'Semantic Text Formatting',
    question: 'What is the semantic difference between <b> and <strong> tags?',
    answerMl: '<b> എന്നത് ടെക്സ്റ്റ് ബോൾഡ് ആക്കാൻ മാത്രം ഉപയോഗിക്കുമ്പോൾ <strong> എന്നത് സുപ്രധാനമായ വിവരമാണെന്ന് കാണിച്ച് ബോൾഡ് ആക്കുന്നു.',
    answerEn: '<b> is purely visual bold styling, while <strong> carries semantic importance for accessibility & SEO.'
  },
  'css-day-1': {
    lessonId: 'css-day-1',
    topic: 'CSS Selectors & Specificity',
    question: 'Rank CSS selector specificity from highest to lowest: Class, ID, Element.',
    answerMl: 'ഏറ്റവും കൂടുതൽ Specificity: ID (#) -> Class (.) -> Element (tag).',
    answerEn: 'Highest to lowest specificity: ID (#) > Class (.) > Element (tag).'
  },
  'js-day-1': {
    lessonId: 'js-day-1',
    topic: 'JS Const vs Let',
    question: 'Can you re-assign a variable declared with const?',
    answerMl: 'ഇല്ല, const വച്ച് ഉണ്ടാക്കിയ വേരിയബിളിലേക്ക് പുതിയ മൂല്യം നൽകാൻ അനുവാദമില്ല (Cannot reassign).',
    answerEn: 'No, variables declared with const cannot be reassigned to a new value binding.'
  }
};
