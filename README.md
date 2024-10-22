# Extract Text from images using Tesseract OCR and then translate to other language by using @google-cloud/translate
We often find ourselves needing to copy content from a Image that we cannot edit or copy content from. At this time, you can use this program.

## Requirements
- Tesseract OCR: You need to have Tesseract OCR installed on your system. You can download it from the official GitHub repository: [Tesseract OCR](https://github.com/tesseract-ocr/tesseract).
```
## Usage
1. Convert image to text
2. Modify text to complete sentences and fix error sentence.
3. Trnaslate completed sentences.
4. Write text in docx.
```

## Future explorations
 - Create a User Interface (UI) to edit processed Text, allowing additional features like text selection, formatting options, and the ability to correct any OCR errors. This also allows users to copy the extracted text and paste it directly into other applications or forms. This will make it easier to use the extracted text for various purposes, such as data entry or content generation.
 
 - Implement a for loop that processes each image one by one and outputs the extracted text for all images in a single run. This will streamline the text extraction process for large volumes of images.
 - Continue experimenting with different image pre-processing techniques to further improve OCR accuracy.
 - Optimize performance by using multi-threading or multiprocessing to help speed up the text extraction process.
 - Integrate natural language processing techniques to perform advanced analysis such as keyword extraction on the extracted text. 
