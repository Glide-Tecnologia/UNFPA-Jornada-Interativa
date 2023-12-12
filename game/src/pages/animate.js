// Implement hidden classes

// Create style element
let styleHidden = document.createElement("style");

// CSS rules for new class
let cssRules = ".hidden, .hidden-children > * {display: none !important;}";

// Cross-browser way to add CSS rules to the style element
if (styleHidden.styleSheet) {
    styleHidden.styleSheet.cssText = cssRules;
} else {
    styleHidden.appendChild(document.createTextNode(cssRules));
}

// Add the style element to the document's head
document.head.appendChild(styleHidden);

// -----

export function animateElement(element, effect, delay, options = {}) {
    const {
        delayItems = 0,
        duration = 1000,
        selectAll = false,
        removeAfter = false
    } = options;

    setTimeout(() => {
        let targetElement;
        // console.log('--Animate--\n' + 'element: ' + element + ' | effect: ' + effect + ' | delay: ' + delay);

        if (typeof element === "string") {
            if (selectAll == false) {
                targetElement = document.querySelector(element); 
            } else {
                targetElement = document.querySelectorAll(element); 
            }
        } else {
            targetElement = element;
        }

        if (targetElement) {
            if (targetElement.constructor === NodeList) {
                let index = 0; 
                targetElement.forEach(subElement => {
                    const subElementClassList = Array.from(subElement.classList);
                    
                    subElementClassList.forEach(className => {
                        if (className.startsWith("animate__")) {
                            subElement.classList.remove(className);
                        }
                    });

                    setTimeout(() => {
                        subElement.style.animationDuration = duration + "ms";
                        subElement.classList.add("animate__animated", "animate__"+effect);
                        subElement.classList.remove("hidden");
                    }, index*delayItems);

                    if (removeAfter == true) {
                        setTimeout(() => {
                            subElement.classList.remove("animate__animated", "animate__"+effect);
                        }, delayItems*index + 50);
                    }

                    index++;
                });
            } else {
                const targetElementClassList = Array.from(targetElement.classList);
                targetElementClassList.forEach(className => {
                    if (className.startsWith("animate__")) {
                        targetElement.classList.remove(className);
                    }
                });

                targetElement.style.animationDuration = duration + "ms";
                targetElement.classList.add("animate__animated", "animate__"+effect);
                targetElement.classList.remove("hidden");

                if (removeAfter == true) {
                    setTimeout(() => {
                        targetElement.classList.remove("animate__animated", "animate__"+effect);
                    }, 50);
                }
            }
        } else {
            console.warn("animate: \"" + element +  "\" doesn't exist");
        }
    }, delay);
}