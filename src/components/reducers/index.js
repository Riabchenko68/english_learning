
const initialState = {
    words: [],
    loading: true,
    error: null,
    id: '',
    english: '',
    transcription: '',
    ukrainian: '',
    example: ''
};
  
const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case 'FETCH_WORDS_REQUEST':
      return {
        ...state,
        words: [],
        loading: true,
        error: null
      };

    case 'FETCH_WORDS_SUCCESS':
      return {
        ...state,
        words: action.payload,
        loading: false,
        error: null
      };
      
    case 'FETCH_WORDS_FAILURE':
      return {
        ...state,
        words: [],
        loading: false,
        error: action.payload
      };
    
    case 'ON_CHANGE':
      const value = action.payload.target.value;
      return {
        ...state,
        [action.payload.target.name]: value
      };

    default:
      return state;
  }
};
  
export default reducer;