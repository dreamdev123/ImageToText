const Tesseract = require("tesseract.js");
const path = require("path");
const { TemplateHandler } = require('easy-template-x');
const fs = require('fs')
// Path to the image
const imagePath = "./task/";
const filePath = "./output/";

// Perform OCR on the image
fs.readdir(imagePath, async (err, files) => {
    if (err) {
        return console.error("Unable to scan directory:", err);
    }
    for (let i = 0; i < files.length; i++) {
        console.log(files[i] + " started...");
        await Tesseract.recognize(
            path.join(imagePath, files[i]),
            "eng" // Language, 'eng' for English
        )
            .then(async ({ data: { text } }) => {
                // First read template docx
                const templateFile = fs.readFileSync('myTemplate.docx');

                const data = {
                    posts: [
                        { text: text },
                    ]
                };

                const handler = new TemplateHandler();
                // Make docx by using tempate
                const doc = await handler.process(templateFile, data);
                // Write file
               await fs.writeFileSync(path.join(filePath, files[i] + '.docx'), doc);
            })
            .catch((error) => {
                console.error("OCR Error:", error);
            });
        console.log(files[i] + " end.");
    }
});


