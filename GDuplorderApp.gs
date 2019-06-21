function doPost(e) {
    var params = JSON.parse(e.postData.getDataAsString()); //jsonファイルを取得し，parseする

    if(params.type === "url_verification"){
        return ContentService.createTextOutput(params.challenge);
    }
    return ContentService.createTextOutput('ok');
}

//fileをドライブに送る
function transferFiles{
    

}

