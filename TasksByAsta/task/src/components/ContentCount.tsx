import { InfoProps } from "../App"

export default function ContentCount({ info }: { info: InfoProps[] }) {
    return (
        <div className="w-full h-full col-span-2 flex flex-col flex-wrap">
            {
              info.map((item: InfoProps) => (
                <p className="text-lg" style={{color: item.color}}>{item.flavor}: {item.count}</p>
              ))
            }
          </div>
    )
}