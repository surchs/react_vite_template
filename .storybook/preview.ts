import type { Preview } from '@storybook/react';
import '../src/index.css'

import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // UNCOMMENT to enable theme switching
  // see: https://storybook.js.org/recipes/tailwindcss#2-provide-tailwind-to-stories
  // decorators: [withThemeByClassName({
  //     themes: {
  //         // nameOfTheme: 'classNameForTheme',
  //         light: '',
  //         dark: 'dark',
  //     },
  //     defaultTheme: 'light',
  // })]
};

export default preview;
