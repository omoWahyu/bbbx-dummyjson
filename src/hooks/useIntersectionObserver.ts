// src/hooks/useIntersectionObserver.ts
import { useEffect, useState } from "react";

const useIntersectionObserver = (
	ref: React.RefObject<HTMLElement>,
	options: IntersectionObserverInit
) => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsVisible(true);
				observer.disconnect(); // Stop observing after it becomes visible
			}
		}, options);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [ref, options]);

	return isVisible;
};

export default useIntersectionObserver;
