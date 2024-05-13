import { Input, InputGroup, InputLeftElement, Box } from '@chakra-ui/react';
import React from 'react';
import Search from '../Icons/Search';

interface SearchInputProps {
  onSearch: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(inputValue.trim());
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <Box width="full" paddingX="4" bg="transparent">
      <InputGroup
        boxShadow="0px 0px 50px rgba(173, 173, 173, 0.4)"
        borderRadius="full"
        overflow="hidden"
        bg="white"
      >
        <InputLeftElement pointerEvents="none" height="100%" ml={5}>
          <Search />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Type your medicine name here"
          borderRadius="full"
          borderColor="gray.200"
          _placeholder={{ color: 'gray.500' }}
          paddingLeft="5rem"
          paddingRight="14rem"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          size="lg"
          height="60px"
          bg="white"
          fontSize="16px"
          fontWeight="500"
          lineHeight="22px"
          letterSpacing="-0.41px"
          color="#112D31"
        />
        <Box
          as="button"
          position="absolute"
          right="1"
          marginRight="2"
          width="10rem"
          backgroundColor="transparent"
          color="#2A527A"
          fontWeight="600"
          fontSize="16px"
          lineHeight="22px"
          letterSpacing="-0.41px"
          px="8"
          height="100%"
          borderRadius="full"
          border="none"
          cursor="pointer"
          onClick={handleSearchClick}
          zIndex="1"
        >
          Search
        </Box>
      </InputGroup>
    </Box>
  );
};

export default SearchInput;
