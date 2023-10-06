import { useEffect } from 'react';

let listenerCallbacks = new WeakMap();
let defaultObserver;

function handleIntersections(entries, observer) {
  entries.forEach(entry => {
    if (listenerCallbacks.has(entry.target)) {
      let cb = listenerCallbacks.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listenerCallbacks.delete(entry.target);
        cb();
      }
    }
  });
}

function getIntersectionObserver() {
  if (defaultObserver === undefined) {
      defaultObserver = new IntersectionObserver(handleIntersections, {
        rootMargin: '0px',
        threshold: '0.7',
      });
  }
  return defaultObserver;
}

export default function useIntersection(elem, callback) {
    useEffect(() => {
        const target = elem.current;
        let observer = getIntersectionObserver();
        listenerCallbacks.set(target, callback);
        observer.observe(target);
    }, [])
}