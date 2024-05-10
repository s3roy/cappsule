import * as React from 'react';
import { SVGProps } from 'react';
const Search = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <path
      fill="#555"
      d="m16.031 14.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 9 18c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617Zm-2.006-.742A6.977 6.977 0 0 0 16 9c0-3.867-3.133-7-7-7S2 5.133 2 9s3.133 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15Z"
    />
  </svg>
);
export default Search;
