import { Tabs, AppNavigator } from '../containers/NavigationApp';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = Tabs.router.getActionForPathAndParams('Home');
const initialNavState = Tabs.router.getStateForAction(firstAction);

function nav(state = initialNavState, action) {
  let nextState = Tabs.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

export default nav;