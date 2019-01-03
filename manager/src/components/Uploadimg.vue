<template>
	<div id="imgarea">
		<div id="filePicker">选择图片上传</div>
	</div>
</template>

<script>
import $ from 'jquery';

export default {
		name: 'Uploadimg',
		data() {
			return {
				imgsrc:'',
				imgkey:'',
			};
		},
		mounted(){
		    this.initWebUpload();
		},
		methods:{
		    initWebUpload() {
		      // 初始化Web Uploader
		      var uploader = WebUploader.create({
		        // 选完文件后，是否自动上传。
		        auto: true,
		        // swf文件路径
		        swf: 'https://cdn.staticfile.org/webuploader/0.1.1/Uploader.swf',
		        // 文件接收服务端。
		        server: 'http://localhost:9999/upload',
		        // 选择文件的按钮。可选。
		        // 内部根据当前运行是创建，可能是input元素，也可能是flash.
		        pick: '#filePicker',
		        // 只允许选择图片文件。
		        accept: {
		          title: 'Images',
		          extensions: 'gif,jpg,jpeg,bmp,png',
		          mimeTypes: 'image/*'
		        }
		      });
		
		
		      // 文件上传成功，给item添加成功class, 用样式标记上传成功。
		      uploader.on( 'uploadSuccess', function( file ,response) {
		
		        console.log(response.key);
						console.log(response.url);
		        //获得服务器的图片
						var imgarea = document.getElementById('imgarea')
		        var url = response.url;
						var key = response.key;
		        var img = document.createElement('img');
						img.style.width = '150px';
						img.style.height = '150px';
		        img.src=url;
						var text = document.createElement('p');
						text.innerText = '图片路径为：'+url;
						imgarea.appendChild(text);
		        imgarea.appendChild(img);
						
		
		      });
		    }
		  }
	}

</script>

<style scoped>
</style>
