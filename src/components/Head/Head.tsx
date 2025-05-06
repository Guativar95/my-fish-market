import React from 'react';

interface HeadProps {
    title: string;
}

const Head: React.FC<HeadProps> = ({ title }) => {
    React.useEffect(() => {
        document.title = title;
    }, [title]);

    return null;
};

export default Head;