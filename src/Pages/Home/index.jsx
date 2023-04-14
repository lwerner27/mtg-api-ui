import CustomTextInput from '../../Components/CustomTextInput';
function Home() {
    return (
        <div className='container mx-auto flex flex-col items-center'>
            <h1 className='text-4xl text-center'>
                Welcome to the MTG API Explorer
            </h1>
            <CustomTextInput
                inputType='Text'
                inputId='card-search'
                inputPlaceholder='Zur the Enchanter'
                additionalClasses={'mt-5 md:w-full lg:w-1/2'}
                dataList='cardNames'
            />
            <datalist id='cardNames'>
                <option value='Zur the Enchanter' />
                <option value='Opt' />
                <option value='Pacifism' />
            </datalist>
        </div>
    );
}

export default Home;
