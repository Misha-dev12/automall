import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favoritesStore', {
	state: () => ({
		favorites: JSON.parse(localStorage.getItem('favorites')) || []
	}),
	actions: {
		fetchFavorites() {
			this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
		},
		updateFavorite({ item, isFavorite }) {
			if (isFavorite) {
				if (!this.favorites.some(fav => fav.id === item.id)) {
					this.favorites.push(item);
				}
			} else {
				this.favorites = this.favorites.filter(fav => fav.id !== item.id);
			}
			this.saveFavorites();
		},
		saveFavorites() {
			localStorage.setItem('favorites', JSON.stringify(this.favorites));
		},
		isFavorite(itemId) {
			return this.favorites.some(fav => String(fav.id) === String(itemId));
		},
		favoritesCount() {
			return this.favorites.length || '';
		}
	}
});
