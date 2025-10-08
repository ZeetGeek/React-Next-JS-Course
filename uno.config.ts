import { defineConfig } from "unocss";
import presetWind4 from "@unocss/preset-wind4";
import {
  presetAttributify,
  transformerVariantGroup,
  transformerDirectives,
  transformerAttributifyJsx,
} from "unocss";
import presetLegacyCompat from "@unocss/preset-legacy-compat";
import presetTagify from "@unocss/preset-tagify";
import presetRemToPx from "@unocss/preset-rem-to-px";
import {} from "unocss";

export default defineConfig({
  presets: [
    presetWind4(),
    presetAttributify({
      prefix: "data-",
      prefixedOnly: true,
    }),
    presetLegacyCompat({
      commaStyleColorFunction: true,
      legacyColorSpace: true,
    }),
    presetTagify(),
    presetRemToPx(),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
    transformerAttributifyJsx(),
  ],
});
