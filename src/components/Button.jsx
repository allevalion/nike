import { buttonHoverClasses } from '../constants/hoverClasses';

const Button = ({
  onClick = '',
  label,
  iconURL,
  hoverTransition = '',
  iconHoverTransition = '',
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  const buttonHoverClass = buttonHoverClasses[hoverTransition] || '';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group
        flex justify-center items-center gap-2
        px-7 py-4 border border-coral-red
        font-montserrat text-lg leading-none cursor-pointer rounded-full
        transition-all duration-500
        ${buttonHoverClass}

        ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'bg-coral-red text-white '}
        ${fullWidth && 'w-full'}
      `}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          aria-hidden="true"
          className={`
          ml-2 rounded-full w-5 h-5
          transition-transform duration-300
          ${iconHoverTransition}
        `}
        />
      )}
    </button>
  );
};

export default Button;
