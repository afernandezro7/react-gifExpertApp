import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('Prueba sobre GifGridItem', () => {
    
    const title = 'un titulo';
    const url = 'https://unaurl.com';
    const wrapper = shallow(<GifGridItem title={title} url = {url} />)
    

    test('debe mostrar el componente correctamente ', () => {   
        expect( wrapper ).toMatchSnapshot()
    })

    test('Debe tener un parafo con el title', () => {
        const p = wrapper.find('p').text().trim()

        expect(p).toBe(title)
    })

    test('Debe tener la img con la url enviada y el alt', () => {
        const img = wrapper.find('img');
        //console.log(img.props());
        expect(img.props().src).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('Debe de tener animate__rollIn', () => {
        const div = wrapper.find('div')
        
        expect(div.prop('className').includes('animate__rollIn')).toBe(true)
        //expect(div.html().includes('animate__rollIn')).toBe(true)

    })
    
    
    
    
})
