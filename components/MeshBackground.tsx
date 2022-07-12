import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from 'tsparticles-engine';

type Props = {
    className?: string
}

async function init(engine: Engine) {
    await loadSlim(engine);
}

const MeshBackground = ({ className }: Props) => {
    const options = {
        fpsLimit: 30,
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.15,
                width: 1,
            },
            move: {
                direction: "none" as const,
                enable: true,
                outModes: {
                    default: "bounce" as const,
                },
                random: false,
                speed: 0.1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 700,
                },
                value: 100,
            },
            opacity: {
                value: 0.2,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    }

    return <Particles className={className} init={init} options={options} />
};

export default MeshBackground;
