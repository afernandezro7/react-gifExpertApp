import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import {useFetchGifs} from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas sobre GifGrid', () => {
    
    const category = 'Hola Mundo'
    
    test('Debe mostrarse el componente ', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifGrid category = {category}/>);
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe mostrar items cuando se cargan las img useFetch', () => {
        
        const gifs = [{
            id: 'abc',
            url: 'https://cualquiercosa.jpg',
            title: 'Goku'
        }]
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true
        })
        
        const wrapper = shallow(<GifGrid category = {category}/>);
        
        expect( wrapper ).toMatchSnapshot();
    })
    
    
})



