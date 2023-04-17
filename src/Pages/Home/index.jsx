import { useState } from 'react';
import CustomTextInput from '../../Components/CustomTextInput';

function Home() {
    const [searchTerm, setSearchTerm] = useState(null);
    const cardNames = null;

    return (
        <div className='mx-auto'>
            <div className='bg-cyan-100 w-full py-10'>
                <h1 className='text-4xl text-center pb-3'>
                    Welcome to the MTG API Explorer
                </h1>
                <div className='form-container w-fit mx-auto flex flex-col'>
                    <label htmlFor='card-search'>Card Name</label>
                    <CustomTextInput
                        inputType='Text'
                        inputId='card-search'
                        inputPlaceholder='Zur the Enchanter'
                        additionalClasses={
                            'mt-1 focus:ring-gray-400 focus:border-gray-400'
                        }
                        dataList='cardNames'
                        inputSetter={setSearchTerm}
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
