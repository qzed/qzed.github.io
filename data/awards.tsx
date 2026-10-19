import icons from "@/components/icons"

const awards = [
    {
        id: "iros2026-best-paper-finalist",
        title: "Best Paper Award Finalist",
        event: "International Conference on Intelligent Robots and Systems (IROS) 2026",
        date: "2026-09",
        kind: "paper",
        certificate: "/assets/awards/iros2026-best-paper-finalist.pdf",
        publication: "sge",
    },
    {
        id: "neurips2026-top-reviewer",
        title: "Top Reviewer",
        event: "Conference on Neural Information Processing Systems (NeurIPS) 2026",
        date: "2026-10",
        kind: "service",
        certificate: "/assets/awards/neurips2026-top-reviewer.pdf",
    },
    {
        id: "rvc2022-flow",
        title: "1st Place, Optical Flow",
        badge: "1st Place, RVC 2022 Optical Flow",
        event: "Robust Vision Challenge 2022, in conjunction with ECCV 2022",
        date: "2022-10",
        kind: "competition",
        certificate: "/assets/awards/rvc2022-flow-1st-place.pdf",
        publication: "ms-raft-plus",
        links: [
            {
                title: "Report",
                link: "https://arxiv.org/abs/2210.16900",
                icon: icons.Description,
            },
        ],
    },
]

export default awards
