import React from 'react'
import scrollReveal from 'scrollreveal'

const ScrollReveal = ({ children, classNames, id }) => {
    const sectionRef = React.useRef(null);
    React.useEffect(() => {
        if (sectionRef.current)
            scrollReveal().reveal(sectionRef.current, {
                reset: true,
                delay: 500
            });
    }, []);

    return (
        <div
            id={id}
            ref={sectionRef}
            data-testid="section"
            className={classNames}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
