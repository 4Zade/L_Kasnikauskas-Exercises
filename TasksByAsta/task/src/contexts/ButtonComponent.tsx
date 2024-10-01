
interface ButtonComponentProps {
    flavor: string
    color: string
    textColor: string
}
export default function ButtonComponent({ flavor, color, textColor }: ButtonComponentProps) {
    return (
        <button className="w-full h-full hover:opacity-90 transition-opacity" style={{ backgroundColor: color, color: textColor }}>
            {flavor}
        </button>
    )
}