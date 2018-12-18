import LoginPage  from '../pages/LoginPage';
import { shallow } from 'enzyme';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import RegisterPage from '../pages/RegisterPage';

const initialState = {
    auth: { user: 'Something',
            isLogged: !!localStorage.getItem('token'),
            loading: false,
            error: null
          }
};
const props = {
    test: 'cool',
};
Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore(initialState);

describe('<LoginPage/>', () => {
        const wrapper = shallow(
            <LoginPage
                store={store}
                // {...props}
            />
        ).shallow();
        it('Should render <LoginPage /> component', () => {
            expect(wrapper).toHaveLength(1);
        });
        it('Should have correct state and values', () => {
            const state = wrapper.state();
            expect(state).toHaveProperty('email');
            expect(state).toHaveProperty('password');
        });
})
describe('<RegistrationPage />', () => {
    const wrapper = shallow(
        <RegisterPage
            store={store}
        />
    ).shallow();
    it('Should render <RegistrationPage /> component', () => {
        expect(wrapper).toHaveLength(1);
    });
    it('Should have correct state and values ', () => {
        const state = wrapper.state();
        expect(state).toHaveProperty('email');
        expect(state).toHaveProperty('password');
    });
})


