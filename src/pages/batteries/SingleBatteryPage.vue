<template>
	<div class="battery__container">
		<div v-if="selectedBattery">
			<ProductInfoCard :product-info="selectedBattery" />
			<div class="battery">
				<p>{{ selectedBattery.categoryName || 'Category not specified' }}</p>
				<ul class="battery__list">
					<li
						v-for="battery in batteries"
						:key="battery.id"
						class="battery__item"
					>
						<ProductCard :product="battery" />
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
	name: 'SingleBatteryPage',
	components: { ProductInfoCard, ProductCard },
	computed: {
		...mapState(useCatalogStore, ['batteries', 'getSelectedBattery']),
		selectedBattery() {
			return this.getSelectedBattery;
		}
	},
	watch: {
		'$route.params.id': {
			async handler() {
				await this.loadBattery();
			},
			immediate: true
		}
	},
	async created() {
		await this.loadBattery();
	},
	methods: {
		...mapActions(useCatalogStore, ['getBatteryById']),
		async loadBattery() {
			await this.getBatteryById(this.$route.params.id);
		}
	}
};
</script>

<style lang="scss" scoped>
.battery {
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
