
interface ButtonComponentProps {
    flavor: string
    color: string
    textColor: string
    click: () => void
}
export default function ButtonComponent({ flavor, color, textColor, click }: ButtonComponentProps) {
    return (
        <button 
            onClick={click}
            className="w-full h-full hover:opacity-90 transition-opacity" style={{ backgroundColor: color, color: textColor }}
        >
            {flavor}
        </button>
    )
}