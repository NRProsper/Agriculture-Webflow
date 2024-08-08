const ActionButton = ({ onClick, children, type, disabled }) => {
    const getBackgroundColor = () => {
        switch (type) {
            case 'primary':
                return 'bg-darkGreen';
            case 'warning':
                return 'bg-yellow';
            case 'error':
                return 'bg-red-400';
            default:
                return 'bg-yellow';
        }
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`rounded-[16px] px-[39px] py-4 items-center text-white ${getBackgroundColor()} ${disabled ? "cursor-not-allowed":"cursor-pointer"}`}
        >
            {children}
        </button>
    );
};

export default ActionButton;
