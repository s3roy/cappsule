import { Button } from '@chakra-ui/react';
import React from 'react';

interface CustomButtonProps {
  isSelected: boolean;
  isAvailable: boolean;
  onClick: () => void;
  label: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  isSelected,
  isAvailable,
  onClick,
  label,
}) => {
  const getButtonStyle = () => {
    if (!isAvailable) {
      return {
        bg: isSelected ? 'gray.600' : 'gray.400',
        color: 'white',
        border: isSelected ? '2px dashed black' : 'none',
      };
    } else {
      return {
        bg: isSelected ? 'green.500' : 'gray.200',
        color: isSelected ? 'white' : 'black',
        border: 'none',
      };
    }
  };

  const styles = getButtonStyle();

  return (
    <Button
      onClick={onClick}
      backgroundColor={styles.bg}
      color={styles.color}
      border={styles.border}
      isDisabled={!isAvailable}
      _disabled={{
        opacity: 0.6,
        cursor: 'not-allowed',
      }}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
