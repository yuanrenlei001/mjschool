<template>
  <div class="container">
    <canvas v-for="page in pages" :id="'the-canvas'+page" :key="page"></canvas>
  </div>
</template>

<script>
  import PDFJS from 'pdfjs-dist'
  // import  Alert  from 'vux'
  export default {
    name: "index",
    data () {
      return {
        src: this.getImg+'/uploads/20200302/1583117050281_客满物流知识分享.pptx',
        pdf:this.getImg+'/uploads/20200302/1583117050281_客满物流知识分享.pptx',
        dialogVisible: true,
        pdfDoc: null,
        pageNum: 1,
        pageRendering: false,
        pageNumPending: null,
        scale: 0.9,
        pages:[]
      };
    },
    components: {
      PDFJS
      // Alert
    },
    created() {
    },
    methods:{
      _renderPage (num) {
        this.pdfDoc.getPage(num).then((page) => {
          let canvas = document.getElementById('the-canvas' + num)
          let ctx = canvas.getContext('2d')
          let dpr = window.devicePixelRatio || 1
          let bsr = ctx.webkitBackingStorePixelRatio ||
            ctx.mozBackingStorePixelRatio ||
            ctx.msBackingStorePixelRatio ||
            ctx.oBackingStorePixelRatio ||
            ctx.backingStorePixelRatio || 1
          let ratio = dpr / bsr
          let viewport = page.getViewport(screen.availWidth / page.getViewport(1).width)
          canvas.width = viewport.width * ratio
          canvas.height = viewport.height * ratio
          canvas.style.width = viewport.width + 'px'
          canvas.style.height = viewport.height + 'px'
          ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
          let renderContext = {
            canvasContext: ctx,
            viewport: viewport
          }
          page.render(renderContext)
          if (this.pages > num) {
            this._renderPage(num + 1)
          }
        })
      },
      _loadFile (url) {
        PDFJS.getDocument(url).then((pdf) => {
          this.pdfDoc = pdf
          console.log(pdf)
          this.pages = this.pdfDoc.numPages
          this.$nextTick(() => {
            this._renderPage(1)
          })
        })
      }
    },
    mounted(){
      this._loadFile('/static/uploads/20200302/1583117050281_客满物流知识分享.pptx')
    }
  }
</script>
