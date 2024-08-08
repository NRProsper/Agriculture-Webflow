

const Input = ({label, id, type="text", placeholder, onChange, value}) => {
    return (
        <label className="text-darkGreen pl-1 w-full">
            <span className="text-[16px] font-medium block">{label}</span>
            <input
                type={type}
                value={value}
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                className="mt-1 border border-gray focus:outline-none w-full rounded-[16px] px-5 py-3 focus:ring-1 focus:ring-lightGreen placeholder:font-light"
            />
        </label>
    )
}

export default Input;