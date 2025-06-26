import NavLink from "./ui/NavLink";
import componentList from "@/lib/utils/compList";

export default function () {
    return (
        <div className="border-b custom-border">
            <div className="container mx-auto custom-border border-l border-r p-16">
                <div className="text-3xl font-bold font-mono text-black my-5">
                    Selenium Components
                </div>
                {/* custom-border border border-r-0 border-b-0 */}
                <div className="grid grid-cols-5 custom-border border border-r-0 border-b-0">
                    {componentList.map((data: any, index: number) => {
                        return (
                            <div
                                key={index}
                                // custom-border border-r border-b
                                className="p-3 text-center custom-border border-r border-b"
                            >
                                <div>
                                    <NavLink href={data.url || ""}>
                                        {data.title}
                                    </NavLink>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
