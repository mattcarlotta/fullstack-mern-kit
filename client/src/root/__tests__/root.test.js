import App from '../index.js';

describe('App', () => {
  const wrapper = mount(<App />);

  it('renders without errors', () => {
    const homeComponent = wrapper.find('.homeContainer');
    expect(homeComponent).toHaveLength(1);
  });
});
