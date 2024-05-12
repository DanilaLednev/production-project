import { classNames } from 'shared/lib/classNames/classNames';

describe('ClassNames', () => {
  test('with only first params', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with mods', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with additionl class', () => {
    const expected = 'someClass class1 class2 hoverd scrollable';
    expect(classNames(
      'someClass',
      { hoverd: true, scrollable: true },
      ['class1', 'class2'],
    )).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'someClass class1 class2 hoverd';
    expect(classNames(
      'someClass',
      { hoverd: true, scrollable: false },
      ['class1', 'class2'],
    )).toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'someClass class1 class2 hoverd';
    expect(classNames(
      'someClass',
      { hoverd: true, scrollable: undefined },
      ['class1', 'class2'],
    )).toBe(expected);
  });
});
