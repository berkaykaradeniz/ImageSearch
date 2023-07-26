import { useState } from 'react';

function SearchHeader({ search }) {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        search(data);
    };
    const handleChange = (event) => {
        setData(event.target.value)
    }
    const [data, setData] = useState('');
    return (
        <div className="searchDiv">
            <form onSubmit={handleFormSubmit}>
                <label>Ne Arıyorsunuz ?</label>
                <input value={data} onChange={handleChange} type="text" />
            </form>
        </div>
    );
}

export default SearchHeader;
