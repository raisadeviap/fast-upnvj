import React from "react";

const TogglePassword = ({ showPassword, onToggle }) => {
	return (
		<button
			type="button"
			onClick={onToggle}
			className="absolute right-3 top-3.5 w-5 h-5"
			tabIndex={-1}>
			<div className="relative w-5 h-5">
				{/* Eye-Off (🙈) */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="#71717b"
					className={`absolute inset-0 transition-opacity duration-200 cursor-pointer ${showPassword ? "opacity-100" : "opacity-0"}`}>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3.98 8.223A10.477 10.477 0 001.5 12s3.75 6.75 9.75 6.75c1.982 0 3.76-.573 5.272-1.555"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6.228 6.228A10.45 10.45 0 0112 5.25c6 0 9.75 6.75 9.75 6.75a10.49 10.49 0 01-4.477 4.724"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6.228 6.228L3 3m0 0l3.228 3.228m0 0L21 21"
					/>
				</svg>

				{/* Eye (👁️) */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="#71717b"
					className={`absolute inset-0 transition-opacity duration-200 cursor-pointer ${showPassword ? "opacity-0" : "opacity-100"}`}>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>
			</div>
		</button>
	);
};

export default TogglePassword;
