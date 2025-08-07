export const myProjects = [
  {
    id: 1,
    title: "Brain Tumor Detection",
    description:
      "Developed a deep learning model to accurately detect and classify brain tumors from MRI scans into Glioma, Meningioma, Pituitary, and Normal categories.",
    subDescription: [
      "Designed and trained a CNN model using VGG19 architecture, achieving 96% accuracy on the test dataset.",
      "Applied data preprocessing and augmentation techniques to balance the imbalanced 4-class dataset.",
      "Utilized transfer learning with a custom trained `effnet.keras` model to enhance classification performance.",
      "Implemented model evaluation with metrics such as confusion matrix, precision, recall, and F1-score.",
    ],
    href: "https://github.com/KrishnaKV2004/Brain-Tumor-Detection.git",
    logo: "",
    image: "/assets/projects/brain.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Tensorflow",
        path: "/assets/logos/tensor.svg",
      },
      {
        id: 3,
        name: "Keras",
        path: "/assets/logos/keras.svg",
      },
      {
        id: 4,
        name: "Scikit Learn",
        path: "/assets/logos/scikit.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Plant Disease Detection",
    description:
      "Developed a deep learning model to detect and classify plant diseases from leaf images, helping in early crop disease identification.",
    subDescription: [
      "Built and trained a CNN model using TensorFlow and Keras to classify multiple plant leaf diseases.",
      "Performed image preprocessing and augmentation to improve model robustness and accuracy.",
      "Achieved over 95% accuracy on the test dataset for multi-class plant disease classification.",
      "Visualized training performance with loss and accuracy graphs to fine-tune the model.",
    ],
    href: "https://github.com/KrishnaKV2004/Plant-Disease-Detection.git",
    logo: "",
    image: "/assets/projects/plant.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Tensorflow",
        path: "/assets/logos/tensor.svg",
      },
      {
        id: 3,
        name: "Keras",
        path: "/assets/logos/keras.svg",
      },
      {
        id: 4,
        name: "Scikit Learn",
        path: "/assets/logos/scikit.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Human-Computer Interaction",
    description:
      "Developed a gesture-controlled mouse system that enables users to interact with their computer through hand gestures, enhancing accessibility and modern HCI experiences.",
    subDescription: [
      "Implemented real-time hand tracking and gesture recognition using OpenCV and MediaPipe.",
      "Designed a system to perform mouse movements, clicks, and interactions without physical input devices.",
      "Optimized gesture detection for smooth and responsive performance with minimal latency.",
      "Enhanced accessibility by providing an alternative input method for touchless computer control.",
    ],
    href: "https://github.com/KrishnaKV2004/Human-Computer-Interaction.git",
    logo: "",
    image: "/assets/projects/hci.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Open-CV",
        path: "/assets/logos/opencv.svg",
      },
      {
        id: 3,
        name: "MediaPipe",
        path: "/assets/logos/mediapipe.svg",
      },
      {
        id: 4,
        name: "Numpy",
        path: "/assets/logos/numpy.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Synaptron - Neural Network from Scratch",
    description:
      "Developed Synaptron, a neural network built from scratch using Python and NumPy",
    subDescription: [
      "Implemented core neural network components including forward propagation, backpropagation, and gradient descent without external ML libraries.",
      "Designed support for multiple layers, activation functions, and customizable architectures.",
      "Trained models for classification tasks, achieving high accuracy with optimized learning rates and batch processing.",
      "Visualized training progress with loss and accuracy curves to analyze model performance.",
    ],
    href: "https://github.com/KrishnaKV2004/Synaptron.git",
    logo: "",
    image: "/assets/projects/synaptron.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Numpy",
        path: "/assets/logos/numpy.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Air Canvas - Gesture Drawing Application",
    description:
      "Created an interactive air canvas that allows users to draw, change colors, and erase in real-time using hand gestures",
    subDescription: [
      "Implemented real-time hand and finger tracking using OpenCV and MediaPipe for gesture detection.",
      "Developed a virtual drawing canvas where users can draw, change colors, and erase without physical contact.",
      "Optimized gesture recognition for smooth and accurate drawing with minimal latency.",
      "Enhanced the user experience with dynamic color selection and gesture-based controls.",
    ],
    href: "https://github.com/KrishnaKV2004/Air-Canvas.git",
    logo: "",
    image: "/assets/projects/air.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Open-CV",
        path: "/assets/logos/opencv.svg",
      },
      {
        id: 3,
        name: "MediaPipe",
        path: "/assets/logos/mediapipe.svg",
      },
      {
        id: 4,
        name: "Numpy",
        path: "/assets/logos/numpy.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/krishnakv2004",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/krishna_r35",
    icon: "/assets/socials/instagram.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/KrishnaKV2004",
    icon: "/assets/socials/github.svg"
  },
];

export const experiences = [
  {
    title: "B.Tech CSE",
    job: "Graphic Era University",
    date: "2022-Present",
    contents: [
      "Pursuing a Bachelor's degree in Computer Science Engineering.",
      "Learning core subjects like Data Structures, Algorithms, and Database Management.",
      "Applying academic knowledge to real-world projects in AI, ML, and Web Development.",
    ],
  },
  {
    title: "Self-Learning & Personal Projects",
    job: "Aspiring Software Developer",
    date: "2023-Present",
    contents: [
      "Developed interactive web applications using React, Vite, and Tailwind CSS.",
      "Explored 3D experiences with Three.js for visually engaging interfaces.",
      "Built deep learning models for image classification and gesture recognition using TensorFlow and Keras.",
      "Continuously enhancing skills in full-stack development and AI technologies through hands-on projects.",
    ],
  },
  {
    title: "Workshops & Certifications",
    job: "Skill Development",
    date: "2023-Present",
    contents: [
      "Completed 'Machine Learning in Python' certification, mastering neural networks and data preprocessing.",
      "Attended workshops on AI, Android Development, and UI/UX design to expand technical knowledge.",
      "Actively participating in hackathons and coding competitions to enhance problem-solving skills.",
    ],
  },
];
export const reviews = [
  {
    name: "Hello World",
    username: "@startsmall",
    body: "Every big developer journey starts with a tiny line of code.",
    img: "https://robohash.org/helloworld",
  },
  {
    name: "Version 1.0",
    username: "@neverdone",
    body: "Done is better than perfect—ship it and improve along the way!",
    img: "https://robohash.org/version1",
  },
  {
    name: "Debug Mode",
    username: "@bughunter",
    body: "Bugs aren’t mistakes, they’re just unexpected teachers.",
    img: "https://robohash.org/debugmode",
  },
  {
    name: "Refactor",
    username: "@glowup",
    body: "Great code is rarely written—it's rewritten with care.",
    img: "https://robohash.org/refactor",
  },
  {
    name: "Merge Conflict",
    username: "@lessonlearnt",
    body: "Collaboration can be messy, but every conflict teaches growth.",
    img: "https://robohash.org/mergeconflict",
  },
  {
    name: "Friday Deploy",
    username: "@brave",
    body: "Fortune favors the bold… but maybe wait till Monday 😅",
    img: "https://robohash.org/fridaydeploy",
  },
  {
    name: "Commit History",
    username: "@storyofcode",
    body: "Every successful project is built on a mountain of small wins.",
    img: "https://robohash.org/commithistory",
  },
  {
    name: "Launch Day",
    username: "@momentofpride",
    body: "From an idea to reality—every line of code was worth it!",
    img: "https://robohash.org/launchday",
  },
];