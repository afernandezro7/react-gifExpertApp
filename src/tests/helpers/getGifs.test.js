import '@testing-library/jest-dom';
import { getGifs } from '../../helpers/getGifs';

describe('Prueba sobre el helper getGifs', () => {
    
    test('debe funcionar el helper', async() => {
        const category = 'Hola';
        const data = await getGifs(category);
       
        expect(data.length).toBe(10)
    })
    
})
