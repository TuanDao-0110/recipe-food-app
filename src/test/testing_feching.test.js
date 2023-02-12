import { handleGetAllCoutriesInfo, hanldeGetAllRecipe } from "../service/sevices"
import axios from 'axios';
import { BASE_URL, COUNTRY_URL_ALL, RECIPES } from "../service/ultilities";

jest.mock('axios');


describe('handleGetAllRecipe', () => {
    it('should return the data from the API', async () => {
        const mockData = [{ id: 1, name: 'Recipe 1' }, { id: 2, name: 'Recipe 2' }];
        axios.mockResolvedValue({ data: mockData });
        const result = await hanldeGetAllRecipe();
        expect(axios).toHaveBeenCalledWith({ url: `${BASE_URL}/${RECIPES}` });
        expect(result).toEqual(mockData);
    });

    it('should catch errors and call the alert function', async () => {
        const mockError = new Error('Request failed');
        axios.mockRejectedValue(mockError);
        global.alert = jest.fn();

        await hanldeGetAllRecipe();

        expect(axios).toHaveBeenCalledWith({ url: `${BASE_URL}/${RECIPES}` });
        expect(global.alert).toHaveBeenCalledWith(mockError);
    });
});


describe('handleGetAllCountriesInfo', () => {
    it('should return the data from the API', async () => {
        const mockData = [{ name: 'Country 1' }, { name: 'Country 2' }];
        axios.mockResolvedValue({ data: mockData });

        const result = await handleGetAllCoutriesInfo();

        expect(axios).toHaveBeenCalledWith({ url: `${COUNTRY_URL_ALL}` });
        expect(result).toEqual(mockData);
    });

    it('should catch errors and call the alert function', async () => {
        const mockError = new Error('Request failed');
        axios.mockRejectedValue(mockError);
        global.alert = jest.fn();

        await handleGetAllCoutriesInfo();

        expect(axios).toHaveBeenCalledWith({ url: `${COUNTRY_URL_ALL}` });
        expect(global.alert).toHaveBeenCalledWith(mockError);
    });
});




