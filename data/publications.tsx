import icons from "@/components/icons"

const publications = [
    {
        title: "Streaming Gaussian Encoding for 4D Panoptic Occupancy Tracking",
        year: 2026,
        authors: [
            {
                name: "Maximilian Luz",
            },
            {
                name: "Thomas Nürnberg",
                link: "https://scholar.google.com/citations?user=tJj06xYAAAAJ&hl=en",
            },
            {
                name: "Yakov Miron",
                link: "https://scholar.google.com/citations?hl=en&user=sVVAo00AAAAJ",
            },
            {
                name: "Abhinav Valada",
                link: "https://rl.uni-freiburg.de/people/valada",
            },
        ],
        published: "International Conference on Intelligent Robots and Systems (IROS)",
        type: "conference",
        link: "https://sge.cs.uni-freiburg.de/",
        links: [
            {
                title: "arXiv",
                link: "https://arxiv.org/abs/2606.30754",
                icon: icons.Description,
            },
            {
                title: "Website",
                link: "https://sge.cs.uni-freiburg.de/",
                icon: icons.Language,
            },
            {
                title: "Code",
                link: "https://github.com/robot-learning-freiburg/lags",
                icon: icons.Code,
            },
        ],
    },
    {
        title: "LaGS: Latent Gaussian Splatting for 4D Panoptic Occupancy Tracking",
        year: 2026,
        authors: [
            {
                name: "Maximilian Luz",
            },
            {
                name: "Rohit Mohan",
                link: "https://rl.uni-freiburg.de/people/mohan",
            },
            {
                name: "Thomas Nürnberg",
                link: "https://scholar.google.com/citations?user=tJj06xYAAAAJ&hl=en",
            },
            {
                name: "Yakov Miron",
                link: "https://scholar.google.com/citations?hl=en&user=sVVAo00AAAAJ",
            },
            {
                name: "Daniele Cattaneo",
                link: "https://rl.uni-freiburg.de/people/cattaneo",
            },
            {
                name: "Abhinav Valada",
                link: "https://rl.uni-freiburg.de/people/valada",
            },
        ],
        published: "IEEE Robotics and Automation Letters (RA-L)",
        type: "journal",
        link: "https://lags.cs.uni-freiburg.de/",
        links: [
            {
                title: "arXiv",
                link: "https://arxiv.org/abs/2602.23172",
                icon: icons.Description,
            },
            {
                title: "IEEE Xplore",
                link: "https://ieeexplore.ieee.org/document/11568514/",
                icon: icons.LibraryBooks,
            },
            {
                title: "Website",
                link: "https://lags.cs.uni-freiburg.de/",
                icon: icons.Language,
            },
            {
                title: "Code",
                link: "https://github.com/robot-learning-freiburg/lags",
                icon: icons.Code,
            },
        ],
    },
    {
        title: "Amodal Optical Flow",
        year: 2024,
        authors: [
            {
                name: "Maximilian Luz",
                mark: "*",
            },
            {
                name: "Rohit Mohan",
                mark: "*",
                link: "https://rl.uni-freiburg.de/people/mohan",
            },
            {
                name: "Ahmed Rida Sekkat"
            },
            {
                name: "Oliver Sawade"
            },
            {
                name: "Elmar Matthes"
            },
            {
                name: "Thomas Brox",
                link: "https://lmb.informatik.uni-freiburg.de/people/brox/index.en.html",
            },
            {
                name: "Abhinav Valada",
                link: "https://rl.uni-freiburg.de/people/valada",
            },
        ],
        published: "International Conference on Robotics and Automation (ICRA)",
        type: "conference",
        link: "http://amodal-flow.cs.uni-freiburg.de/",
        links: [
            {
                title: "arXiv",
                link: "https://arxiv.org/abs/2311.07761",
                icon: icons.Description,
            },
            {
                title: "IEEE Xplore",
                link: "https://ieeexplore.ieee.org/document/10611314",
                icon: icons.LibraryBooks,
            },
            {
                title: "Website",
                link: "http://amodal-flow.cs.uni-freiburg.de/",
                icon: icons.Language,
            },
            {
                title: "Video",
                link: "https://www.youtube.com/watch?v=tzeQ0h9ttYM",
                icon: icons.Movie,
            },
            {
                title: "Code",
                link: "https://github.com/robot-learning-freiburg/amodal-optical-flow",
                icon: icons.Code,
            },
        ]
    },
    {
        title: "CCMR: High Resolution Optical Flow Estimation via Coarse-To-Fine Context-Guided Motion Reasoning",
        year: 2024,
        authors: [
            {
                name: "Azin Jahedi",
                link: "https://www.vis.uni-stuttgart.de/en/institute/team/Jahedi/",
            },
            {
                name: "Maximilian Luz",
            },
            {
                name: "Marc Rivinius",
                link: "https://www.sec.uni-stuttgart.de/institute/team/Rivinius/",
            },
            {
                name: "Andrés Bruhn",
                link: "https://www.vis.uni-stuttgart.de/en/institute/team/Bruhn-00001/",
            },
        ],
        published: "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)",
        type: "conference",
        link: "https://ieeexplore.ieee.org/abstract/document/10483845",
        links: [
            {
                title: "arXiv",
                link: "https://arxiv.org/abs/2311.02661",
                icon: icons.Description,
            },
            {
                title: "IEEE Xplore",
                link: "https://ieeexplore.ieee.org/abstract/document/10483845",
                icon: icons.LibraryBooks,
            },
            {
                title: "Code",
                link: "https://github.com/cv-stuttgart/CCMR",
                icon: icons.Code,
            },
        ]
    },
    {
        title: "MS-RAFT+: High Resolution Multi-Scale RAFT",
        year: 2023,
        authors: [
            {
                name: "Azin Jahedi",
                link: "https://www.vis.uni-stuttgart.de/en/institute/team/Jahedi/",
            },
            {
                name: "Maximilian Luz",
            },
            {
                name: "Marc Rivinius",
                link: "https://www.sec.uni-stuttgart.de/institute/team/Rivinius/",
            },
            {
                name: "Lukas Mehl",
                link: "https://www.vis.uni-stuttgart.de/institut/team/Mehl-00002/",
            },
            {
                name: "Andrés Bruhn",
                link: "https://www.vis.uni-stuttgart.de/en/institute/team/Bruhn-00001/",
            },
        ],
        published: "International Journal of Computer Vision (IJCV)",
        type: "journal",
        link: "https://link.springer.com/article/10.1007/s11263-023-01930-7",
        links: [
            {
                title: "Springer/IJCV",
                link: "https://link.springer.com/article/10.1007/s11263-023-01930-7",
                icon: icons.LibraryBooks,
            },
            {
                title: "Code",
                link: "https://github.com/cv-stuttgart/MS_RAFT_plus",
                icon: icons.Code,
            },
        ],
    },
]

export default publications
