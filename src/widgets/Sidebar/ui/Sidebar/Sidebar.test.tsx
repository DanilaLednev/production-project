import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { rendetWithTranslation }
  from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
  test('with only first param', () => {
    rendetWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    rendetWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
