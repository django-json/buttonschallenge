import React from "react";
import classNames from "classnames";

import "./button.styles.css";

const Button = ({
	variant,
	startIcon,
	endIcon,
	size,
	color,
	disabled,
	disableShadow,
	label,
	...props
}) => {
	const btnClassNames = classNames("btn", {
		"btn--hover-default":
			!variant &&
			!disableShadow &&
			!disabled &&
			!size &&
			!startIcon &&
			!endIcon,
		"btn--focus-default":
			!variant &&
			!disableShadow &&
			!disabled &&
			!size &&
			!startIcon &&
			!endIcon,
		[`btn--${color}`]: color,
		[`btn--${size}`]: size,
		[`btn--${variant}`]: variant,
		"btn--shadow-disabled": disableShadow,
		"btn--disabled": disabled,
		"btn-iconed": startIcon || endIcon,
	});

	return (
		<button type="button" className={btnClassNames} {...props}>
			{startIcon && (
				<i className="btn__start-icon material-icons">{startIcon}</i>
			)}
			{label}
			{endIcon && (
				<i className="btn__end-icon material-icons">{endIcon}</i>
			)}
		</button>
	);
};

export default Button;
