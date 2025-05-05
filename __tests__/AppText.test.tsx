import React from 'react';
import { render } from '@testing-library/react-native';
import { AppText } from '../src/components/custom/AppText';



describe('AppText', () => {
    it('renders correctly with default props', () => {
        const { getByText } = render(<AppText>Hello World</AppText>);
        const textElement = getByText('Hello World');
        expect(textElement).toBeTruthy();
    });

    it('applies custom styles correctly', () => {
        const customStyle = { fontSize: 20 };
        const { getByText } = render(
            <AppText style={customStyle}>Styled Text</AppText>,
        );
        const textElement = getByText('Styled Text');
        expect(textElement.props.style).toContainEqual(customStyle);
    });



    it('applies default font family and size', () => {
        const { getByText } = render(<AppText>Default Style</AppText>);
        const textElement = getByText('Default Style');
        expect(textElement.props.style).toContainEqual({
            fontFamily: 'Inter-Regular',
            fontSize: 16,
        });
    });
});