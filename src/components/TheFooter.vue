<template>
	<footer class="footer">
		<div class="footer__container">
			<div class="footer__top">
				<div class="footer__list">
					<div class="footer__info">
						<div class="footer__logo">
							<RouterLink :to="{ name: 'HomePage' }">
								<img
									src="@/assets/images/logo.png"
									alt="logo"
									title="logo"
								/>
							</RouterLink>
						</div>
						<div class="footer__social">
							<h4>We are on social media</h4>
							<ul>
								<li>
									<a href="https://www.instagram.com/">
										<img
											src="/src/assets/icons/instagram.png"
											alt="icon instagram"
										/>
									</a>
								</li>
								<li>
									<a href="https://www.instagram.com/">
										<img
											src="/src/assets/icons/facebook.png"
											alt="icon facebook"
										/>
									</a>
								</li>
								<li>
									<a href="https://www.instagram.com/">
										<img
											src="/src/assets/icons/youtube.png"
											alt="icon youtube"
										/>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="footer__nav">
						<h4>Info</h4>
						<ul>
							<li><RouterLink :to="{ name: 'CatalogPage' }">Product catalog</RouterLink></li>
							<li><RouterLink :to="{ name: 'AboutCompanyPage' }">About the company</RouterLink></li>
							<li><RouterLink :to="{ name: 'CooperationPage' }">Cooperation</RouterLink></li>
							<li><RouterLink :to="{ name: 'ContactsPage' }">Contacts</RouterLink></li>
						</ul>
					</div>
					<div class="footer__nav">
						<h4>Contacts</h4>
						<ul>
							<li><a href="tel:+0972170001">(097) 217-00-01</a></li>
							<li><a href="tel:+0632170001">(063) 217-00-01</a></li>
							<li class="footer__mail">
								<a href="mailto:Client-service@avtomall.com.ua">Client-service@avtomall.com.ua</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="footer__bottom">
				<p>©2024 AUTOMALL.COM.UA &nbsp;All rights reserved</p>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'TheFooter'
};
</script>

<style lang="scss" scoped>
.footer {
	background-color: $dark-blue;
	padding: 40px 0 10px;
	&__list {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		justify-content: center;
		color: $white;
		gap: 20px;
		@include b-up(sm) {
			grid-template-columns: repeat(2, 1fr);
		}
		@include b-up(md) {
			grid-template-columns: repeat(3, 1fr);
			gap: 40px;
		}
	}
	&__top {
		padding-bottom: 20px;
	}
	&__logo {
		margin-bottom: 20px;
		a {
			display: block;
			width: 200px;
			height: 55px;
			@include b-up(md) {
				width: 215px;
			}
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
	&__social {
		h4 {
			margin-bottom: 10px;
		}
		ul {
			display: flex;
			align-items: center;
			gap: 14px;
			li {
				width: 24px;
				height: 24px;

				a {
					@include hover {
						img {
							transform: scale(1.2);
						}
					}
					img {
						width: 100%;
						height: 100%;
						object-fit: contain;
						transition: $time;
					}
				}
			}
		}
	}
	&__nav {
		// flex-grow: 1;
		h4 {
			margin-bottom: 20px;
		}
		ul {
			display: flex;
			flex-direction: column;
			gap: 10px;
			li {
				transition: $time;
				@include hover {
					color: $orange;
				}
			}
		}
	}
	&__mail {
		margin-top: 15px;
		color: $orange;
		a {
			transition: $time;
			@include hover {
				color: $white;
			}
		}
	}
	&__bottom {
		padding: 25px 0 15px;
		border-top: 1px solid #555;
		p {
			display: flex;
			justify-content: center;
			color: $white;
			opacity: 0.5;
		}
	}
}
</style>
