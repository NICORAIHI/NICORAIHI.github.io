<script src="http://code.jquery.com/jquery-3.6.0.min.js"></script>
function header(){
	$.ajax({
		url: "header.html",
		cache: false,
		success: function(html){
			document.write(html);
		}
	});
}