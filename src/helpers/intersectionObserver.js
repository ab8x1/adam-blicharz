import { useEffect } from 'react';

let listenerCallbacks = new WeakMap();

let defaultObserver, customObservers = [];

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

function getIntersectionObserver(customProps) {
  if(customProps){
    const {observer} = customObservers.find(
      ({props}) => props.rootMargin === customProps.rootMargin && props.threshold === customProps.threshold
    ) || {};
    if(!observer){
      const newCustomObserver = new IntersectionObserver(handleIntersections, customProps);
      customObservers.push({observer: newCustomObserver, props: customProps});
      return newCustomObserver;
    }
    else return observer;
  }
  else{
    if (defaultObserver === undefined) {
      defaultObserver = new IntersectionObserver(handleIntersections, {
        rootMargin: '100px',
        threshold: '0.15',
      });
  }
    return defaultObserver;
  }
}

export function useIntersection(elem, callback, customProps) {
  useEffect(() => {
    let target = elem.current;
    let observer = getIntersectionObserver(customProps);
    listenerCallbacks.set(target, callback);
    observer.observe(target);

    return () => {
      listenerCallbacks.delete(target);
      observer.unobserve(target);
    };
  }, []);
}