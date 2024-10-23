import { defineStore } from 'pinia';

export const useCartStore = defineStore('cartStore', {
	state: () => ({
		cartItems: JSON.parse(localStorage.getItem('cart')) || []
	}),
	actions: {
		fetchCart() {
			this.cartItems = JSON.parse(localStorage.getItem('cart')) || [];
		},
		addToCart(item) {
			const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				this.cartItems.push({ ...item, quantity: 1 });
			}
			this.saveCart();
		},
		removeFromCart(itemId) {
			this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== itemId);
			this.saveCart();
		},
		saveCart() {
			localStorage.setItem('cart', JSON.stringify(this.cartItems));
		},
		cartCount() {
			return this.cartItems.reduce((total, item) => total + item.quantity, 0);
		}
	}
});
