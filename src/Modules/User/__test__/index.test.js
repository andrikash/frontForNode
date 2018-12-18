import { shallow } from 'enzyme';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import EditProfile from '../pages/EditProfile';

const initialState = {
    userInfo: null,
    error: null,
    passwordInfo: null,
    passwordError: null,
    loading: false,
    i18n : {
        locale: 'uk',
    }
};

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore(initialState);

describe('<ProductForm />', () => {
        const wrapper = shallow(
            <EditProfile
                store={store}
            />
        ).shallow();
        it('Should render <EditProfile /> component', () => {
            expect(wrapper).toHaveLength(1);
        });
        it('Should have correct state and values', () => {
            const state = wrapper.state();
            expect(state).toHaveProperty('user');
            expect(state).toHaveProperty('password');
        });
})



