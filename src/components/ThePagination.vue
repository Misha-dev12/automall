<template>
	<div class="pagination">
		<button
			v-for="page in pages"
			:key="page"
			type="button"
			class="pagination__btn"
			@click="$emit('on-click', page)"
		>
			{{ page }}
		</button>
	</div>
</template>

<script>
export default {
	name: 'ThePagination',
	props: {
		pages: {
			type: Number,
			default: 0
		}
	},
	emits: ['on-click']
};
</script>

<style lang="scss" scoped>
.pagination {
	display: flex;
	gap: 8px;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 16px 0;
	&__btn {
		color: #ffffff;
	}
}
</style>
