import NavLink from "./ui/NavLink";
import componentList from "@/lib/utils/compList";

export default function () {
    return (
        <div className="border-b custom-border">
            <div className="container mx-auto custom-border border-l border-r p-16">
                <h1 className="my-5">Selenium Practice Components!,</h1>
                {/* custom-border border border-r-0 border-b-0 */}
                <div className="grid grid-cols-5 px-3">
                    {componentList.map((data: any, index: number) => {
                        return (
                            <div
                                key={index}
                                // bg-[var(--color-primary-400)] custom-border border-r border-b bg-[var(--color-primary-100)]
                                className="p-3 text-center"
                            >
                                <div>
                                    <NavLink
                                        href={data.url || ""}
                                        className="w-full"
                                    >
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
