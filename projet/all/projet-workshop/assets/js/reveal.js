const options = {
    root : null,
    rootMargin : '0px',
    threshold : .7
}

const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
        if(entry.intersectionRatio > options.threshold){
        console.log("70% visible");
        entry.target.classList.add("reveal-visible")
        
        observer.unobserve(entry.target)
    }
        // else{    
        //     console.log("invisible");
        // }
        console.log(entry.intersectionRatio);   
    })
    console.log('Handle Intersect');
    
}

const observer = new IntersectionObserver(handleIntersection, options)

document.querySelectorAll(".reveal").forEach((reveal) => observer.observe(reveal))