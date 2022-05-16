<template>
	<v-container>
		<v-layout text-center wrap>
			<v-flex xs12>
				<v-img
					:src="require('../assets/logo.svg')"
					class="my-3"
					contain
					height="200"
				></v-img>
			</v-flex>

			<v-flex mb-4>
				<h1 class="display-2 font-weight-bold mb-3">
					DAU TU 101
				</h1>
				<p class="subheading font-weight-regular">
					CƠ CẤU DANH MỤC THUA LỖ,
					<br />Miễn phí cùng Đầu Tư 101
					<a href="https://zalo.me/dautu101" target="_blank"
						>@dautu101</a
					>
				</p>
			</v-flex>

			<v-flex mb-5 xs12>
				<h2 class="headline font-weight-bold mb-3">Đồng hành cùng Đầu Tư 101</h2>

				<v-layout justify-center>
					<a
						v-for="(next, i) in whatsNext"
						:key="i"
						:href="next.href"
						class="subheading mx-3"
						target="_blank"
					>
						{{ next.text }}
					</a>
				</v-layout>
			</v-flex>

			<v-flex xs12 mb-5>
				<h2 class="headline font-weight-bold mb-3">Mạng xã hội chính</h2>

				<v-layout justify-center>
					<a
						v-for="(link, i) in importantLinks"
						:key="i"
						:href="link.href"
						class="subheading mx-3"
						target="_blank"
					>
						{{ link.text }}
					</a>
				</v-layout>
			</v-flex>

			<v-flex xs12 mb-5>
				<h2 class="headline font-weight-bold mb-3">Liên lạc với chúng tôi</h2>

				<v-layout justify-center>
					<a
						v-for="(eco, i) in ecosystem"
						:key="i"
						:href="eco.href"
						class="subheading mx-3"
						target="_blank"
					>
						{{ eco.text }}
					</a>
				</v-layout>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		ecosystem: [
			{
				text: 'Hotline: Đăng ký Premium',
				
			},
			{
				text: 'Email: support@dautu101.com',
				
			},
			{
				text: 'hoặc:  research@dautu101.com',
				
			}
			
		],
		importantLinks: [
			{
				text: 'Zalo',
				href: 'https://zalo.me/dautu101'
			},
			{
				text: 'WhatsApp Business',
				href: 'https://wa.me/message/QLTBJG5O3HHLE1'
			},
			{
				text: 'Tiktok',
				href: 'https://www.tiktok.com/@chungkhoan'
			}
			
		],
		whatsNext: [
			{
				text: 'Nhóm Zalo cộng đồng',
				href: 'https://zalo.me/g/wsxddc994'
			},
			{
				text: 'Nhóm Zalo WK',
				href: 'https://zalo.me/g/smqzbm020'
			},
			{
				text: 'Mở Tài khoản miễn phí VPS',
				href: 'https://bit.ly/VPSSecurities'
			},
			{
				text: 'hoặc Link VPS-WK',
				href: 'https://bit.ly/HTVPSSecurities'
			},
			{
				text: 'Hướng dẫn mở Tài khoản',
				href: 'https://drive.google.com/file/d/1zKYg9qeojCaHQHmHdgPjj5NbwsLAt-9e/view?usp=sharing'
			}
		]
	})
}
</script>

