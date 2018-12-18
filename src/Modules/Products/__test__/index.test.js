import ProductForm  from '../pages/ProductForm';
import ProductPage  from '../pages/ProductPage';
import { shallow } from 'enzyme';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

const initialState = {
    products: {
        data: [],
        currentProduct: null,
        addData: null,
        deleteData: null,
        loading: false,
        error: null
    }
};
Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore(initialState);

describe('<ProductForm />', () => {
    const props = {
        match: {
            params: {
                id: '5beef8401ac1811d7c172234'
            }
        }
    }
        const wrapper = shallow(
            <ProductForm
                store={store}
                {...props}
            />
        ).dive();
        it('Should render <ProductForm /> component', () => {
            expect(wrapper).toHaveLength(1);
        });
        it('Should have correct state and values', () => {
            const state = wrapper.state();
            expect(state).toHaveProperty('currentProduct');
        });
})
describe('<ProductPage />', () => {
    const wrapper = shallow(
        <ProductPage
            store={store}
        />
    ).shallow();
    it('Should render <ProductPage /> component', () => {
        expect(wrapper).toHaveLength(1);
    });
})


