<template>
	<view class="container">
		<empty :hasLogin='hasLogin' :empty='empty'></empty>
		<cart-item :cartList="cartList"></cart-item>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import empty from '@/components/cart/empty.vue'
	import cartItem from '@/components/cart/cart-item.vue'
	export default {
		components: {
		empty,cartItem
		},
		data() {
			return {
				allChecked: false, //全选状态  true|false
				empty: false, //空白页现实  true|false
				cartList: [],
			};
		},
		onLoad(){
			this.loadData();
		},
		computed:{
			...mapState(['hasLogin','user_id'])
		},
		methods: {
			//请求数据
			async loadData(){
				let res = await this.$get('/index/cart',{user_id:this.user_id});
				let list=res.data;
				if(list.length!=0){
					let cartList = list.map(item=>{
					item.checked = true;
					return item;
				});
				this.cartList = cartList;
				this.calcTotal();  //计算总价
				}
				
			},
			
			//创建订单
			createOrder(){
				let list = this.cartList;
				let goodsData = [];
				list.forEach(item=>{
					if(item.checked){
						goodsData.push(item)
					}
				})

				uni.navigateTo({
					url: `/pages/goods/order/createOrder?data=${JSON.stringify({
						goodsData: goodsData,total:this.total
					})}`
				})
				uni.showToast({
					title:'正在创建订单'
				})
				
			}
		}
	}
</script>

<style lang='scss'>
	.container{
		padding-bottom: 134upx;
		/* 空白页 */
		
	}
	
</style>

