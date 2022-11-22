// ドロップダウン
$(function () {
  $("ul.globalnav li").hover(
    function () {
      $(".dropdown:not(:animated)", this).slideDown();
    },
    function () {
      $(".dropdown", this).slideUp();
    }
  );
});

// スライダー
$('.slider').slick({
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  speed: 300,//スライドのスピード。初期値は300。
  slidesToShow: 3,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  centerMode: true,//要素を中央ぞろえにする
  variableWidth: true,//幅の違う画像の高さを揃えて表示
  dots: true,//下部ドットナビゲーションの表示
});

// ハンバーガーメニュー
$(".openbtn1").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

// よくある質問
$(function(){
  $('.accordion_one .ac_header').click(function(){
    $(this).next('.ac_inner').slideToggle();
    $(this).toggleClass("open");
  });
});

//下から表示させる要素を指定
let $pagetop = $('.ScrollTop');

$(window).on( 'scroll', function () {
  //スクロール位置を取得
  if ( $(this).scrollTop() < 1000 ) {
    $pagetop.removeClass('isActive');
  } else {
    $pagetop.addClass('isActive');
  }
});