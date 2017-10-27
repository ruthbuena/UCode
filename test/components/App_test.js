import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

// Use describe to group together similar tests/typical mocha set up
describe('App' , () => {
  let component;

  beforeEach( () => {
    component = renderComponent(App);
  });

  // Use 'it' to test a single attribute of a target, 'it' blocks try to make
  // an assertion about a particular fact about the testing subject
    it('renders', () => {
      // Use 'expect' to make an assertion/belief about a target
      expect(component.find('Home')).to.exist;
  });

    it('renders', () => {
      expect(component.find('BostonCode')).to.exist;
    });
});
