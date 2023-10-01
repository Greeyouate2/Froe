document.addEventListener("DOMContentLoaded", function () {
    const createFolderButton = document.getElementById("createFolderButton");
    const siteNameInput = document.getElementById("siteNameInput");

    createFolderButton.addEventListener("click", function () {
        const siteName = siteNameInput.value;
        if (siteName) {
            // サイト名をサーバーサイドに送信してフォルダとファイルを作成
            createSite(siteName);
        } else {
            alert("ウェブサイト名を入力してください。");
        }
    });

    function createSite(siteName) {
        // サーバーサイドのAPIを呼び出してフォルダとファイルを作成
        // サーバーサイドの処理が完了したらリダイレクトする
        // この例ではクライアント側のリダイレクト先を指定していますが、実際にはサーバーサイドが適切なリダイレクトを行う必要があります
        window.location.href = "kanrisaitoyou.html";
    }
});
