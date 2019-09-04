<template>
	<view class="container">
		<view class="page-body">
			<scroll-view class="nav-left" scroll-y :style="'height:'+height+'px'">
				<view class="nav-left-item" @click="typeClickMain(item,index)" :key="index" :class="index==typeActive?'active':''"
				 v-for="(item,index) in typeList">
					{{item.title}}
				</view>
			</scroll-view>
			<scroll-view class="nav-right" scroll-y :scroll-top="scrollTop" @scroll="scroll" :style="'height:'+height+'px'"
			 scroll-with-animation>
				<view  class="nav-right-item" v-for="(item,index) in subTypeList" :key="index" @click="goProduct(item.id)">
					<image :src="item.image" />
					<view>{{item.title}}</view>
				</view>
	
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'tree-list',
		props:{
			typeList:{
				type:Array,
				default:function(){
					return []
				}
			},
			subTypeList:{
				type:Array,
				default:function(){
					return []
				}
			}
		},
		data() {
			return {
				height: 0,
				typeActive: 0,
				scrollTop: 0,
				scrollHeight: 0,
			}
		},
		methods: {
			scroll(e) {
				this.scrollHeight = e.detail.scrollHeight;
			},
			typeClickMain(categroy, index) {
				this.typeActive = index;
		
			},
			goProduct(id){
				uni.navigateTo({
					url:`/pages/goods/detail/detail`
				})
			}
		},
		created: function() {
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
	
	
	.nav-left {
		width: 187.5upx;
	
		.nav-left-item {
			height: 100upx;
			border-right: solid 1px #E0E0E0;
			font-size: 30upx;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	
		.active {
			color: $theme-color;
			
		}
	}
	
	
	
	.nav-right {
		width: 562.5upx;
	
		.nav-right-item {
			width: 33.33%;
			height: 220upx;
			float: left;
			text-align: center;
			font-size: 28upx;
	
			image {
				width: 150upx;
				height: 150upx;
			}
		}
	}
</style>
