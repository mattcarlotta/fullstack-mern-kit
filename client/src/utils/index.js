import { createElement } from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import { store } from "root";

const history = createBrowserHistory();
const middlewares = applyMiddleware(thunk);

//= =============================================================================//
// CUSTOM TESTING FUNCTIONS                                                       /
//= =============================================================================//

/**
 * Create a testing store with imported reducers, initial state, and middleware(s).
 * @function createStoreFactory
 * @param {object} initialState - Initial store state.
 * @returns {store} - redux store with
 */
export const createStoreFactory = initialState =>
  createStore(rootReducer(history), initialState, middlewares);

/**
 * Factory function to create a ShallowWrapper for a component
 * @function shallowWrap
 * @param {node} Component - Component to be shallowed
 * @param {object} state - initial state for setup.
 * @returns {ShallowWrapper}
 */
export const shallowWrap = (Component, state = null) => {
  const wrapper = shallow(Component);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Factory function to create a MountedWrapper for a component
 * @function mountWrap
 * @param {node} Component - Component to be mounted
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - initial state for setup.
 * @returns {MountedWrapper}
 */
export const mountWrap = (Component, state = null) => {
  const wrapper = mount(Component);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Factory function to create a Mounted MemoryRouter Wrapper for a component
 * @function HOCWrap
 * @param {node} Component - Component to be mounted
 * @param {object} initialProps - Component props specific to this setup.
 * @param {object} state - Component initial state for setup.
 * @param {array} initialEntries - Initial route entries for MemoryRouter.
 * @param {object} options - Options for mount
 * @function createElement - Creates a wrapper around passed in component (now we can use wrapper.setProps on root)
 * @returns {MountedRouterWrapper}
 */
export const HOCWrap = (
	Component,
	initialProps = {},
	state = null,
	initialEntries = ["/"],
	options = {},
) => {
	const wrapper = mount(
		createElement(
			props => (
				<Provider store={store}>
					<MemoryRouter initialEntries={initialEntries}>
						<Component {...props} />
					</MemoryRouter>
				</Provider>
			),
			initialProps,
		),
		options,
	);
	if (state) wrapper.find(Component).setState(state);
	return wrapper;
};
