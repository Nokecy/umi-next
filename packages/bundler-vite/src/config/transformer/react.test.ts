import react from './react';

test('test react plugin & transform umi babel to vite babel', () => {
  const obj = react({}, {}).plugins;
  expect(obj).toEqual(
    expect.arrayContaining([
      expect.arrayContaining([
        expect.objectContaining({
          name: 'vite:react-babel',
        }),
        expect.objectContaining({
          enforce: 'pre',
        }),
        expect.objectContaining({
          name: 'vite:react-refresh',
        }),
        expect.objectContaining({
          name: 'vite:react-jsx',
        }),
      ]),
    ]),
  );
});