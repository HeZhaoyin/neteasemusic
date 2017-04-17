<template lang="html">
	<div class="banner">
		<ul ref="bannerUl" @touchmove.prevent="move" @touchstart.prevent="start" @touchend.prevent="end" :class="{trans:isTrans}">
			<li><img src="../../../assets/banner44.jpg" alt=""></li>
			<li><img src="../../../assets/banner11.jpg" alt=""></li>
			<li><img src="../../../assets/banner22.jpg" alt=""></li>
			<li><img src="../../../assets/banner33.jpg" alt=""></li>
			<li><img src="../../../assets/banner44.jpg" alt=""></li>
			<li><img src="../../../assets/banner11.jpg" alt=""></li>
		</ul>
		<ol ref="bannerOl">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ol>
	</div>
</template>

<script>
export default {
  data() {
    return {
      index: 1,
      distance: 0,
      startX: 0,
      endX: 0,
      isTrans: true,
      timer: null
    }
  },
  mounted: function() {
    this.$nextTick(() => {
      this.setOl();
      this.timer = setInterval(this.autoPlay, 2000);
      this.$refs.bannerUl.addEventListener('webkitTransitionEnd', () => {
        if (this.index >= 5) {
          this.isTrans = false;
          this.index = 1;
        } else if (this.index <= 0) {
          this.isTrans = false;
          this.index = 4;
        }
        this.play(-this.index * 100);
        this.setOl();
      })
    })
  },
  methods: {
    setOl: function() {
      var myLi = this.$refs.bannerOl.children;
      for (var i = 0; i < myLi.length; i++) {
        myLi[i].className = '';
      }
      this.$refs.bannerOl.children[this.index - 1].className = 'current';
    },
    autoPlay: function() {
      this.isTrans = true;
      this.index++;
      this.play(-this.index * 100);
    },
    play: function(dis) {
      //这里有bug，如果路由进入了这个页面，但是切到了其他页面，会因为找不到$refs.bannerUl报错
      //因此加入一个判断
      //待修复
      if (this.$refs.bannerUl) {
        this.$refs.bannerUl.style.transform = 'translate(' + dis + 'vw)';
      }
    },
    start: function(e) {
      this.startX = e.touches[0].clientX;
    },
    move: function(e) {
      clearInterval(this.timer);
      this.isTrans = false;
      this.distance = e.touches[0].clientX - this.startX;
      this.play(-this.index * 100 + this.distance / 375 * 100);
    },
    end: function() {
      if (this.distance > 0) {
        this.index--;
      } else {
        this.index++;
      }
      this.isTrans = true;
      this.play(-this.index * 100);
      this.timer = setInterval(this.autoPlay, 2000);
    }
  }
}
</script>

<style scoped>
.banner {
  overflow: hidden;
  position: relative;
}

.banner>ul {
  width: 600%;
  overflow: hidden;
  transform: translate(-100vw);
}

.banner>ul>li {
  float: left;
  width: 100vw;
}

.banner>ul>li>img {
  display: block;
  width: 100vw;
}

.trans {
  transition: all 0.3s ease;
}

.banner>ol {
  position: absolute;
  z-index: 99;
  left: 29%;
  top: 80%;
}

.banner>ol>li {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(108, 108, 108, 0.7);
  float: left;
  margin-left: 10px;
}

.banner>ol>li.current {
  background-color: #fff;
}
</style>
