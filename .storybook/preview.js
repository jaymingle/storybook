/** @type { import('@storybook/react').Preview } */

import 'minireset.css'
import '../src/styles/global.css'


const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
