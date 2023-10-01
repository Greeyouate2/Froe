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
