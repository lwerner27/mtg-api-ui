function CustomTextInput({
    inputId,
    inputType,
    inputPlaceholder,
    dataList,
    additionalClasses,
}) {
    const handleChange = (event) => {
        console.log(event.target.value);
    };

    return (
        <input
            type={inputType}
            id={inputId}
            placeholder={inputPlaceholder}
            onChange={handleChange}
            list={dataList}
            className={`rounded-lg ${additionalClasses}`}
        />
    );
}

export default CustomTextInput;
