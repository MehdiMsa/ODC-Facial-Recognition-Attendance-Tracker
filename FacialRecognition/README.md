# Facial Recognition Project

This project is a facial recognition system that utilizes deep learning algorithms to identify individuals in images and videos. The system can be used for various applications, including security, surveillance, and personal identification.

## Tools Used

- Python: [Python Official Website](https://www.python.org/)
- OpenCV: [OpenCV Documentation](https://docs.opencv.org/)
- DLib: [DLib GitHub Repository](https://github.com/davisking/dlib)
- Face-Recognition: [Face-Recognition Documentation](https://face-recognition.readthedocs.io/en/latest/readme.html)

## Environment Setup

To set up the environment for running the facial recognition project, follow these steps:

1. Clone the repository:

  git clone https://github.com/MehdiMsa/ODC-Facial-Recognition.git

2. Navigate to the project directory:

  cd facial-recognition-project

3. Create and activate a virtual environment (optional but recommended):

  python3 -m venv env
  source env/bin/activate

4. Install the required dependencies:

  pip install -r requirements.txt

## Execution Steps

  To run the facial recognition project, follow these steps:

1. Run the facial recognition system on an image:

  python recognize_faces_image.py --image path/to/image.jpg

2. Run the facial recognition system on a video:

  python recognize_faces_video.py --video path/to/video.mp4

Make sure to replace `path/to/image.jpg` and `path/to/video.mp4` with the actual paths to the image and video files you want to process.

## Contributors

- Mehdi M'sallem

## Contributing

  Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
