<template>
  <div
    :id="id"
    class="test"
    :color="color"
    :particleOpacity="particleOpacity"
    :linesColor="linesColor"
    :particlesNumber="particlesNumber"
    :shapeType="shapeType"
    :particleSize="particleSize"
    :linesWidth="linesWidth"
    :lineLinked="lineLinked"
    :lineOpacity="lineOpacity"
    :linesDistance="linesDistance"
    :moveSpeed="moveSpeed"
    :movementDirection="movementDirection"
    :hoverEffect="hoverEffect"
    :hoverMode="hoverMode"
    :clickEffect="clickEffect"
    :clickMode="clickMode"
  ></div>
</template>
<script>
/* eslint-disable */
export default {
  props: {
    color: {
      type: String,
      default: '#dedede'
    },
    particleOpacity: {
      type: Number,
      default: 1.0
    },
    particlesNumber: {
      type: Number,
      default: 80
    },
    shapeType: {
      type: String,
      default: 'circle'
    },
    particleSize: {
      type: Number,
      default: 4
    },
    linesColor: {
      type: String,
      default: '#dedede'
    },
    linesWidth: {
      type: Number,
      default: 1
    },
    lineLinked: {
      type: Boolean,
      default: true
    },
    lineOpacity: {
      type: Number,
      default: 0.4
    },
    linesDistance: {
      type: Number,
      default: 150
    },
    moveSpeed: {
      type: Number,
      default: 3
    },
    movementDirection: {
      type: String,
      default: 'bottom-left'
    },
    hoverEffect: {
      type: Boolean,
      default: false
    },
    hoverMode: {
      type: String,
      default: 'grab'
    },
    clickEffect: {
      type: Boolean,
      default: false
    },
    clickMode: {
      type: String,
      default: 'push'
    }
  },
  data () {
    return {
      id: 'particles-instance-' + Math.floor(Math.random() * 5000)
    }
  },
  mounted () {
    require('particles.js')
    this.$nextTick(() => {
      this.initParticleJS(
        this.color,
        this.particleOpacity,
        this.particlesNumber,
        this.shapeType,
        this.particleSize,
        this.linesColor,
        this.linesWidth,
        this.lineLinked,
        this.lineOpacity,
        this.linesDistance,
        this.moveSpeed,
        this.movementDirection,
        this.hoverEffect,
        this.hoverMode,
        this.clickEffect,
        this.clickMode
      )
    })
  },
  methods: {
    initParticleJS (
      color,
      particleOpacity,
      particlesNumber,
      shapeType,
      particleSize,
      linesColor,
      linesWidth,
      lineLinked,
      lineOpacity,
      linesDistance,
      moveSpeed,
      movementDirection,
      hoverEffect,
      hoverMode,
      clickEffect,
      clickMode
    ) {
        particlesJS(this.id, {
           "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "retina_detect": true
        })
    }
  }
}
</script>
<style lang="css" scoped>
.test{
    z-index: -1;
}
</style>