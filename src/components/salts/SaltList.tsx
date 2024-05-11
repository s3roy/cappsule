import React, { ReactNode, useEffect, useState } from 'react';
import { Box, Grid, Text, Button as ChakraButton } from '@chakra-ui/react';
import CustomContainer from '../containers/Container';
import CustomButton from '../customInputs/Button';

interface SaltListProps {
  salt: SaltSuggestion;
}

interface LabelTextProps {
  children: ReactNode; // ReactNode is appropriate here as it can accept any valid React child
}

const LabelText: React.FC<LabelTextProps> = ({ children }) => (
  <Text
    mb="2"
    fontWeight="300"
    fontSize="15px"
    lineHeight="22.5px"
    textAlign="left"
  >
    {children}
  </Text>
);

const SaltList: React.FC<SaltListProps> = ({ salt }) => {
  const [selectedForm, setSelectedForm] = useState<string>('');
  const [selectedStrength, setSelectedStrength] = useState<string>('');
  const [selectedPackaging, setSelectedPackaging] = useState<string>('');

  const [showAllForms, setShowAllForms] = useState(false);
  const [showAllStrengths, setShowAllStrengths] = useState(false);
  const [showAllPackagings, setShowAllPackagings] = useState(false);

  const forms = Object.keys(salt.salt_forms_json);
  const strengths =
    selectedForm && salt.salt_forms_json[selectedForm]
      ? Object.keys(salt.salt_forms_json[selectedForm])
      : [];
  const packagings =
    selectedForm &&
    selectedStrength &&
    salt.salt_forms_json[selectedForm] &&
    salt.salt_forms_json[selectedForm][selectedStrength]
      ? Object.keys(salt.salt_forms_json[selectedForm][selectedStrength])
      : [];

  useEffect(() => {
    if (forms.length > 0 && !selectedForm) {
      setSelectedForm(forms[0]);
    }
    if (strengths.length > 0 && !selectedStrength) {
      setSelectedStrength(strengths[0]);
    }
    if (packagings.length > 0 && !selectedPackaging) {
      setSelectedPackaging(packagings[0]);
    }
  }, [
    forms,
    strengths,
    packagings,
    selectedForm,
    selectedStrength,
    selectedPackaging,
  ]);

  const toggleShowAll = (type: 'forms' | 'strengths' | 'packagings') => {
    if (type === 'forms') {
      setShowAllForms(!showAllForms);
    } else if (type === 'strengths') {
      setShowAllStrengths(!showAllStrengths);
    } else if (type === 'packagings') {
      setShowAllPackagings(!showAllPackagings);
    }
  };

  const renderButtonGrid = (
    items: string[],
    showAll: boolean,
    setSelected: React.Dispatch<React.SetStateAction<string>>,
    selected: string,
    toggleShowAll: () => void
  ) => (
    <>
      <Grid templateColumns="repeat(2, 1fr)" gap={2} mb={4}>
        {items.slice(0, showAll ? items.length : 4).map((item) => (
          <CustomButton
            key={item}
            isSelected={selected === item}
            isAvailable={true}
            onClick={() => setSelected(item)}
            label={item}
          />
        ))}
      </Grid>
      {items.length > 4 && (
        <ChakraButton size="sm" onClick={toggleShowAll}>
          {showAll ? 'Hide' : 'More'}
        </ChakraButton>
      )}
    </>
  );

  return (
    <CustomContainer>
      <Box display="flex" flexDirection="column" width="70%">
        {/* Form */}
        <Box display="flex">
          <Box minWidth="80px">
            <LabelText>Form:</LabelText>
          </Box>
          {renderButtonGrid(
            forms,
            showAllForms,
            setSelectedForm,
            selectedForm,
            () => toggleShowAll('forms')
          )}
        </Box>

        {/* Strength */}
        {selectedForm && (
          <Box display="flex">
            <Box minWidth="80px">
              <LabelText>Strength:</LabelText>
            </Box>
            {renderButtonGrid(
              strengths,
              showAllStrengths,
              setSelectedStrength,
              selectedStrength,
              () => toggleShowAll('strengths')
            )}
          </Box>
        )}

        {/* Packaging */}
        {selectedStrength && (
          <Box display="flex">
            <Box minWidth="80px">
              <LabelText>Packaging:</LabelText>
            </Box>
            {renderButtonGrid(
              packagings,
              showAllPackagings,
              setSelectedPackaging,
              selectedPackaging,
              () => toggleShowAll('packagings')
            )}
          </Box>
        )}
      </Box>
      <Box width="30%">Salt</Box>
      <Box width="30%">Not available</Box>
    </CustomContainer>
  );
};

export default SaltList;
