<template>
	<view>
		<user-card :userinfo='userinfo' :expand="expand"></user-card>
		<grid :nav='nav'></grid>
		<uni-list>
			<uni-list-item title="地址管理"></uni-list-item>
			<uni-list-item title="账号管理"></uni-list-item>
			<uni-list-item title="客服管理"></uni-list-item>
			<uni-list-item title="关于"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import userCard from '@/components/mine/user-card.vue'
	import grid from '@/components/common/grid.vue'
	import uniList from '@/components/mine/uni-list.vue'
	import uniListItem from '@/components/mine/uni-list-item.vue'
	export default {
		components: {
			userCard,
			grid,
			uniList,
			uniListItem
		},
		data() {
			return {
				userinfo: {
					username: '小明',
					avatar: 'http://cdn.mzyun.tech/mzyun.png'
				},
				expand: [{
					number: 12,
					name: '优惠券'
				}, {
					number: 34,
					name: '积分'
				}, {
					number: 56,
					name: '零钱'
				}],
				nav: [{
					image: '/static/mine/order1.png',
					name: '全部订单'
				}, {
					image: '/static/mine/order2.png',
					name: '待付款'
				}, {
					image: '/static/mine/order3.png',
					name: '待收货'
				}, {
					image: '/static/mine/order4.png',
					name: '待评价'
				}, {
					image: '/static/mine/order5.png',
					name: '已完成'
				}]
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
