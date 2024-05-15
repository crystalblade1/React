

<script src="https://code.jquery.com/jquery-2.2.4.js"></script>
$(document).ready(function(){
    $('.thumb a').click(function(e){
      e.preventDefault();
      $('.imgbox img').attr("src", $(this).attr("href"));
    });
  });