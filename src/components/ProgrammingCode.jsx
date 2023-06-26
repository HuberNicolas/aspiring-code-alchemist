import {useEffect} from 'react';
import Prism from 'prismjs';
// import 'prismjs/themes/prism-dark.css'; // prism original
import '../../themes/prism-shades-of-purple.css';
import 'prismjs/components/prism-python.js'
import 'prismjs/components/prism-sql.js'
import 'prismjs/components/prism-latex.js'
import 'prismjs/components/prism-java.js'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-markup-templating'

function ProgrammingCode({language, code}) {

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div className="Code">
            <pre>
                <code className={`language-${language}`}>{code}</code>
            </pre>
        </div>
    );
}

export default ProgrammingCode
