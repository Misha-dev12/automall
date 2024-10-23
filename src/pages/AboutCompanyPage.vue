<template>
	<section class="about">
		<div class="about__banner">
			<div class="about__bg">
				<img
					:src="aboutImg"
					alt="about background image"
				/>
			</div>
			<div class="about__container">
				<div class="about__text">
					<h1>
						About the Company
						<span>AUTOMALL</span>
					</h1>
					<p>
						The company has been in the auto parts market since 2008. We stock auto parts from
						1000's of manufacturers, 20,000,000 original and analogous auto parts. The quality of
						our products is certified.
					</p>
				</div>
			</div>
		</div>
	</section>
	<section class="mission">
		<div class="mission__container">
			<div class="mission__info">
				<h2>Our mission</h2>
				<div class="mission__text">
					<p>
						We strive to unify the auto parts market on one platform, ensuring efficient and
						comfortable interactions and purchases. Our goals include raising quality standards in
						the market, improving service, optimizing processes, and providing access to all
						necessary information.
					</p>
					<p>
						The transport industry occupies a crucial role in the development of the global economy
						and trade. We specialize in selling parts for cars from various brands. Thanks to the
						introduction of new technologies and innovative approaches, we have created a convenient
						and accessible site for all customers.
					</p>
					<p>On the website you can find a wide range of auto parts:</p>
				</div>
				<ul class="mission__list">
					<li>engine parts;</li>
					<li>parts of the suspension and depreciation;</li>
					<li>steering parts;</li>
					<li>parts of the braking system;</li>
					<li>parts of electrical equipment;</li>
					<li>body parts.</li>
				</ul>
			</div>
		</div>
	</section>
	<section class="benefit">
		<div class="benefit__container">
			<div class="benefit__info">
				<div class="benefit__img">
					<img
						src="../assets/images/benefit.png"
						alt=""
					/>
				</div>
				<div class="benefit__text">
					<h2>Benefit for suppliers</h2>
					<h5>What will you get?</h5>
					<ul class="benefit__list">
						<li>convenient format for productive cooperation;</li>
						<li>huge audience of our customers;</li>
						<li>extensive marketing opportunities for your products;</li>
						<li>you can work from any city.</li>
					</ul>
					<RouterLink
						to="Cooperation"
						class="benefit__link"
					>
						Read more information for suppliers
					</RouterLink>
				</div>
			</div>
		</div>
	</section>
	<TheWhy />
	<section class="delivery">
		<div class="delivery__container">
			<div class="delivery__info">
				<div class="delivery__img">
					<img
						src="../assets/images/delivery.png"
						alt=""
					/>
				</div>
				<div class="delivery__text">
					<h2>Delivery and payment</h2>
					<h5>Easy payment and delivery</h5>
					<ul class="delivery__list">
						<li>the ability to receive products anywhere;</li>
						<li>exchange or return of goods within 14 days;</li>
						<li>guarantee for the entire product line in the catalog;</li>
						<li>24/7 customer support.</li>
					</ul>
					<RouterLink
						class="delivery__link"
						to="Cooperation"
					>
						Read more information for suppliers
					</RouterLink>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import aboutImg from '@/assets/images/about.png';
import TheWhy from '@/blocks/TheWhy.vue';
export default {
	name: 'AboutCompanyPage',
	components: { TheWhy },
	data() {
		return {
			aboutImg
		};
	}
};
</script>

<style lang="scss" scoped>
// about///////////////////////////////////////////

.about {
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

// mission///////////////////////////////////////////
.mission {
	padding: 40px 0;
	// .mission__info
	&__info {
		max-width: 900px;
		margin: 0 auto;
	}
	h2 {
		text-align: center;
		margin-bottom: 20px;
		font-weight: 800;
	}
	// .mission__text
	&__text {
		display: flex;
		flex-direction: column;
		gap: 20px;
		p:first-child {
			font-size: 16px;
			font-weight: 800;
		}
	}
	// .mission__list
	&__list {
		margin-top: 10px;
		padding-left: 40px;
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
}

// benefit///////////////////////////////////////////
.benefit {
	// .benefit__bg
	&__info {
		position: relative;
		min-height: 500px;
		padding: 20px;
		@include b-up(md) {
			min-height: 600px;
		}
	}
	// .benefit__img
	&__img {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	// .benefit__text
	&__text {
		position: relative;
		color: $white;
		padding: 60px 40px 50px;
		backdrop-filter: blur(20px);
		max-width: 400px;
		height: 450px;
		@include b-up(md) {
			padding: 130px 80px 50px;
			max-width: 760px;
			height: 560px;
		}
		h2 {
			margin-bottom: 36px;
		}
		h5 {
			margin-bottom: 24px;
		}
	}
	// .benefit__list
	&__list {
		margin-top: 10px;
		padding-left: 35px;
		margin-bottom: 30px;
		li:not(:last-child) {
			margin-bottom: 10px;
		}
		@include b-up(md) {
			padding-left: 40px;
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

// delivery///////////////////////////////////////////
.delivery {
	padding-bottom: 40px;
	// .benefit__bg
	&__info {
		position: relative;
		min-height: 500px;
		padding: 20px;
		@include b-up(md) {
			min-height: 600px;
		}
	}
	// .delivery__img
	&__img {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	// .delivery__text
	&__text {
		position: relative;
		color: $white;
		padding: 60px 40px 50px;
		backdrop-filter: blur(20px);
		max-width: 400px;
		height: 450px;
		@include b-up(md) {
			padding: 130px 80px 50px;
			max-width: 760px;
			height: 560px;
		}
		h2 {
			margin-bottom: 36px;
		}
		h5 {
			margin-bottom: 24px;
		}
	}
	// .delivery__list
	&__list {
		margin-top: 10px;
		padding-left: 40px;
		margin-bottom: 30px;
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
</style>
