//検索機能を持つメモ帳を実装してもらいます。
//検索機能は先に実装しておきました。頑張って整合性をとりつつ動かしてください。
//不明点は h_中村 に直接聞いてください


const memoList = document.getElementById("memoList");
const searchInput = document.getElementById("searchInput");


searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const items = memoList.getElementsByTagName("li"); //items・・・memolist(luタグ)の中のli

  for (let item of items) { //item・・・liタグのこと
    const text = item.querySelector("span").textContent.toLowerCase();
    item.style.display = text.includes(keyword) ? "flex" : "none"; 
    // 入力と部分一致  `item.style.display = text.includes(keyword) ? "flex" : "none";` <- 実装コード
    // 入力と完全一致  `item.style.display = text === keyword ? "flex" : "none";`
    // 入力と前方一致　`item.style.display = text.startsWith(keyword) ? "flex" : "none";`
  }
});
