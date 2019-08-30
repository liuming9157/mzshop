<template>
	<view class="container">
		<empty v-if='cartList.length===0'></empty>
		<cart-item ref='cart' v-else :cartList="cartList" :hasLogin="hasLogin"></cart-item>
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
				cartList:{}
			};
		},
		onLoad() {
			this.cartList=mockData.cartList;
			
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
