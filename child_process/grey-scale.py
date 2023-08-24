import cv2 
import os
  
# Image path
image_path = "/Users/apple/Desktop/playground/nodejs/child_process/colourful.jpg"
directory = "/Users/apple/Desktop/playground/nodejs/child_process"
os.chdir(directory)
# Image directory
image = cv2.imread(image_path)
cv2.imshow('Original',image)
grayscale = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
# Filename
filename = 'savedImage.jpg'
  
# Using cv2.imwrite() method
# Saving the image
cv2.imwrite(filename, grayscale)
cv2.imshow('Grayscale', grayscale)