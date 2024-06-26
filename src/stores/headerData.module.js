import { defineStore } from 'pinia';
import HeaderDataService from '../services/headerData.service';

export const useHeaderDataStore = defineStore('headerData', {
    state: () => ({
        me: {},
        currencyRate: {},
    }),
    actions: {
        async getMe() {
            try {
                const response = await HeaderDataService.getMe();
                this.me = response.data.data;
                console.log("me", this.me)
                return response;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async getCurrencyData() {
            try {
                const response = await HeaderDataService.getCurrencyData();
                this.currencyRate = response.data.data;
                return response;
            } catch (error) {
                return Promise.reject(error);
            }
        },
    },
});
