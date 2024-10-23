<template>
	<div class="batteries__container">
		<div
			v-if="batteries?.length"
			class="batteries"
		>
			<h3>Batteries</h3>
			<ul class="batteries__list">
				<li
					v-for="battery in batteries"
					:key="battery.id"
					class="batteries__item"
				>
					<ProductCard :product="battery" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'pinia';

import { useCatalogStore } from '@/store/catalogStore';

import ProductCard from '@/components/ProductCard.vue';

export default {
	name: 'BatteriesPage',
	components: { ProductCard },
	computed: {
		...mapState(useCatalogStore, ['categories']),
		batteries() {
			return this.categories.Batteries || [];
		}
	},
	async mounted() {
		if (!this.batteries.length) {
			await this.fetchCategories();
		}
	},
	methods: {
		...mapActions(useCatalogStore, ['fetchCategories'])
	}
};
</script>

<style lang="scss" scoped>
.batteries {
	h3 {
		padding: 20px 0;
	}
	&__list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
		gap: 16px;
		margin-bottom: 20px;
	}
}
</style>
