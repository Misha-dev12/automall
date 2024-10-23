<template>
	<div class="oil__container">
		<div v-if="selectedOil">
			<ProductInfoCard :product-info="selectedOil" />
			<div class="oil">
				<p>{{ selectedOil.categoryName || 'Category not specified' }}</p>
				<ul class="oil__list">
					<li
						v-for="oil in oils"
						:key="oil.id"
						class="oil__item"
					>
						<ProductCard :product="oil" />
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useCatalogStore } from '@/store/catalogStore';
import ProductInfoCard from '@/components/ProductInfoCard.vue';
import ProductCard from '@/components/ProductCard.vue';

export default {
	name: 'SingleOilPage',
	components: { ProductInfoCard, ProductCard },
	computed: {
		...mapState(useCatalogStore, ['oils', 'getSelectedOil']),
		selectedOil() {
			return this.getSelectedOil;
		}
	},
	watch: {
		'$route.params.id': {
			async handler() {
				await this.loadOil();
			},
			immediate: true
		}
	},
	async created() {
		await this.loadOil();
	},
	methods: {
		...mapActions(useCatalogStore, ['getOilById']),
		async loadOil() {
			await this.getOilById(this.$route.params.id);
		}
	}
};
</script>

<style lang="scss" scoped>
.oil {
	p {
		font-size: font-rem(22);
		font-weight: 600;
		text-align: center;
	}
	&__list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: 16px;
		padding: 32px 0;
	}
}
</style>
