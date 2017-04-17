<template lang="html">
	<div class="my-music-list">
		<div class="title">
			<span>推荐歌单</span>
			<span class="flag">></span>
		</div>
	</div>
</template>

<script>
export default {
}
</script>

<style scoped>
.my-music-list{

}
.my-music-list>.title{
	padding-left: 0.7rem;
	border-left: 3px solid #c70c0c;
}
.my-music-list>.title>span{
	font-size: 0.9rem;
	font-weight: 500;
}
.my-music-list>.title>.flag{
	display: inline-block;
	transform: scaleY(2);
	font-weight: 200;
	position: relative;
	top: -1px;
}
</style>
