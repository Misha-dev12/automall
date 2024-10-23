<template>
	<div class="oils__container">
		<div
			v-if="oils?.length"
			class="oils"
		>
			<h3>Oils</h3>
			<ul class="oils__list">
				<li
					v-for="oil in oils"
					:key="oil.id"
					class="oils__item"
				>
					<ProductCard :product="oil" />
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
	name: 'OilsPage',
	components: { ProductCard },
	computed: {
		...mapState(useCatalogStore, ['categories']),
		oils() {
			return this.categories.Oils || [];
		}
	},
	async mounted() {
		if (!this.oils.length) {
			await this.fetchCategories();
		}
	},
	methods: {
		...mapActions(useCatalogStore, ['fetchCategories'])
	}
};
</script>

<style lang="scss" scoped>
.oils {
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
