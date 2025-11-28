export const BUTTON_BASE = `
  inline-flex items-center justify-center
  rounded-[6px]
  text-center
  transition-colors duration-150
`;

export const BUTTON_VARIANTS = {
  primary: `
    bg-primary text-white cursor-pointer
    hover:bg-white hover:text-primary hover:border hover:border-primary 
    active:bg-white active:text-primary active:border active:border-primary
    focus:bg-white focus:text-primary focus:border focus:border-primary
  `,
  outline: `
    bg-white border border-primary text-primary cursor-pointer
    hover:bg-primary hover:text-white
    active:bg-primary active:text-white
    focus:bg-primary focus:text-white
  `,
  disabled: `
    bg-gray-40 text-white cursor-not-allowed
  `,
} as const;

export type ButtonVariant = keyof typeof BUTTON_VARIANTS;

/** 버튼 크기 종류 */
// "sm" | "md" | "lg" | "full"
export const BUTTON_SIZES = {
  sm: `
    w-[82px] h-8 px-3
    text-[12px] font-[500]
  `,
  md: `
    w-[108px] h-9 px-4
    text-[14px] font-[500]
  `,
  lg: `
    w-[350px] h-12 px-5
    text-[16px] font-[500]
  `,
  full: `
    w-full h-12 px-5
    text-[16px] font-[500]
  `,
} as const;

export type ButtonSize = keyof typeof BUTTON_SIZES;
