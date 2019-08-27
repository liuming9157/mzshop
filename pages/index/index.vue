<template>
	<view class="">
		<item-container :num='num1' :list='list1' :banner='banner'></item-container>
		<item-container :num='num2' :list='list2' :banner='banner'></item-container>
		<item-container :num='num3' :list='list3' :banner='banner'></item-container>
		
	</view>
</template>

<script>
	import itemContainer from '@/components/index/item-container.vue'
	export default {
		components:{itemContainer},
		data() {
			return {
				banner: {
					title: '时尚好物 新人专区',
					subtitle: '全场满38元包邮',
					link: '新人专享'
				},
				list1: [{
					uri: 'http://cdn.mzyun.tech/shop/cate1.jpg',
					title: '时尚女装',
					subtitle: '复古上海风',
				}, {
					uri: 'http://cdn.mzyun.tech/shop/cate1.jpg',
					title: '时尚女装',
					subtitle: '复古上海风',
				}],
				list2: [{
					uri: 'http://cdn.mzyun.tech/shop/cate1.jpg',
					title: '时尚女装',
					subtitle: '复古上海风',
				}, {
					uri: 'http://cdn.mzyun.tech/shop/cate1.jpg',
					title: '时尚女装',
					subtitle: '复古上海风',
				},{
					uri: 'http://cdn.mzyun.tech/shop/cate1.jpg',
					title: '时尚女装',
					subtitle: '复古上海风',
				}],
				list3: [{
					uri: 'http://cdn.mzyun.tech/shop/cate1.jpg',
					title: '时尚女装',
					subtitle: '复古上海风',
				}, {
					uri: 'http://cdn.mzyun.tech/shop/cate1.jpg',
					title: '时尚女装',
					subtitle: '复古上海风',
				},{
					uri: 'http://cdn.mzyun.tech/shop/cate1.jpg',
					title: '时尚女装',
					subtitle: '复古上海风',
				},{
					uri: 'http://cdn.mzyun.tech/shop/cate1.jpg',
					title: '时尚女装',
					subtitle: '复古上海风',
				}],
				num1:2,
				num2:3,
				num3:4
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50upx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
