<script>
(function(){
  var topBarEl = document.querySelector('.top-bar');
  function scrollLogoEffect() {
    var x = window.pageYOffset / 150;
    requestAnimationFrame(function() {
      topBarEl.querySelector('div').style.filter = 'invert('+ x +')';
      topBarEl.style.backg
      roundColor = 'rgba(255, 255, 255, '+ x +')';
    });
  }
  window.addEventListener('scroll', scrollLogoEffect);
  scrollLogoEffect();
}());
</script>