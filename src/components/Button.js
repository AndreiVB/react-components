import className from 'classnames';

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {
    const classes = className(rest.className, 'flex items-center px-3 py-1.5 m-1 border', {
        'border-blue-500 bg-blue-400 text-white': primary, 
        'border-gray-900 bg-gray-800 text-white': secondary, 
        'border-green-500 bg-green-400 text-white': success, 
        'border-yellow-500 bg-yellow-400 text-white': warning, 
        'border-red-500 bg-red-400 text-white': danger, 
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-400': outline && warning,
        'text-red-500': outline && danger,
        
    });

    return <button {...rest} className={classes}>{children}</button>;
}

Button.propTypes = {
	checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
		const count =
			Number(!!primary) +
			Number(!!secondary) +
			Number(!!warning) +
			Number(!!success) +
			Number(!!danger)

        if (count > 1) {
            return new Error('Only one of primary,secondary, success, warning, danger can be true');
        }
	},
};

export default Button;