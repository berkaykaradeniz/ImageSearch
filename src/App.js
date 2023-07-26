import { useState } from 'react';
import './App.css';
import SearchHeader from './SearchHeader';
import searchImages from './api';
import ImageList from './components/ImageList';

function App() {
    const [Images, setImages] = useState([]);
    const handleSubmit = async (term) => {
        const result = await searchImages(term);
        setImages(result);
    };

    return (
        <div className="App">
            <SearchHeader search={handleSubmit} />
            <ImageList Images={Images} /> 
        </div>
    );
}

export default App;
