import React from 'react';
import { WordsServiceConsumer } from '../words-service-context';

const withWordsService = () => (Wrapped) => {

    return (props) => {
        return (
            <WordsServiceConsumer>
                {
                    (wordsService) => {
                        return (
                            <Wrapped {...props} wordsService={wordsService} />
                        )
                    }
                }
            </WordsServiceConsumer>
        );  
    }
}

export default withWordsService;