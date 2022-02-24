import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { withWordsService } from '../hoc';
import { fetchWords } from '../actions';
import { compose } from '../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './word-list.css';

const WordList = ({ words }) => {
  return (
    <div>  
      <div className='word-list'>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>English</th>
              <th>Transcription</th>
              <th>Translate</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            {
              words && words.length > 0 && words.map((word) => {
                return (
                  <tr key={word.id}>
                    <td>{word.id}</td>
                    <td style={{color: 'blue', fontSize: '1.6em'}}>{word.english}</td>
                    <td>{word.transcription}</td>
                    <td style={{color: 'green', fontSize: '1.6em'}}>{word.translate}</td>
                    <td>{word.example}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div> 
  )
}

const WordListContainer = ({ words, loading, error, fetchWords }) => {

  useEffect(() => {
    fetchWords()
  }, [fetchWords]);
  
  if(loading) {
    return <Spinner />
  }

  if(error) {
    return <ErrorIndicator />
  }

  return <WordList words={words} />
    
}

const mapStateToProps = ({ words, loading, error }) => {
  return { words, loading, error };
};

const mapDispatchToProps = (dispatch, { wordsService }) => {
  return {
    fetchWords: fetchWords( wordsService, dispatch ) 
  }
};

export default compose(
  withWordsService(),
  connect(mapStateToProps, mapDispatchToProps)
)(WordListContainer);
