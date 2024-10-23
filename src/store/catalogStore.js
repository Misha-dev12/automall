import { defineStore } from 'pinia';
import axios from 'axios';

export const useCatalogStore = defineStore('catalogStore', {
	state: () => ({
		categories: {},
		selectedBattery: {},
		selectedOil: {},
		selectedOilFilter: {},
		selectedAirFilter: {}
	}),
	getters: {
		batteries: state => {
			return state.categories.Batteries || [];
		},
		oils: state => {
			return state.categories.Oils || [];
		},
		oilFilters: state => {
			return state.categories['Oil Filters'] || [];
		},
		airFilters: state => {
			return state.categories['Air Filters'] || [];
		},
		getSelectedBattery(state) {
			return state.selectedBattery;
		},
		getSelectedOil(state) {
			return state.selectedOil;
		},
		getSelectedAirFilter(state) {
			return state.selectedAirFilter;
		},
		getSelectedOilFilter(state) {
			return state.selectedOilFilter;
		}
	},
	actions: {
		async fetchCategories() {
			try {
				if (!Object.keys(this.categories).length) {
					const response = await axios.get('/src/data/apiData.json');
					this.categories = response.data.categories;
				}
			} catch (error) {
				console.error('(error get categories :', error);
			}
		},
		async getBatteryById(id) {
			try {
				if (!this.categories.Batteries?.length) {
					await this.fetchCategories();
				}
				this.selectedBattery = this.categories.Batteries.find(battery => battery.id === String(id));
				if (this.selectedBattery) {
					this.selectedBattery.categoryName = 'Batteries';
				} else {
					console.warn(`Battery with id ${id} not found.`);
				}
			} catch (error) {
				console.error('(error get battery by id :', error);
			}
		},
		async getOilById(id) {
			try {
				if (!this.categories.Oils?.length) {
					await this.fetchCategories();
				}
				this.selectedOil = this.categories.Oils.find(oil => oil.id === String(id));
				if (this.selectedOil) {
					this.selectedOil.categoryName = 'Oils';
				} else {
					console.warn(`Oil with id ${id} not found.`);
				}
			} catch (error) {
				console.error('(error get oil by id :', error);
			}
		},
		async getAirFilterById(id) {
			try {
				if (!this.categories['Air Filters']?.length) {
					await this.fetchCategories();
				}
				this.selectedAirFilter = this.categories['Air Filters'].find(
					airFilter => airFilter.id === String(id)
				);
				if (this.selectedAirFilter) {
					this.selectedAirFilter.categoryName = 'Air Filters';
				} else {
					console.warn(`Air Filter with id ${id} not found.`);
				}
			} catch (error) {
				console.error('(error get air filter by id :', error);
			}
		},
		async getOilFilterById(id) {
			try {
				if (!this.categories['Oil Filters']?.length) {
					await this.fetchCategories();
				}
				this.selectedOilFilter = this.categories['Oil Filters'].find(
					oilFilter => oilFilter.id === String(id)
				);
				if (this.selectedOilFilter) {
					this.selectedOilFilter.categoryName = 'Oil Filters';
				} else {
					console.warn(`Oil Filter with id ${id} not found.`);
				}
			} catch (error) {
				console.error('(error get oil filter by id :', error);
			}
		}
	}
});
