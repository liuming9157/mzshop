<template>
	<view class="container">
		<view class="page-body">
			<scroll-view class="nav-left" scroll-y :style="'height:'+height+'px'">
				<view class="nav-left-item" @click="categoryClickMain(item,index)" :key="index" :class="index==categoryActive?'active':''"
				 v-for="(item,index) in categoryList">
					{{item.name}}
				</view>
			</scroll-view>
			<scroll-view class="nav-right" scroll-y :scroll-top="scrollTop" @scroll="scroll" :style="'height:'+height+'px'"
			 scroll-with-animation>
				<view :id="index===0?'first':''" class="nav-right-item" v-for="(item,index) in subCategoryList" :key="index" @click="goProduct(item.id)">
					<image :src="item.image" />
					<view>{{item.name}}</view>
				</view>

			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				categoryList: [],
				subCategoryList: [],
				height: 0,
				categoryActive: 0,
				scrollTop: 0,
				scrollHeight: 0,
			}
		},
		methods: {
			scroll(e) {
				this.scrollHeight = e.detail.scrollHeight;
			},
			categoryClickMain(categroy, index) {
				this.categoryActive = index;
				this.subCategoryList = categroy.sub;

			},
			async getCategory() {
				let res=await this.$get('/index/type');
				this.categoryList = res.data;
				this.subCategoryList = this.categoryList[0].sub
			},
			goProduct(id){
				uni.navigateTo({
					url:`/pages/goods/detail/detail?id=${id}`
				})
			}
		},
		onLoad: function() {
			this.getCategory();
			this.height = uni.getSystemInfoSync().windowHeight;
		}
	}
</script>

<style lang="scss">
	page{
		background-color: white
	}
	.page-body {
		display: flex;
	}

	.nav {
		display: flex;
		width: 100%;
	}

	.nav-left {
		width: 25%;

		.nav-left-item {
			height: 100upx;
			border-right: solid 1px #E0E0E0;
			border-bottom: solid 1px #E0E0E0;
			font-size: 30upx;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.active {
			color: $theme-color;
			border-bottom:solid 2px $theme-color 
		}
	}



	.nav-right {
		width: 75%;

		.nav-right-item {
			width: 45%;
			height: 220upx;
			float: left;
			text-align: center;
			padding: 11upx;
			font-size: 28upx;

			image {
				width: 150upx;
				height: 150upx;
			}
		}
	}
</style>


