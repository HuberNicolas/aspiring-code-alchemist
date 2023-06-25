import { useEffect, useRef } from 'react';
import Prism from 'prismjs';
// import 'prismjs/themes/prism-dark.css'; // prism original
import '../../themes/prism-shades-of-purple.css';
import 'prismjs/components/prism-python.js'
import 'prismjs/components/prism-sql.js'
import 'prismjs/components/prism-latex.js'
import 'prismjs/components/prism-java.js'
import 'prismjs/components/prism-php.js'
import 'prismjs/components/prism-markup-templating.js'
import Typed from "typed.js";

function TypedProgrammingCode({ language, code }) {
    const codeRef = useRef(null);
    const typedRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: [code],
            typeSpeed: 50,
            showCursor: false,
            startDelay: 1000,
            smartBackspace: true,
            onComplete: () => {
                Prism.highlightAll();
            },
        };

        typedRef.current = new Typed(codeRef.current, options);

        return () => {
            if (typedRef.current) {
                typedRef.current.destroy();
            }
        };
    }, [code]);

    return (
        <div className="Code">
            <pre>
        <code ref={codeRef} className={`language-${language} preformatted`}></code>
      </pre>
        </div>
    );
}

export default TypedProgrammingCode;
