jest.mock('@react-navigation/native', () => {
  const navigate = jest.fn();
  return {
    useNavigation: () => ({
      navigate,
    }),
  };
});

describe('<Detail />', () => {
  describe('Component test', () => {
  });

  describe('Behaviour test', () => {
  });
});
