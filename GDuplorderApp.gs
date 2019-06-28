//init
function doPost(e) {
    var params = JSON.parse(e.postData.getDataAsString()); //jsonファイルを取得し，parseする

    if(params.type === "url_verification"){
        return ContentService.createTextOutput(params.challenge);
    }

    //ファイルをGoogle Driveに移す
    if(params.event.type === "file_shared") {
        moveFiles(params);
    }
    return ContentService.createTextOutput('ok');
}

//fileをドライブに移す処理
function transferFiles
    //送りたくないファイル形式を指定する
    //var notCopyType = [""];

    var scriptProperties = PropertiesService.getScriptProperties();
    var slackAccessToken = scriptProperties.getProperty("TOKEN"); // slackAccessTokenにslackのアクセストークンを渡す
    var folderId = scriptProperties.getProperty("FOLDER_ID"); // folderIdにgoogle driveのフォルダーIDを渡す

    try{
        // File ID取得
        var fileId = params.event.file_id;
        // ユーザID取得
        var userId = params.event.user_id;
        var userResponse = UrlFetchApp.fetch('https://slack.com/api/users.info?token='+slackAccessToken+'&user='+userId);
        var userInfo = JSON.parse(userResponse.getContentText());
        // アップロード先のフォルダ名に使用する
        var userName = userInfo.user.name;
        // リンクをSlackに貼り直す際のコメントに使用する
        var displayName = userInfo.user.profile.display_name;
        if (displayName === "") {
            displayName = userInfo.user.profile.real_name;
        }
    }

}

