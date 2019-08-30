<template>
	<view class="container">
		<empty :hasLogin='hasLogin' :empty='empty'></empty>
		<cart-item :cartList="cartList" :hasLogin="hasLogin"></cart-item>
	</view>
</template>

<script>
	import empty from '@/components/cart/empty.vue'
	import cartItem from '@/components/cart/cart-item.vue'
	import mockData from '@/data/cart.js'
	export default {
		components: {
			empty,
			cartItem
		},
		data() {
			return {
				hasLogin:true,
				empty: false, //空白页  true|false
				cartList:{}
			};
		},
		onLoad() {
			this.cartList=mockData.cartList
		},
		methods: {


		}
	}
</script>

<style lang='scss'>
	.container {
		padding-bottom: 134upx;

	}
</style>
