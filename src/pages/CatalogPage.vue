<template>
	<div class="catalog">
		<div class="catalog__container">
			<h4>Product catalog</h4>
			<ul
				v-if="catalogList.length"
				class="catalog__list"
			>
				<li
					v-for="(catalog, idx) in catalogList"
					:key="idx"
					class="catalog__item"
				>
					<CatalogCard :catalog-card="catalog" />
				</li>
			</ul>
			<p v-else>Loading...</p>
		</div>
	</div>
</template>

<script>
import { useCatalogStore } from '@/store/catalogStore';
import CatalogCard from '@/components/CatalogCard.vue';
import { mapState, mapActions } from 'pinia';

export default {
	name: 'CatalogPage',
	components: { CatalogCard },
	computed: {
		...mapState(useCatalogStore, ['categories']),
		catalogList() {
			return Object.keys(this.categories).map(categoryName => {
				const products = this.categories[categoryName] || [];
				return {
					name: categoryName,
					icon: products[0]?.image_url || '',
					route: { name: `${categoryName.replace(/ /g, '')}Page` },
					productCount: products.length
				};
			});
		}
	},
	created() {
		this.fetchCategories();
	},
	methods: {
		...mapActions(useCatalogStore, ['fetchCategories'])
	}
};
</script>

<style lang="scss" scoped>
.catalog {
	padding: 20px 0;
	h4 {
		margin-bottom: 20px;
	}
	&__list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
		gap: 16px;
	}
}
</style>
