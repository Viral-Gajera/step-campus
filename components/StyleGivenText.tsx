export type StyleProps = {
    description: string;
    pattern: string;
    customClassName: string;
    token: string[];
};

export const StyleGivenText = ({
    description,
    pattern,
    customClassName,
    token = [""],
}: StyleProps) => {
    const regexFromConstructor = new RegExp(`(${pattern})`, "gi");
    const wordsArr = description.split(regexFromConstructor);

    return (
        <>
            {wordsArr.map((word: string, index: number) => {
               return  token?.includes(word) ? (
                    <span key={index} className={customClassName}>
                        {word}
                    </span>
                ) : (
                    <span key={index}>{word}</span>
                );
            })}
        </>
    );
};
