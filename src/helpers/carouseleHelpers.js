let isScrolling;

// follow scroll change - moved outside component to avoid rerendering
export function followScroll(element, sortedSizes, scrollToDot, currentXPosition){
    const {target} = element;
    onScrollEnd(target, sortedSizes, scrollToDot, currentXPosition); //if user stops scrolling move to next nearest project
}

//detect when user stopped scrolling
function onScrollEnd(target, sortedSizes, scrollToDot, currentXPosition){
    clearTimeout( isScrolling );
     //if scroll was performed with arrows or dot's don't watch for scrollEnd
     if(target.scrollLeft !== currentXPosition)
     isScrolling = setTimeout(function() {
        const forth = target.scrollLeft > currentXPosition;
        getNearestDot(target, sortedSizes, forth, scrollToDot);
    }, 200);
}

function getNearestDot(target, sortedSizes, forth, scrollToDot){
    const {offsetWidth, scrollLeft} = target;
    const contentWidth = getContentWidth(sortedSizes, offsetWidth); //get exact content width for actual window size;
    const nearestDot = parseInt(scrollLeft / contentWidth);
    const targetoDot = forth ? nearestDot + 1 : nearestDot;
    scrollToDot({target: {value: targetoDot}});
}

export function getContentWidth(sortedSizes, elementWidth){
    const {columns} = [...sortedSizes].reverse().find(({size}) => window.innerWidth >= size); //get num of columns for actual window size
    return parseInt(elementWidth / columns); //get exact content width for actual window size
}