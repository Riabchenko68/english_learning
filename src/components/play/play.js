import React, { useEffect } from "react";
import { connect } from 'react-redux';

import { withWordsService } from '../hoc';
import { fetchWords, onChange } from '../actions';
import { compose } from '../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './play.css';

const Play = ({ words, onChange, onNextWord }) => {
    
    const id = Math.floor(Math.random()*words.length) + 2;

    return (
        <div className="container">
            <div className="row">    
                <div className="play">
                    {words && words.length > 0 && words.map((word) => {
                        if ( word.id === id ) {
                            return (
                                <div key={word.id}>
                                    <h3 className="play-header-ukrainian">{word.translate}</h3>
                                    <input type="text" placeholder='enter english word' className="play-input" onChange={(e) => onChange(e)} />
                                    <button className="play-next" onClick={onNextWord}>next</button>
                                    <div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <h1 style={{marginTop: '40px'}}>check</h1>
                                            </div>
                                            <div className="flip-card-back">
                                                <h1>{word.english}</h1>
                                                <p style={{fontSize: '0.8em'}}>{word.transcription}</p>
                                                <p style={{fontSize: '0.8em'}}>{word.example}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

const PlayContainer = ({ words, loading, error, fetchWords, onChange}) => {

    useEffect(() => {
        fetchWords()
      }, [fetchWords]);

    function onNextWord() {
        fetchWords();
    }
    
    if(loading) {
    return <Spinner />
    }

    if(error) {
    return <ErrorIndicator />
    }

    return <Play words={words} onChange={onChange} onNextWord={onNextWord}/>

}
  
  const mapStateToProps = ({ words, loading, error }) => {
    return { words, loading, error };
  };
  
  const mapDispatchToProps = (dispatch, { wordsService }) => {
    return {
      fetchWords: fetchWords( wordsService, dispatch ),
      onChange:(val) => dispatch(onChange(val))
    }
  };
  
  export default compose(
    withWordsService(),
    connect(mapStateToProps, mapDispatchToProps)
  )(PlayContainer);
  