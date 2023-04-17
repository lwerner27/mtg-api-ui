function CustomTextInput({
    inputId,
    inputType,
    inputPlaceholder,
    inputSetter,
    dataList,
    additionalClasses,
}) {
    const handleChange = (event) => {
        inputSetter(event.target.value);
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
