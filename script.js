// リンク情報の配列
const links = [
    { text: "ホーム", url: "#" },
    { text: "ページ1", url: "#" },
    { text: "ページ2", url: "#" },
    { text: "ページ3", url: "#" }
];

// リンクを動的に生成する関数
function createMenuLinks() {
    const menuList = document.getElementById("menu-list");

    links.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = link.text;
        a.href = link.url;
        li.appendChild(a);
        menuList.appendChild(li);
    });
}

// ページが読み込まれたらリンクを生成
window.addEventListener("load", createMenuLinks);

document.addEventListener("DOMContentLoaded", function () {
    const createFolderButton = document.getElementById("createFolderButton");
    const siteNameInput = document.getElementById("siteNameInput");

    createFolderButton.addEventListener("click", function () {
        const siteName = siteNameInput.value;
        if (siteName) {
            // サイト名が入力されている場合、フォルダを作成
            createFolder(siteName);
        } else {
            alert("ウェブサイト名を入力してください。");
        }
    });

    function createFolder(siteName) {
        // サイト名を使ってフォルダを作成するロジックを追加
        // ここでは簡単な例を示しており、実際のファイルシステムの操作はできません
        // サイト名をフォルダ名に使用して、"kanrisaitoyou.html" にリダイレクトする
        const folderName = siteName.toLowerCase().replace(/ /g, "_");
        const redirectURL = folderName + "/kanrisaitoyou.html";
        window.location.href = redirectURL;
    }
});
