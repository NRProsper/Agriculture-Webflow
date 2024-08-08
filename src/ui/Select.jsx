

const Select = ({label, id, onChange, value, options}) => {
    return (
        <label className="text-darkGreen pl-1 w-full">
            <span className="text-[16px] font-medium block">{label}</span>
            <select
                id={id}
                onChange={onChange}
                value={value}
                className="mt-1 border border-gray capitalize focus:outline-none w-full rounded-[16px] px-5 py-3 focus:ring-1 focus:ring-lightGreen placeholder:font-light"
            >
                {
                    options.map((option, idx) => (
                        <option key={idx} value={option.id}>{option.name}</option>
                    ))
                }
            </select>
        </label>
    )
}

export default Select;