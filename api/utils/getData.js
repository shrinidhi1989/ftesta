const fs = require("fs").promises;

async function readDirectory() {
  var homeData = [];
  var aboutData = [];
  var contactData = [];

  await getFilesList("./cms/home/text", "1", homeData);
  await getFilesList("./cms/home/img", "2", homeData);
  await getFilesList("./cms/home/pdf", "3", homeData);

  await getFilesList("./cms/about/text", "1", aboutData);
  await getFilesList("./cms/about/img", "2", aboutData);
  await getFilesList("./cms/about/pdf", "3", aboutData);

  await getFilesList("./cms/contact/text", "1", contactData);
  await getFilesList("./cms/contact/img", "2", contactData);
  await getFilesList("./cms/contact/pdf", "3", contactData);

  var adata = {
    data: {
      home: homeData,
      about: aboutData,
      contact: contactData,
    },
  };
  return adata;
}

async function getFilesList(path, type, pushData) {
  try {
    var data = await fs.readdir(path);
    
    for (const element of data) {
      var textData = "";
      if (type == "1") {
        textData = await readTextFile(path + "/" + element);
      }
      pushData.push({ type: type, name: element, text: textData });
    }

  } catch {}
}

async function readTextFile(path) {
  try {
    var data = await fs.readFile(path, "utf8");
    data = data.replace(/(?:\r\n|\r|\n)/g, '<br>');
    return data;
  } catch {
    return "";
  }
}

exports.readTextFile = readTextFile;
exports.readDirectory = readDirectory;
