import React from 'react';
import { connect } from 'react-redux';
import { onChange } from '../../actions';
import './word-added.css';

const WordAdded = ({ id, english, transcription, ukrainian, example, onChange }) => {

    function onSubmit(e) {
        e.preventDefault();
        const text = {"id":id, "english":english, "transcription":transcription, "ukrainian":ukrainian, "example":example};
        const myArr = JSON.stringify(text);
        const blob = new Blob([myArr], {type: "text/plain"});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'words2.json';
        link.href = url;
        link.click();
    }
   
    return (
        <div>
            <form className="word-add" encType='application/json' onSubmit={onSubmit}>
                <fieldset>
                    <legend style={{marginLeft: '10px', color: '#606060'}}>Add new word</legend>
                    <input type="text" value={id} id="1" name="id" placeholder='#' className="word-add-input" style={{maxWidth: '50px'}} onChange={(e) => onChange(e)} /> 
                    <input type="text" value={english} id="2" name="english" placeholder='English' className="word-add-input" onChange={(e) => onChange(e)} /> 
                    <input type="text" value={transcription} id="3" name="transcription" placeholder='Transcription' className="word-add-input" onChange={(e) => onChange(e)} />
                    <input type="text" value={ukrainian} id="4" name="ukrainian" placeholder='Ukrainian' className="word-add-input" onChange={(e) => onChange(e)} /> 
                    <input type="text" value={example} id="5" name="example" placeholder='Example' className="word-add-input" onChange={(e) => onChange(e)} />  
                    <button key="search" type="submit" className="word-add-button">add</button>
                </fieldset>
            </form>
        </div>
    )
    
}

const mapStateToProps = ({ id, english, transcription, ukrainian, example }) => {
    return {
        id: id,
        english: english,
        transcription: transcription,
        ukrainian: ukrainian,
        example: example
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange:(val) => dispatch(onChange(val)),
        //onAddedToList: (id) => dispatch(wordAddedToList(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WordAdded);
