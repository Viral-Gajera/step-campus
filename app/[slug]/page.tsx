import BackButton from "@/components/BackButton";
import componentList from "@/lib/utils/compList";
import CodeDisplay from "@/components/CodeDisplay";
import Image from "next/image";

// Define generateStaticParams to provide all possible slug values
export async function generateStaticParams() {
    return componentList.map((component: any) => ({
        slug: component.url, // Assuming component.url is the slug value
    }));
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const [component] = componentList.filter((item: any) => {
        return item.url === slug;
    });

    return (
        <section className="custom-border border-b">
            <div className="container mx-auto border-l custom-border border-r p-16">
                <div className="text-3xl font-bold font-mono flex justify-between items-center mb-8">
                    <h1>{component?.title}!,</h1>
                    <div className="flex item-center">
                        <BackButton />
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className=" font-bold mb-1">Definition:</h2>
                    <div>{component?.description}</div>
                </div>
                <div className="mb-8">
                    <h2 className=" font-bold mb-2">
                        {component?.title} Example:
                    </h2>
                    {/*  custom-border border grid grid-cols-2 */}
                    <div className="custom-border border  rounded-lg">
                        <div className="p-6">
                            <component.component />
                        </div>
                        {/* <div className="bg-black flex flex-cols items-center">
                            <CodeDisplay
                                code={component.code || ""}
                                language="javascript"
                            />
                        </div> */}
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className=" font-bold mb-1">
                        <Image
                            src="/youtube-logo.svg"
                            alt="Youtube logo"
                            width={30}
                            height={30}
                            className="inline-block pb-1"
                        ></Image>{" "}
                        Youtube:
                    </h2>
                    <div>
                        <span className="font-bold" >Stuck?</span>
                        <a
                            href="https://youbute.com"
                            target="_blank"
                            className="hover:font-bold p-2 cursor-pointer underline underline-offset-2 italic"
                        >
                            Watch the Step-by-Step
                            Tutorial on YouTube
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
