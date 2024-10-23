<template>
	<div class="contacts">
		<div class="contacts__container">
			<h4>Contacts</h4>
			<div class="contacts__list-wrap">
				<ul class="contacts__list">
					<h5>Office:</h5>
					<li class="contacts__item--address">
						<a
							href="https://www.google.com/search?sca_esv=757e01b514b177ca&q=US,+131+BROOKVILLE+RD+GLEN+HEAD+NY+11545-3329&sa=X&ved=2ahUKEwjFtq-vxJWJAxU4efEDHY89HQAQ7xYoAHoECAkQAQ&biw=1920&bih=953&dpr=1"
							target="_blank"
						>
							USA, 131 BROOKVILLE RD GLEN HEAD NY 11545-3329
						</a>
					</li>
					<li class="contacts__item--tel"><a href="tel:+0972170001">(097) 217-00-01</a></li>
					<li class="contacts__item--tel"><a href="tel:+0632170001">(063) 217-00-01</a></li>
					<li class="contacts__item">Mon - Fri: 9:00-18:00</li>
					<li class="contacts__item">Sat: 9:00-14:00</li>
					<li class="contacts__item">Sun: Day off</li>
					<li class="contacts__item--mail">
						<a href="mailto:carproua@gmail.com">carproua@gmail.com</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ContactsPage'
};
</script>

<style lang="scss" scoped>
.contacts {
	padding: 20px 0;
	h4 {
		margin: 0 0 40px 0;
	}
	&__list-wrap {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}
	// .contacts__list
	&__list {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	&__item--tel,
	&__item--address {
		a {
			transition: $time;
			@include hover {
				color: $orange;
			}
		}
	}
	&__item--mail {
		margin-top: 20px;
		a {
			color: $orange;
			font-weight: 600;
			transition: $time;
			@include hover {
				color: $black;
			}
		}
	}
}
</style>
