import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Login from '../components/login';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

describe("login", () => {
    let wrapper = shallow(<Login />);

    it("component log", () => {
        console.log(wrapper.debug());
    });
    
    it("render component", () => {
        let username = wrapper.find('[name="username"]');
        let password = wrapper.find('[name="password"]');

        expect(username.length).toBe(1);
        expect(password.length).toBe(1);
    });

    it("input test", () => {
        const payload = {
            username: 'ahmad',
            password: '12345678'
        }

        let username = wrapper.find('[name="username"]');
        let password = wrapper.find('[name="password"]');

        username.value = payload.username;
        password.value = payload.password;

        expect(username.value).toContain('ahmad');
        expect(password.value).toContain('12345678')
        expect(username.text()).toBe('');
    });
})