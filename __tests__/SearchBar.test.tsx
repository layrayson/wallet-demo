import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SearchBar from '../src/components/shared/SearchBar';

describe('SearchBar', () => {
  it('renders correctly with placeholder', () => {
    const {getByPlaceholderText} = render(<SearchBar />);
    const input = getByPlaceholderText('Search');
    expect(input).toBeTruthy();
  });

  it('accepts input text', () => {
    const {getByTestId} = render(<SearchBar />);
    const input = getByTestId('search-input');
    fireEvent.changeText(input, 'Bitcoin');
    expect(input.props.value).toBe('Bitcoin');
  });
});
