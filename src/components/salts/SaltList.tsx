import React, { ReactNode, useEffect, useState } from 'react';
import { Box, Grid, Text, GridItem } from '@chakra-ui/react';
import CustomContainer from '../containers/Container';
import CustomButton from '../customInputs/Button';
import SaltDetails from './Salt';
import PriceDisplay from './PriceDisplay';

interface SaltListProps {
  salt: {
    salt_forms_json: Form;
    salt: string;
  };
}

interface LabelTextProps {
  children: ReactNode;
}

const LabelText: React.FC<LabelTextProps> = ({ children }) => (
  <Text
    pt="2"
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
  const strengths = selectedForm
    ? Object.keys(salt.salt_forms_json[selectedForm])
    : [];
  const packagings =
    selectedForm && selectedStrength
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

  const checkAvailability = (
    item: string,
    level: 'forms' | 'strengths' | 'packagings'
  ): boolean => {
    switch (level) {
      case 'forms':
        return Object.values(salt.salt_forms_json[item]).some((strength) =>
          Object.values(strength).some((packaging) =>
            Object.values(packaging).some(
              (pharmacies) =>
                pharmacies !== null && pharmacies.some((p) => p !== null)
            )
          )
        );
      case 'strengths':
        return Object.values(salt.salt_forms_json[selectedForm][item]).some(
          (packaging) =>
            Object.values(packaging).some(
              (pharmacies) =>
                pharmacies !== null && pharmacies.some((p) => p !== null)
            )
        );
      case 'packagings':
        return Object.values(
          salt.salt_forms_json[selectedForm][selectedStrength][item]
        ).some(
          (pharmacies) =>
            pharmacies !== null && pharmacies.some((p) => p !== null)
        );
      default:
        return false;
    }
  };

  const renderButtonGrid = (
    items: string[],
    level: 'forms' | 'strengths' | 'packagings',
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
            isAvailable={checkAvailability(item, level)}
            onClick={() => setSelected(item)}
            label={item}
          />
        ))}
      </Grid>

      {items.length > 4 && (
        <GridItem alignSelf="flex-end" pb={5} pl={5}>
          <Text
            as="button"
            cursor="pointer"
            color="#204772"
            fontWeight="700"
            fontSize="14px"
            lineHeight="21.84px"
            onClick={() => toggleShowAll()}
            ml={2}
          >
            {showAll ? 'Hide...' : 'More...'}
          </Text>
        </GridItem>
      )}
    </>
  );

  return (
    <CustomContainer>
      <Box display="flex" flexDirection="column" width="35%">
        <Box display="flex">
          <Box minWidth="80px">
            <LabelText>Form:</LabelText>
          </Box>
          {renderButtonGrid(
            forms,
            'forms',
            showAllForms,
            setSelectedForm,
            selectedForm,
            () => toggleShowAll('forms')
          )}
        </Box>

        {selectedForm && (
          <Box display="flex">
            <Box minWidth="80px">
              <LabelText>Strength:</LabelText>
            </Box>
            {renderButtonGrid(
              strengths,
              'strengths',
              showAllStrengths,
              setSelectedStrength,
              selectedStrength,
              () => toggleShowAll('strengths')
            )}
          </Box>
        )}

        {selectedStrength && (
          <Box display="flex">
            <Box minWidth="80px">
              <LabelText>Packaging:</LabelText>
            </Box>
            {renderButtonGrid(
              packagings,
              'packagings',
              showAllPackagings,
              setSelectedPackaging,
              selectedPackaging,
              () => toggleShowAll('packagings')
            )}
          </Box>
        )}
      </Box>
      <Box width="35%">
        <SaltDetails
          saltName={salt.salt}
          form={selectedForm}
          strength={selectedStrength}
          packaging={selectedPackaging}
        />
      </Box>
      <Box width="30%" display="flex" justifyContent="center">
        <PriceDisplay
          saltFormsJson={salt.salt_forms_json}
          selectedForm={selectedForm}
          selectedStrength={selectedStrength}
          selectedPackaging={selectedPackaging}
        />
      </Box>
    </CustomContainer>
  );
};

export default SaltList;
