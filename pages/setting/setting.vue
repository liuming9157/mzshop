<template>
	<view class="center_container">
		<uni-list>
			<uni-list-item title="用户名"></uni-list-item>
			<uni-list-item title="头像"></uni-list-item>
			<uni-list-item title="密码"></uni-list-item>
			<uni-list-item title="手机号"></uni-list-item>
			<uni-list-item title="邮箱"></uni-list-item>
		</uni-list>
		<uni-list>
			<uni-list-item title="退出"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import uniList from '@/components/mine/uni-list.vue'
	import uniListItem from '@/components/mine/uni-list-item.vue'	
	export default {
		components:{
			uniList,uniListItem
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	
</style>
