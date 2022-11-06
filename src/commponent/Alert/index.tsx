import { Alert, AlertColor, AlertTitle } from '@mui/material';
import React from 'react';

export enum AlertVariant {
	standard = 'standard',
	filled = 'filled',
	outlined = 'outlined',
}
interface AlertTemplentProp {
	onClose?: () => void;
	severity?: AlertColor;
	variant?: AlertVariant;
	title?: string;
	children: React.ReactNode;
}

const AlertTemplent = (props: AlertTemplentProp) => {
	const { title, children, severity, variant, onClose } = props;

	return (
		<Alert severity={severity} variant={variant} onClose={onClose}>
			{title && <AlertTitle>{title}</AlertTitle>}
			{children}
		</Alert>
	);
};

export default AlertTemplent;
