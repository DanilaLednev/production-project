import { Story } from '@storybook/react';

import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );

// export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
//   document.body.className = theme;
//   return (
//     <div className={`app ${theme}`}>
//       <StoryComponent />
//     </div>
//   );
// };
