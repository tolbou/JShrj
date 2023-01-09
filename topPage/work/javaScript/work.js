'use strict'; /* 厳格にエラーをチェック */
{
    window.addEventListener('DOMContentLoaded', function(){
  //name 属性が categories の input 要素（ラジオボタン）の集まり（静的な NodeList）を取得
  const input_categories = document.querySelectorAll("input[name=categories]");
  //全ての .target の要素（target クラスを指定された div 要素）を取得
  const targets = document.querySelectorAll(".target");
  
  //ループで各ラジオボタンにイベントリスナを設定
  for(let input_category of input_categories) {
    //change イベントリスナを各ラジオボタンに登録
    input_category.addEventListener('change',function(){    
      for(let target of targets) {
        //全ての .target の要素に display: block; を設定
        target.style.setProperty('display', 'block');
      }
      //ラジオボタンが選択された場合
      if( this.checked ) {
        //ラジオボタンの value 属性が All 以外の場合
        if(this.value !== 'All') {
          //target クラスの要素で data-category 属性にこのラジオボタンの value 属性の値が含まれていないものを全て取得
          const not_checked_categories = document.querySelectorAll('.target:not([data-category~=' + '"' + this.value + '"])');
          //取得した要素に display: none を設定して非表示に
          for(let not_checked_category of not_checked_categories) {
            not_checked_category.style.setProperty('display', 'none');
          }
        }
      }
    });
  }     
});


}
