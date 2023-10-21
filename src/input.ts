import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const primary = definePartsStyle({
  focusBorderColor: "lime",

  field: {
    border: "1px solid",
    borderColor: "gray.200",
    background: "white",
    borderRadius: "full",
    _focus: {
      borderColor: "lime",
    },
    _placeholder: {
      opacity: 0.4,
      color: "black",
      fontSize: "16",
    },
  },
});

const secondary = definePartsStyle({
  field: {
    border: "1px solid",
    borderColor: "lime",
    background: "pink.100",
    borderRadius: "full",
    _placeholder: { opacity: 0.4, color: "lime", fontSize: "16" },
  },
});

const sizes = {
  sm: defineStyle({
    fontSize: "16",
    px: "4",
    h: "32",
    borderRadius: "full",
  }),
  md: defineStyle({
    fontSize: "16",
    px: "4",
    h: "40",
    borderRadius: "full",
  }),
  lg: defineStyle({
    fontSize: "16",
    px: "4",
    h: "48",
    borderRadius: "full",
  }),
};

export const Input = defineMultiStyleConfig({
  sizes: {
    sm: definePartsStyle({ field: sizes.sm }),
    md: definePartsStyle({ field: sizes.md }),
    lg: definePartsStyle({ field: sizes.lg }),
  },
  variants: { primary, secondary },
  defaultProps: {
    size: "md",
    variant: "primary",
  },
});
