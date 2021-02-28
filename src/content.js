// Office file extensions with their respective programs
// taken from: https://en.wikipedia.org/wiki/List_of_Microsoft_Office_filename_extensions
var office_files = [
    {
        "program": "Word",
        "protocol": "ms-word",
        "extensions": ["doc", "dot", "docx", "dotx", "dotm", "docb", "rtf"]
    },
    {
        "program": "Excel",
        "protocol": "ms-excel",
        "extensions": ["xls", "xlt", "xlm", "xlsx", "xlsm", "xltx", "xltm", "xlsb"]
    },
    {
        "program": "Powerpoint",
        "protocol": "ms-powerpoint",
        "extensions": ["ppt", "pot", "pps", "pptx", "pptm", "potx", "potm", "ppsx"]
    }
];

function rewrite_link(link, protocol) {
    return protocol + ":ofe|u|" + link;
}

var links = document.getElementsByTagName("a");
for (i=0; i<links.length; i++) {
    // Check if it's a file link
    if (links[i].href.match("^file://")) {
        console.log("found " + links[i])
        for (j=0; j<office_files.length; j++) {
            // Check if it has a known file extension of Office
            if (office_files[j]["extensions"].includes(links[i].href.split(".").pop())) {
                links[i].href = rewrite_link(links[i].href, office_files[j]["protocol"]);
                break;
            }
        }
    }
}