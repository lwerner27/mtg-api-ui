import { useState, useEffect } from 'react';
import getCardNames from '../../Helpers/getCardNames';

function Home() {
    const requestURL = 'http://www.mtg-api.com:3000/api/cards/test';
    const [cardNames, setCardNames] = useState(null);

    useEffect(() => {
        getCardNames(requestURL, setCardNames);
    }, []);

    return (
        <div className='mx-auto'>
            <div className='bg-cyan-100 w-full py-10'>
                <h1 className='text-4xl text-center pb-3'>
                    Welcome to the MTG API Explorer
                </h1>
                <div className='form-container w-fit mx-auto flex flex-col'>
                    <label htmlFor='card-search'>Card Name</label>
                    <input
                        type='text'
                        id='card-search'
                        placeholder='Zur the Enchanter'
                        // onChange={handleChange}
                        list='cardNames'
                        className='rounded-lg mt-1 focus:ring-gray-400 focus:border-gray-400'
                    />
                    <datalist id='cardNames'>
                        <option value='Zur the Enchanter' />
                        <option value='Opt' />
                        <option value='Pacifism' />
                    </datalist>
                </div>
            </div>

            {/* TODO */}
            <section id='random-commanders'>
                {/* 3 Random Commanders will be rendered here when the page loads. */}
            </section>
        </div>
    );
}

export default Home;
