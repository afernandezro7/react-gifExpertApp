import React from 'react';
import '@testing-library/jest-dom';
import { AddCategory } from '../../components/AddCategory';
import { shallow } from 'enzyme';

describe('Preba sobre AddCategory.js', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories= { setCategories }/>);

    beforeEach( ()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories= { setCategories }/>);
    } )




    test('Debe funcionar el componente', () => {    

        expect( wrapper ).toMatchSnapshot();
    });



    test('Debe cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');

        const value = 'Hola Mundo'
        input.simulate('Change', { target: {value} })


    })



    test('No debe postear la información con submit', () => {
        
        wrapper.find('form').simulate('submit', {preventDefault: ()=>{}})

        expect( setCategories ).not.toHaveBeenCalled()
    })
    


    test('debe llamar setCategories y limpiar caja de texto', () => {
         
        const value = 'Hola Mundo';

        // 1. simular el inputChange
        wrapper.find('input').simulate('Change', { target: {value} })
        
        // 2. simular el submit
        wrapper.find('form').simulate('submit', {preventDefault: ()=>{}})
        
        // 3. setCategories debe estar llamado
        expect ( setCategories).toHaveBeenCalled();
        expect ( setCategories).toHaveBeenCalledTimes(1);
        expect ( setCategories).toHaveBeenCalledWith( expect.any(Function) );

        // 4. el valor del input debe estar ''
        expect( wrapper.find('input').prop('value')).toBe('')
    })
    
    
})
