import BackButton from "@/components/BackButton";
import componentList from "@/lib/utils/compList";
import CodeDisplay from "@/components/CodeDisplay";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const [component] = componentList.filter((item: any) => {
        return item.url === slug;
    });

    console.log(component.code);

    return (
        <section className="custom-border border-b">
            <div className="container mx-auto border-l custom-border border-r p-16">
                <div className="text-3xl font-bold font-mono flex justify-between items-center mb-8">
                    <div>{component.title}!,</div>
                    <div className="flex item-center">
                        <BackButton />
                    </div>
                </div>
                <div className="mb-8">
                    <h1 className="text-xl font-bold mb-1">Definition:</h1>
                    <div>{component.description}</div>
                </div>
                <div className="mb-8">
                    <h1 className="text-xl font-bold mb-1">Sample:</h1>
                    <div className="grid grid-cols-2 custom-border border bg-gray-100">
                        <div className="p-6">
                            <component.component />
                        </div>
                        <div className="bg-black flex flex-cols items-center">
                            <CodeDisplay
                                code={component.code || ""}
                                language="javascript"
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-8">
                    <h1 className="text-xl font-bold mb-1">Youtube:</h1>
                    <div>
                        Have trouble in understanding? <u>Here</u> is youtube
                        video to help you
                    </div>
                </div>
            </div>
        </section>
    );
}
