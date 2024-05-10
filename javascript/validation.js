//1.見本となるページと同じようにデザインが適用されていること（ヘッダーとフッターはなくても構いません。）
//2.jQueryを使用していないこと（JavaScriptのみを使用してください。）
//3.Eメールが異なる場合、Eメール(確認用)フォームの下部に”Eメールが一致しません”というエラーメッセージを表示させ、文字色に#d14539を適用させること
//4.Eメールが異なる場合、Eメール(確認用)フォームの背景色にrgba(230,169,171,.5)を適用させること
//5.Eメールが同じ場合は、エラーメッセージやフォームの背景色を表示させないこと


  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
      form.addEventListener('input', emailValidation);


    function emailValidation(event) {
      event.preventDefault();
      const emailConfirmField = document.getElementById('email_confirm');
      const emailField = document.getElementById('email');
      const errorRow = document.getElementById('error_row');
      if (emailConfirmField.value && emailField.value && emailConfirmField!== emailField.value) {
        errorRow.style.display = 'table-row';
        errorRow.style.color = '#d14539';
        errorRow.style.background = 'rgba(230,169,171,.5)'
      } else {
        errorRow.style.display = 'none';

      }
    }
  });

