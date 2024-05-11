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
  const buttonStyle = {
    background: '#FFFFFF',
    color: isSelected ? '#112D31' : '#555555',
    border: isAvailable
      ? isSelected
        ? '1.5px solid #112D31'
        : '1px solid #ABABAB'
      : isSelected
      ? '3px dashed #112D31'
      : '2px dashed #ABABAB',
    boxShadow:
      isSelected && isAvailable
        ? '0px 0px 11.54px 0px rgba(0, 197, 161, 0.4)'
        : 'none',
    fontSize: '13px',
    fontWeight: isSelected ? '600' : '400',
    lineHeight: '20.28px',
    borderRadius: '8px',
    padding: '5px 10px',
  };

  return (
    <Button
      onClick={onClick}
      bg={buttonStyle.background}
      color={buttonStyle.color}
      border={buttonStyle.border}
      boxShadow={buttonStyle.boxShadow}
      fontSize={buttonStyle.fontSize}
      fontWeight={buttonStyle.fontWeight}
      lineHeight={buttonStyle.lineHeight}
      borderRadius={buttonStyle.borderRadius}
      padding={buttonStyle.padding}
      //   isDisabled={!isAvailable}
      _hover={{
        bg: 'none',
      }}
      //   _disabled={{
      //     opacity: 0.7,
      //     cursor: 'not-allowed',
      //   }}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
