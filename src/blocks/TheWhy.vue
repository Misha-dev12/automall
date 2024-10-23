<template>
	<section class="why">
		<div class="why__container">
			<div class="why__info">
				<h2>Why us?</h2>
				<h5 class="why__sub">Benefits of working with us</h5>
				<div class="why__list">
					<div class="why__item">
						<h5>15 million parts in stock</h5>
						<p>
							We have automotive spare parts in our own warehouse and receive direct deliveries from
							distributors' warehouses in Europe, the UAE, Japan, Korea, and the USA
						</p>
					</div>
					<div class="why__item">
						<h5>Offer wholesale prices</h5>
						<p>
							We have a large database of cross-numbers; therefore, we guarantee a broad selection
							of auto parts and prices across various supply categories. Additionally, we provide
							shipping for parts and order tracking through the online store
						</p>
					</div>
					<div class="why__item">
						<h5>Consultation and selection</h5>
						<p>
							Each of our managers is an expert in their field. They can competently assist you in
							selecting the right parts. Our consultants are also available to answer any of your
							questions.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'TheWhy'
};
</script>

<style lang="scss" scoped>
.why {
	padding: 40px 0;
	// .why__info
	&__info {
		h2 {
			text-align: center;
			margin-bottom: 15px;
			font-weight: 800;
		}
	}
	&__sub {
		text-align: center;
		margin-bottom: 30px;
	}
	// .why__list
	&__list {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 20px;
		@include b-up(md) {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	// .why__item
	&__item {
		h5 {
			font-weight: 700;
			margin-bottom: 15px;
		}
		p {
			padding-left: 20px;
			@include b-up(md) {
				padding-left: 40px;
			}
		}
	}
}
</style>
