import os
import cv2
import numpy as np
import time


def face_detection(image, cond1=False):
    base_dir = os.path.dirname(__file__)
    prototxt_path = os.path.join(base_dir,'model_data', 'deploy.prototxt')
    caffemodel_path = os.path.join(base_dir, 'model_data', 'weights.caffemodel')

    # Read the model
    model = cv2.dnn.readNetFromCaffe(prototxt_path, caffemodel_path)
    (h, w) = image.shape[:2]
    blob = cv2.dnn.blobFromImage(cv2.resize(image, (300, 300)), 1.0, (300, 300), (104.0,    177.0, 123.0))
    model.setInput(blob)
    detections = model.forward()
    var = False
    for i in range(0, detections.shape[2]):
        var = True
        confidence = detections[0, 0, i, 2]

        # If confidence > 0.35, show box around face
        if (confidence > 0.35):
            if cond1:
                return "Please show your notebook for 5 seconds"
            return "All good"

        else:
            if cond1:
                return "All good"
            return "WARNING: Please adjust the camera angle"
    if var==False:
        if cond1:
            return "All good"
        return "WARNING: Please adjust the camera angle"