import React, { useEffect } from 'react';

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -ToyVerse`;
    }, [title])
}

export default useTitle;