<template>
	<section class="join">
		<div class="join__banner">
			<div class="join__bg">
				<img
					:src="joinImg"
					alt="join background image"
				/>
			</div>
			<div class="join__container">
				<div class="join__text">
					<h1>
						Join us! We are open to
						<span>cooperation</span>
					</h1>
					<p>
						We invite distributors, suppliers, and manufacturers of auto parts and accessories to
						cooperate with us. Our partners benefit from receiving parts at wholesale prices.
					</p>
				</div>
			</div>
		</div>
	</section>
	<TheWhy />
	<section class="benefit">
		<div class="benefit__container">
			<div class="benefit__wrap">
				<div class="benefit__left">
					<div class="benefit__text">
						<h2>Benefit for the supplier</h2>
						<h5>What do I get ?</h5>
						<ul class="benefit__list">
							<li>Productive long-term cooperation</li>
							<li>Vast customer base across Ukraine</li>
							<li>
								Extensive marketing opportunities to promote your products through our company
							</li>
							<li>The opportunity to work from any city</li>
						</ul>
					</div>
				</div>
				<div class="benefit__right">
					<div class="benefit__img">
						<img
							class="benefit__img-big"
							src="../assets/images/benefit2.png"
							alt="benefit img"
						/>
						<img
							class="benefit__img-small"
							src="../assets/images/benefitSmall.png"
							alt="benefit small img"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="terms">
		<div class="terms__container">
			<div class="terms__info">
				<h2>Terms of cooperation</h2>
				<h5 class="terms__sub">
					We are considering cooperation to offer customers the maximum range of products
				</h5>
				<div class="terms__list">
					<div class="terms__item">
						<p>.01</p>
						<div class="terms__item-text">
							<h5>Application</h5>
							<p>
								Fill out the cooperation application form or contact our purchasing and quotation
								department by phone
							</p>
						</div>
					</div>
					<div class="terms__item">
						<p>.02</p>
						<div class="terms__item-text">
							<h5>Terms</h5>
							<p>
								We discuss the terms of our cooperation on an equal and mutually beneficial basis
							</p>
						</div>
					</div>
					<div class="terms__item">
						<p>.03</p>
						<div class="terms__item-text">
							<h5>Price list</h5>
							<p>
								Send us your price list with auto parts or accessories, and we will add it to the
								catalog free of charge
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import joinImg from '@/assets/images/join.png';
import TheWhy from '@/blocks/TheWhy.vue';
export default {
	name: 'CooperationPage',
	components: { TheWhy },
	data() {
		return {
			joinImg
		};
	}
};
</script>

<style lang="scss" scoped>
// about///////////////////////////////////////////
.join {
	&__banner {
		position: relative;
		min-height: 350px;
		@include b-up(md) {
			min-height: 550px;
		}
	}
	&__bg {
		position: absolute;
		top: 0;
		height: 100%;
		right: 0;
		left: 0;
		&::before,
		&::after {
			position: absolute;
			content: '';
			top: 0;
			width: 50%;
			height: 100%;
		}
		&::before {
			left: 50%;
			background: rgba(22, 16, 16, 0.2);
		}
		&::after {
			left: 0;
			background: rgba(22, 16, 16, 0.5);
			backdrop-filter: blur(20px);
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	&__text {
		position: relative;
		font-weight: 700;
		padding-top: 60px;
		color: $white;
		max-width: 540px;
		@include b-up(md) {
			padding-top: 110px;
		}
	}
	h1 {
		margin-bottom: 15px;
	}
	span {
		display: block;
		color: $orange;
	}

	p {
		max-width: 380px;
	}
}

// benefit///////////////////////////////////////////
.benefit {
	padding: 20px 0;
	overflow-x: hidden;
	@include b-up(md) {
		padding: 40px 0 160px;
	}

	&__wrap {
		display: flex;
		flex-direction: column;
		gap: 20px;
		background-color: $grey;
		@include b-up(md) {
			flex-direction: row;
		}
	}
	&__left {
		@include b-up(md) {
			width: 50%;
		}
	}
	&__right {
		display: flex;
		justify-content: center;
		padding-bottom: 20px;
		@include b-up(md) {
			display: flex;
			justify-content: end;
			width: 50%;
		}
	}
	// .benefit__img
	&__img {
		position: relative;
		width: 300px;
		@include b-up(md) {
			width: 560px;
		}
	}
	&__img-big {
		display: none;
		@include b-up(md) {
			display: block;
			position: absolute;
			top: 0;
			left: 70px;
			width: 350px;
			height: 550px;
			object-fit: contain;
			border-radius: 5%;
		}
		@include b-up(lg) {
			top: 70px;
			left: 70px;
			width: 560px;
			height: 600px;
		}
	}
	&__img-small {
		@include b-up(md) {
			position: absolute;
			top: 50%;
			left: -60px;
			width: 270px;
			height: 270px;
			object-fit: contain;
			transform: translateY(-50%);
			border-radius: 5%;
			@include b-up(md) {
				width: 200px;
				height: 200px;
			}
		}
	}
	// .benefit__text
	&__text {
		color: $black;
		padding: 40px 40px 0;
		@include b-up(md) {
			padding: 50px 50px 30px;
		}
		@include b-up(lg) {
			padding: 70px 70px 230px;
		}
		h2 {
			margin-bottom: 20px;
			@include b-up(md) {
				margin-bottom: 36px;
			}
		}
		h5 {
			margin-bottom: 18px;
			@include b-up(md) {
				margin-bottom: 24px;
			}
		}
	}
	// .benefit__list
	&__list {
		margin-top: 10px;
		padding-left: 30px;
		margin-bottom: 30px;
		line-height: 1.5;
		li:not(:last-child) {
			margin-bottom: 10px;
		}
		li:before {
			content: '\2022';
			color: #ea6520;
			font-weight: 700;
			display: inline-block;
			width: 1.2em;
			margin-left: -1.2em;
		}
	}
	&__link {
		color: $orange;
		transition: $time;
		@include hover {
			color: $white;
		}
	}
}

// terms///////////////////////////////////////////
.terms {
	padding: 40px 0;
	// terms__info
	&__info {
		h2 {
			text-align: center;
			margin-bottom: 20px;
			font-weight: 800;
		}
	}
	&__sub {
		text-align: center;
		margin-bottom: 50px;
	}
	// .terms__list
	&__list {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 20px;
		padding-left: 15px;
		@include b-up(md) {
			grid-template-columns: repeat(2, 1fr);
		}
		@include b-up(lg) {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	// .terms__item
	&__item {
		display: flex;
		padding: 50px 50px 50px 100px;
		border: 1px solid $grey;
		border-radius: 4px;
		position: relative;
		& > p {
			width: 100px;
			height: 100px;
			box-shadow: 0 0.625rem 1.25rem hsla(0, 0%, 75.7%, 0.5);
			color: #ea6520;
			font-size: 56px;
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			border-radius: 50%;
			overflow: hidden;
			border: 4px solid #fff;
			z-index: 1;
			background-color: #fff;
			top: -1.25rem;
			left: -1.25rem;
			&::before {
				position: absolute;
				content: '';
				width: 110px;
				height: 110px;
				top: -25%;
				left: -25%;
				-webkit-transform: translate(-15%, -15%) rotate(45deg);
				transform: translate(-15%, -15%) rotate(45deg);
				background-color: #f1f1f1;
				z-index: -1;
			}
		}
		h5 {
			font-weight: 700;
			margin-bottom: 15px;
		}
	}
}
</style>
