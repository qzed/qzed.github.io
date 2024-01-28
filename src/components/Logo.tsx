export type Properties = {
    className?: string
}

export default function Logo(props: Properties) {
    return (
        <svg viewBox="0 16 128 96" fill="currentColor" className={props?.className}>
            <path d="M46.3683 21.0665L56.2987 42.3623L25.8608 107.636H6L46.3683 21.0665Z" />
            <path d="M78.7081 107.636H122.866L114.472 89.6365H87.1016L78.7081 107.636Z" />
            <path d="M92.2987 42.3623L82.3683 21.0665L42 107.636H61.8608L92.2987 42.3623Z" />
        </svg>
    )
}
