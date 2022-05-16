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
					Viet Nam Commodity Futures
				</h1>
				<p class="subheading font-weight-regular">
					Thuật toán giao dịch hàng đầu thế giới,
					<br />Mô hình định giá Futures, Option tiên tiến
					<a href="https://zalo.me/dautu101" target="_blank"
						>@VNCF</a
					>
				</p>
			</v-flex>

			<v-flex mb-5 xs12>
				<h2 class="headline font-weight-bold mb-3">Cơ hội kiếm lợi nhuận từ  Thị trường toàn cầu</h2>

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
				text: 'Email: support@vncf.vn',
				
			},
			{
				text: 'hoặc:  research@vncf.vn',
				
			}
			
		],
		importantLinks: [
			{
				text: 'Zalo',
				href: 'https://zalo.me/vncf'
			},
			{
				text: 'WhatsApp Business',
				href: 'https://wa.me/message/QLTBJG5O3HHLE1'
			},
			{
				text: 'Tiktok',
				href: 'https://www.tiktok.com/@vncf.vn'
			}
			
		],
		whatsNext: [
			{
				text: 'Nhóm Zalo cộng đồng',
				href: 'https://zalo.me/g/vncf'
			},
			{
				text: 'Mở tài khoản và nhận tư vấn',
				href: 'https://bit.ly/OpenVNCF'
			},
			{
				text: 'Hướng dẫn giao dịch',
				href: 'https://drive.google.com/file/d/1zKYg9qeojCaHQHmHdgPjj5NbwsLAt-9e/view?usp=sharing'
			}
		]
	})
}
</script>

