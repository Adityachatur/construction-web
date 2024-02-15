
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };


        window.addEventListener('scroll', toggleVisibility);


        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="fixed bottom-10 right-10 z-50">

            {isVisible && (
                <button
                    className="bg-gray-400 hover:bg-black hover:shadow-lg  text-white rounded-full"
                    onClick={scrollToTop}
                >
                    <FontAwesomeIcon icon={faChevronUp} className='p-3 text-xl font-bold' />
                </button>
            )}
        </div>
    );
}

export default ScrollToTop;
