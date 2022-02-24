import React,{ useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ErrorBoundry from '../error-boundry';
import WordsService from '../services/words-service';
import WordsServiceGerman from '../services/words-service-german';
import { WordsServiceProvider } from '../words-service-context';
import store from '../store';

import WordList from '../word-list/word-list';
import Play from '../play/play';
import Header from '../header/header';

import './app.css';

const App = () => {

    const wordsServiceUkraine = new WordsService();
    const wordsServiceGerman = new WordsServiceGerman();

    const [ service, setService ] = useState(wordsServiceUkraine);

    const onGermanService = () => { 
        setService(wordsServiceGerman);
    }

    const onUkrainianService = () => { 
        setService(wordsServiceUkraine);
    }

    return (
        
        <div>
            <Provider store={store}>
                <ErrorBoundry>
                    <WordsServiceProvider value={service}>
                        <Router>
                            <Header onUkrainianService={onUkrainianService} onGermanService={onGermanService}/>
                            <Routes>
                                    <Route exact path="/" element={<WordList />} />
                                    <Route exact path="/play" element={<Play />} />
                            </Routes>
                        </Router>
                    </WordsServiceProvider>
                </ErrorBoundry>
            </Provider>  
        </div>
    )
}

export default App;
