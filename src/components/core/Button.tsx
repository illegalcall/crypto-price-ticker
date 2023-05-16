import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

type CustomButtonProps = {
	title?: string;
	icon?: React.ReactNode;
	bgColor?: string;
	textColor?: string;
	onPress: () => void;
};

const CustomButton = ({
	title,
	onPress,
	icon,
	bgColor = '#1e2634',
	textColor = 'white',
}: CustomButtonProps) => (
	<Pressable
		onPress={onPress}
		style={[styles.container, { backgroundColor: bgColor }]}
	>
		{!!icon && icon}
		{!!title && (
			<Text style={[styles.title, { color: textColor }]}>
				{title}
			</Text>
		)}
	</Pressable>
);

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 8,
		borderRadius: 8,
	},
	title: {
		color: 'white',
		fontSize: 14,
	},
});

export default CustomButton;
