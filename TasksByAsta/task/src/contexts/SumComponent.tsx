interface SumProps {
    total: number
    subtotal: number
    discount: number
}

export default function SumComponent({ total, subtotal, discount }: SumProps) {
    return (
        <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center">
            <p>Discount: {discount}</p>
            <p>Subtotal: {subtotal}</p>
            <p className="font-bold">Total: {total}</p>
        </div>
    )
}