interface Pharmacy {
  pharmacy_id: number;
  selling_price: number;
}

interface Product {
  [key: string]: Pharmacy[] | null;
}

interface Packaging {
  [key: string]: Product;
}

interface Strength {
  [key: string]: Packaging;
}

interface Form {
  [key: string]: Strength;
}

interface SaltSuggestion {
  name: string;
  id: number;
  salt: string;
  salt_frequency: number;
  available_forms: string[];
  most_common: {
    Form: string;
    Strength: string;
    Packing: string;
  };
  salt_forms_json: Form;
}

interface ProductData {
  saltSuggestions: SaltSuggestion[];
}
