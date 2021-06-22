import pytesseract
from PIL import Image
import datetime
import cv2
import sys
import os
import os.path
import re
import numpy as np
pytesseract.pytesseract.tesseract_cmd = r'C:\Users\MOHITBHAT\Tesseract-OCR\tesseract'
TESSDATA_PREFIX = r'C:\Users\MOHITBHAT\Tesseract-OCR'
class Text_Extractor():
    #Constructor
    def __init__(self,image_file):
        self.image_file=image_file
        if self is None:
            return 0
        
#Function to extract the text from image as string 
    def extract_text(self): 

        #img=Image.open(self.image_file)
        img = cv2.imread(self.image_file)
        #resize the image
        img = cv2.resize(img, None, fx=2, fy=2, interpolation=cv2.INTER_CUBIC)
        #convert the image to gray
        img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        text=pytesseract.image_to_string(img) 
        return text
    
image_file_name =sys.argv[1]
te= Text_Extractor(image_file_name)
text=te.extract_text()
res=text.split()
print("{",end=' ')
for i in range(len(res)):
    if res[i]=='Licence':
       print('"License No":','"{}"'.format(res[i+2]),end=',')
    
    if(res[i]=='Name:'):
           print('"Name":','"{} {}"'.format(res[i+1],res[i+2]),end=',')
    if res[i]=='DOB:':
        print('"DOB":','"{}"'.format(res[i+1]),end=',')
    if res[i]=='Issue':
        print('"Issue Date":','"{}"'.format(res[i+2]),end=',')
    if res[i]=='Validity:':
        print('"Validity":','"{}"'.format(res[i+1]),end=' ')
           
print("}")