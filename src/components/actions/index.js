const wordsRequested = () => {
  return {
    type: 'FETCH_WORDS_REQUEST'
  };
};

const wordsLoaded = (newWords) => {
  return {
    type: 'FETCH_WORDS_SUCCESS',
    payload: newWords
  };
};

const wordsError = (error) => {
  return {
    type: 'FETCH_WORDS_FAILURE',
    payload: error
  };
};

export const onChange = (event) => {
  return {
    type: 'ON_CHANGE',
    payload: event
  };
};

export const fetchWords = (wordsService, dispatch) => () => {
  dispatch(wordsRequested());
  wordsService.getWords()
    .then((data) => dispatch(wordsLoaded(data)))
    .catch((err) => dispatch(wordsError(err)))
};
