<template>
	<view class="">
		<tree-list :typeList="typeList" :subTypeList="subTypeList"></tree-list>
	</view>
</template>

<script>
	import treeList from '@/components/type/tree-list.vue'
	import mockData from '@/data/type.js'
	export default {
		components: {
			treeList
		},
		data() {
			return {
				typeList:[],
				subTypeList:[]
			}
		},
		onLoad() {
			this.typeList=mockData.typeList;
			this.subTypeList=mockData.subTypeList
		}
		
	}
</script>

<style lang="scss">

</style>
