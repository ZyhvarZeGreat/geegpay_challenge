import { Inter,Plus_Jakarta_Sans } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
export const Typography = {
  Inter:inter,
  Jakarta:jakarta,
  headers: {
    h1: "font-semibold text-[4rem]",
    h2: "font-semibold text-[3rem]",
    h3: "font-semibold text-[2rem]",
    h4: "font-semibold text-[1.5rem]",
    h5: "font-semibold text-[1.125rem]",
  },
  body_semibold: {
    xl: "font-semibold text-[1.125rem]",
    lg: "font-semibold text-[1rem]",
    md: "font-semibold text-[0.875rem]",
    sm: "font-semibold text-[0.75rem]",
    xs: "font-semibold text-[0.625rem]",
  },
  body_medium: {
    xl: "font-medium text-[1.125rem]",
    lg: "font-medium text-[1rem]",
    md: "font-medium text-[0.875rem]",
    sm: "font-medium text-[0.75rem]",
    xs: "font-medium text-[0.625rem]",
  },

  body_regular: {
    xl: "font-regular text-[1.125rem]",
    lg: "font-regular text-[1rem]",
    md: "font-regular text-[0.875rem]",
    sm: "font-regular text-[0.75rem]",
    xs: "font-regular text-[0.625rem]",
  },

  
};
