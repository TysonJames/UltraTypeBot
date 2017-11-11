(function() {
    window.stop();

    const IS_LOCAL = false,
        URL_REMOTE = "https://rawgit.com/ultratype/UltraTypeBot/master/OUT/OUT.js",
        URL_OUT = IS_LOCAL ? chrome.extension.getURL('OUT/OUT.js') : URL_REMOTE,
        SCRIPT_OUT = "<script src='" + URL_OUT + "'></script>\n";
    let loader = new XMLHttpRequest();
    loader.open("GET", location.href, true);
    loader.onreadystatechange = function() {
        if (loader.readyState == 4) {
            const res = loader.responseText;
            document.open();
            document.write(`${SCRIPT_OUT}${res}`);
            document.close();
        }
    }
    loader.send();
})();