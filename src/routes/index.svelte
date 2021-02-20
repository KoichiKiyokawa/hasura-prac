<script lang="ts">
  	import firebase from "firebase/app";
  // import  "firebase/auth";

  function onSubmit(): void {
    const form = Object.fromEntries(new FormData(document.forms[0]).entries())
    console.log(form)
    // firebase.auth().signInWithEmailAndPassword()
  }
</script>

<form name="login" on:submit|preventDefault={onSubmit}>
  <label>
    メールアドレス
    <input type="email" autocomplete="email" name="email" />
  </label>

  <label>
    パスワード
    <input type="password" autocomplete="current-password" name="password" />
  </label>

  <button>ログイン</button>
</form>

<style lang="sass">
form[name="login"]
	display: block
	padding: 1rem
	border: 1px solid #999
	border-radius: 1rem
	box-shadow: 0 0 2px
	max-width: 640px
label, input
	display: block
input
	padding: 0.5rem
	border: 1px solid #333
button
	margin-top: 1rem
	color: white
	background-color: skyblue
	border: none
	border-radius: 4px
	padding: 0.5rem 1rem
	cursor: pointer
</style>
