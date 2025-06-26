import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CodeDisplay({
    code,
    language = "javascript",
}: {
    code: string;
    language?: string;
}) {
    return (
        <div className="code-container">
            <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
                showLineNumbers={true}
                wrapLines={true}
                wrapLongLines={true}
                customStyle={{
                    margin: 0,
                    fontSize: "16px",
                    backgroundColor: "#000",
                    padding: "20px",
                    whiteSpace: "pre-wrap",
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                    wordBreak: "break-word",
                }}
                lineNumberStyle={{
                    color: "#000",
                    backgroundColor: "#000",
                    minWidth: "30px",
                }}
                lineNumberContainerStyle={{
                    color: "lightblue",
                    fontSize: "0.9em",
                }} // Customize line number style
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
}
