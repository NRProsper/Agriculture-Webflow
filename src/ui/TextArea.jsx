
const TextArea = ({label, id,  onChange, value, className}) => {
    return (
        <label className={`text-darkGreen pl-1 w-full ${className}`}>
            <span className="text-[16px] font-medium block">{label}</span>
            <textarea
                className="mt-1 border border-gray focus:outline-none w-full rounded-[16px] px-5 py-3 focus:ring-1 focus:ring-lightGreen placeholder:font-light"
                value={value}
                id={id}
                onChange={onChange}
                rows="3"/>
        </label>
    )
}


export default TextArea;